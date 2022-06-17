export const menuButton = document.getElementById("headerNavMobile__button");

export function toggleMobileMenu() {
  const menu = document.getElementById("menu");

  if (menu.classList.contains("hide")) {
    menu.classList.add("show");
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");

    setTimeout(() => {
      menu.classList.remove("show");
    }, 200);
  }
}
