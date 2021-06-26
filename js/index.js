// FUNCTION TO ADD NEW STYLE TO NAVBAR WHEN THE SCROLL DOWN
window.onscroll = function () {
  scroll = document.documentElement.scrollTop;
  header = document.getElementById("header");
  listItem1 = document.getElementById("listItem1");
  listItem2 = document.getElementById("listItem2");
  listItem3 = document.getElementById("listItem3");
  if (scroll > 20) {
    header.classList.add('nav-mod');
    listItem1.classList.add("list-item-black");
    listItem2.classList.add("list-item-black");
    listItem3.classList.add("list-item-black");
  } else if (scroll <= 20) {
    header.classList.remove('nav-mod');
    listItem1.classList.remove("list-item-black");
    listItem2.classList.remove("list-item-black");
    listItem3.classList.remove("list-item-black");
  }
}

menu = document.getElementById("header");
navbar = document.getElementById("navbar");
body = document.getElementById("main");

// FUNCTION TO SHOW THE NAVBAR WHEN THE HAMBURGER BUTTON WAS CLICKED
document.getElementById("btn-header-responsive").addEventListener("click", function () {
  menu.classList.toggle("move-content");
  body.classList.toggle("move-content");
  navbar.classList.toggle("move-navbar");
})

// FUNCTION TO RESTORE THE NAVBAR WHEN THE WINDOW HAS A WIDTH MAJOR THAN 760
window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    menu.classList.remove("move-content");
    body.classList.remove("move-content");
    navbar.classList.remove("move-navbar");
  }
})