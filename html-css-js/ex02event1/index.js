const vartical = document.querySelector(".vartical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const loc = document.querySelector(".loc");

document.addEventListener("mousemove", (e) => {
  console.log(e.currentTarget); // 해당이벤트의 노드 객체를 알수 있다.
  const x = e.clientX;
  const y = e.clientY;
  // console.log(`x : ${x} y : ${y}`);

  vartical.style.left = `${x}px`; // 10px
  horizontal.style.top = `${y}px`;

  target.style.left = `${x}px`; // 10px
  target.style.top = `${y}px`;

  loc.textContent = `x : ${x} y : ${y}`;
  loc.style.left = `${x}px`; // 10px
  loc.style.top = `${y}px`;
});
