(function () {
    const url = "https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs";
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(
                        function (data) {
                            var blogWrapper = document.getElementById("demo");
                            var allPosts = data.map(item => {

                                var capitalLetter = item.title.charAt(0).toUpperCase();
                                var title = `<h2 class= 'blog-post-title'>${capitalLetter + item.title}</h2>`;
                                var body = `<p>${item.body}</p>`;
                                var meta = `<p class = "blog-post-meta">Post #<a href='#'> ${item.id}</a> </p>`
                                var blogPost = `<div class='blog-Post'>${title + meta + '<hr/>' + body + body + body + body}</div>`;
                                return title;
                            })
                                .splice(0, 4)
                                .join("");
                            blogWrapper.innerHTML = allPosts;
                        })
            }
        })
}())







// function reqListener() {
//     this.responseText;
//     console.log(this.responseText)
// }

// var oReq = new XMLHttpRequest();
// oReq.onload = reqListener;
// oReq.open("get", "https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs", true);
// oReq.send();