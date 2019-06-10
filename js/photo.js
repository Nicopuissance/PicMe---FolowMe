$(document).ready(function () {
    var user = JSON.parse(sessionStorage.getItem('user'))[0];

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/albums?userId=" + user.id,
        contentType: "application/json",
        dataType: 'json',
        success: function (albums) {

            var listealbums = [];

            albums.forEach(function (album) {
                var myalbum = $("<article/>");
                myalbum.attr("id", album.id);
                var title = $("<h3/>");
                title.append(album.title);
                myalbum.append(title);
                $("#pic").append(myalbum);
                listealbums.push(album.id);
            })

            var url = "https://jsonplaceholder.typicode.com/photos?";
            listealbums.forEach(function (albumid) {
                url = url + "albumId=" + albumid + "&"
            })
            url = url.substring(0, url.length - 1);

            $.ajax({
                url: url,
                contentType: "application/json",
                dataType: 'json',
                success: function (photos) {
                    photos.forEach(function (photo) {
                        var img = document.createElement("IMG");
                        img.alt = "";
                        img.setAttribute('class', 'photo');
                        img.setAttribute("id", "photo" + photo.id);
                        img.src = photo.thumbnailUrl;
                        $("#" + photo.albumId).append(img);
                    });

                },
                error: function () {
                    console.log("Error");
                }
            });

        },
        error: function () {
            console.log("Error");
        }
    });
});
