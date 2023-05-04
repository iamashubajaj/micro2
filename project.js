var count = 0;

let p = document.createElement("p");

p.setAttribute("id", "counter");
p.style.color = "green";
p.style.fontSize = "xxx-large";
// document.getElementById("counter").style.textAlign = "center"

p.innerText = count;

let c1 = document.getElementById("text");

c1.appendChild(p);
console.log(p);

let but1 = document.getElementById("b1");

but1.addEventListener("click", function () {
  count = count + 1;
  p.innerText = count;
  c1.appendChild(p);
});

let but2 = document.getElementById("b2");

but2.addEventListener("click", function () {
  count = 0;
  p.innerText = count;
  c1.appendChild(p);
});
