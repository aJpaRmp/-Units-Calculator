const basic = document.querySelector("#basic");
const advanced = document.querySelector("#advanced");
const advancedUnitsOfLength = document.querySelectorAll(".advancedUnitsOfLength");

basic.addEventListener("click", () => {
  advancedUnitsOfLength.forEach((unit) => {
    unit.style.display = "none"; // Ukrywa wszystkie elementy .advancedUnitsOfLength
  });
});

advanced.addEventListener("click", () => {
  advancedUnitsOfLength.forEach((unit) => {
    unit.style.display = "block"; // Pokazuje wszystkie elementy .advancedUnitsOfLength
  });
});
