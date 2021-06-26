menu = document.getElementById("header");
navbar = document.getElementById("navbar");
header = document.getElementById("header");
listItem1 = document.getElementById("listItem1");
listItem2 = document.getElementById("listItem2");
listItem3 = document.getElementById("listItem3");

// FUNCTION TO ADD NEW STYLE TO NAVBAR WHEN THE SCROLL DOWN
window.onscroll = function () {
  scroll = document.documentElement.scrollTop;
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

// FUNCTION TO SHOW THE NAVBAR WHEN THE HAMBURGER BUTTON WAS CLICKED
document.getElementById("btn-header-responsive").addEventListener("click", function () {
  menu.classList.toggle("move-content");
  navbar.classList.toggle("move-navbar");
  listItem1.classList.toggle("list-item-black");
  listItem2.classList.toggle("list-item-black");
  listItem3.classList.toggle("list-item-black");
})

// FUNCTION TO RESTORE THE NAVBAR WHEN THE WINDOW HAS A WIDTH MAJOR THAN 760
window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    menu.classList.remove("move-content");
    navbar.classList.remove("move-navbar");
  }
})