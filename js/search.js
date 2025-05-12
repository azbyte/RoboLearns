function searchVideo() {
      var input = document.getElementById("searchInput").value.toLowerCase();
      var videos = document.querySelectorAll(".video-item");

      videos.forEach(function (video) {
        var title = video.getAttribute("data-title");
        if (title.includes(input)) {
          video.style.display = "";
        } else {
          video.style.display = "none";
        }
      });
    }