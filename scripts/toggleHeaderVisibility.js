export function toggleHeaderVisibility() {
  const headerElmt = document.getElementById("header");
  let scrollPosition = document.documentElement.scrollTop;

  document.addEventListener("scroll", () => {
    scrollPosition = document.documentElement.scrollTop;

    if (scrollPosition > 0) {
      headerElmt.classList.add("show");
    } else {
      headerElmt.classList.remove("show");
    }
  });
}
