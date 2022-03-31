// let ham = document.querySelector(".ham");
// let user = document.querySelector(".user");

// // ham.style.display == "none";

// user.addEventListener("mouseenter", () => {
//     ham.classList.remove("hide");
//     ham.classList.add("active");
//     // if(ham.style.display == "none") {
//     //     ham.style.display == "flex";
//     // } else {
//     //     ham.style.display == "none";
//     // }
// });

// user.addEventListener("mouseout", () => {
//     ham.classList.add("hide");
//     ham.classList.remove("active");
// });

var btn1 = document.querySelector(".user");
var list2 = document.querySelector(".ham");

list2.style.display = "none";

btn1.addEventListener("click", function () {
  if (list2.style.display == "none") {
    list2.style.display = "block";
  } else {
    list2.style.display = "none";
  }
});

// windows.addEventListener("click", () => {
//   list2.style.display = "none";
// })