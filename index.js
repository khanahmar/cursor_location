const div = document.getElementById("div");
const cursorLocation = document.getElementById("cursor-location");

div.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursorLocation.innerHTML = `X = ${x},Y = ${y}`;
});

div.addEventListener("mouseout", (e) => {
  cursorLocation.innerHTML = "";
});
