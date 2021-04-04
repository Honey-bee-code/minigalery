const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");
container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    //   console.log(e.path[0].src)
    // jumbo.setAttribute("src", e.path[0].src);
    jumbo.src = e.target.src;
    //tambahkan class fade
    jumbo.classList.add("fade");
    // hilangkan lagi class fade
    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 500);
    // berikan class active

    thumbs.forEach(function (thumb) {
      //   if (thumb.classList.contains("active")) {
      //     thumb.classList.remove("active");
      //   }
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});
