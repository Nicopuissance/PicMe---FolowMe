$(document).ready(function () {

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        contentType: "application/json",
        dataType: 'json',
        success: function (users) {
            var listuser = new Map()
            users.forEach(function (user) {
                listuser.set(user.id, user.username)
            })
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/posts",
                contentType: "application/json",
                dataType: 'json',
                success: function (posts) {

                    var listeposts = [];

                    posts.forEach(function (post) {
                        var mypost = $("<section/>");
                        mypost.attr("id", post.id);
                        mypost.addClass("post");
                        var author = $("<h2>");
                        author.append(listuser.get(post.userId))
                        var title = $("<h3/>");
                        title.append(post.title);
                        var content = $("<p/>");
                        content.append(post.body);
                        mypost.append(author);
                        mypost.append(title);
                        mypost.append(content);
                        $("#allPosts").append(mypost);
                        listeposts.push(post.id);
                    })

                    var url = "https://jsonplaceholder.typicode.com/comments?";
                    listeposts.forEach(function (postid) {
                        url = url + "postId=" + postid + "&"
                    })
                    url = url.substring(0, url.length - 1);

                    $.ajax({
                        url: url,
                        contentType: "application/json",
                        dataType: 'json',
                        success: function (comments) {
                            comments.forEach(function (comment) {
                                var mycomment = $("<div/>");
                                mycomment.attr("id", "comment" + comment.id);
                                mycomment.addClass("comment");
                                var name = $("<h4/>");
                                name.append(comment.name);
                                var email = $("<h5/>");
                                email.append(comment.email)
                                var content = $("<p/>");
                                content.append(comment.body)
                                mycomment.append(name, email, content);
                                $("#" + comment.postId).append(mycomment);
                                console.log("#" + comment.postId)
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

        },
        error: function () {
            console.log("Error");
        }
    });

});
