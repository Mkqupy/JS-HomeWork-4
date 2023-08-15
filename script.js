// 1
let btn = document.querySelector("#btn");
let input = document.querySelector("#input").getAttribute("placeholder");
btn.textContent = `${input}`;

// 2
let img = document.querySelector(".img");
img.setAttribute("scr", "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg");

// 3
let link = document.querySelector(".link");
let img2 = document.querySelector(".img2");
link.setAttribute("href", "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403");
img2.setAttribute("alt", "Cat");

// 4
let list = document.querySelector("li");
list.textContent = "зима";

console.log(list);