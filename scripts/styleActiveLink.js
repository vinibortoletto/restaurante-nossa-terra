export function styleActiveLink() {
  const linkElmts = document.querySelectorAll(".header__link");

  linkElmts.forEach((link) => {
    link.addEventListener("click", () => {
      // Remove "active" class from all links
      linkElmts.forEach((link) => {
        link.classList.remove("active");
      });

      // When link is clicked, add "active" class to it
      link.classList.add("active");
    });
  });
}
