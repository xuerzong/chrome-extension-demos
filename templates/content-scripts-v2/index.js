const okBtn = document.getElementById("okBtn");
const colorInput = document.getElementById("colorInput");

okBtn.addEventListener("click", () => {
  const color = colorInput.value;
  console.log(color);
});
