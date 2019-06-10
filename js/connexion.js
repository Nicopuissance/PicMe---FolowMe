$(document).ready(function () {

    $("#loginLink").click(function (event) {

        var username=$("#username").val();
        var number=$("#number").val();
        var coords=null;

        var link = $(this);
        event.preventDefault();
        var path = [];

        var bg = $("<div/>");
        bg.attr("id", "auth-bg");


        var random=Math.floor(Math.random() * Math.floor(10));
        random=random.toString();
        var img = document.createElement("IMG");
        img.alt = "Alt information for image";
        img.setAttribute('class', 'img');
        img.setAttribute("id",random)
        img.src="images/"+random+".png";
        $("body").append(bg);
        $(bg).append(img);


        //---------------------------------------FENETRE ET VERIF
        var auth = $("<div/>");
        auth.attr("id", "auth");
        auth.hover(
            function () {
                path = [];
            },
            function () {
                $.post(
                    "photo/login.php",
                    {code: path, id:random, username:username},
                    function (connected) {
                        if (connected) {
                            console.log("https://jsonplaceholder.typicode.com/users?username=" + username);
                            $.ajax({
                                url: "https://jsonplaceholder.typicode.com/users?username=" + username,
                                contentType: "application/json",
                                dataType: 'json',
                                success: function (result) {
                                    console.log(result);
                                    if (result.length!=0){
                                        if (result[0].phone == number) {
                                            console.log("Yes");
                                            sessionStorage.setItem('user', JSON.stringify(result));
                                            $(".in-path").addClass("path-ok");
                                            setTimeout(function () {
                                                bg.fadeOut(200, function () {
                                                    window.location = link.attr("href");
                                                });
                                            }, 500)
                                        }
                                        else errorLog(svg,1);
                                    }
                                    else errorLog(svg,1);

                                },
                                error : function(){
                                    errorLog(svg,1);
                                }
                            });


                        } else {
                            errorLog(svg);

                        }
                        coords=null;
                    },
                    "json"
                );
            }
        );

        var svg = $('<svg viewBox="0 0 290 290" xmlns="http://www.w3.org/2000/svg"/>');
        auth.append(svg);

        bg.append(auth);


        //--------------------------------------GESTION DU SURVOL
        coords = null;
        var nx=null;
        var ny=null;
        for (var i = 0; i < 9; i++) {
            var point = $("<div/>");
            point.addClass("auth-point");
            point.hover(
                function () {
                    nx = $(this).position().left + $(this).width() / 2;
                    ny = $(this).position().top + $(this).height() / 2;
                    if (coords == null) {
                        coords = {x: nx, y: ny};
                    } else {
                        svg[0].innerHTML += "<line x1='" + coords.x + "' y1='" + coords.y + "' x2='" + nx + "' y2='" + ny + "' stroke='darkgrey' />";
                        coords = {x: nx, y: ny};
                    }
                },
                function () {
                    if (!$(this).hasClass("in-path")) {
                        path.push($(this).index() - 1);
                        $(this).addClass("in-path");
                    }
                    console.log(path);
                }
            );
            auth.append(point);
        }

    });


});

function errorLog(svg,lvl=0) {
    $(".in-path").addClass("path-nok");
    setTimeout(function () {
        $(".in-path").removeClass("in-path");
        $(".path-nok").removeClass("path-nok");
        svg[0].innerHTML = "";
        $.post("photo/login.php", {code: null}, function(e){}, "json");
        if (lvl==1){
            $("#auth-bg").remove();
            console.log ("identifiant inconnu");
        }


    }, 500)
}