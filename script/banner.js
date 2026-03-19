const banner = document.getElementById('banner');
const bannerBtn = document.getElementById('bannerBtn');

bannerBtn.addEventListener("click", () => {
  console.log("test");
    banner.classList.add("none");
})