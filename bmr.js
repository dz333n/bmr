document.addEventListener("DOMContentLoaded", function () {
  const centimetersInput = document.getElementById("centimeters");
  const resultElement = document.getElementById("result");
  const ageElement = document.getElementById("age");

  const recalculate = () => {
    const centimetersValue = parseFloat(centimetersInput.value);
    const age = parseInt(ageElement.value);

    // Clear the previous results
    resultElement.innerHTML = "";

    // Create a table element
    const table = document.createElement("table");
    table.classList.add("table");

    // Create the table header row
    const headerRow = table.insertRow();
    const weightHeaderCell = headerRow.insertCell();
    weightHeaderCell.textContent = "Weight (kg)";
    const maleHeaderCell = headerRow.insertCell();
    maleHeaderCell.textContent = "Male BMR (kcal)";
    const femaleHeaderCell = headerRow.insertCell();
    femaleHeaderCell.textContent = "Female BMR (kcal)";

    // Calculate and add BMR values for each weight (from 40kg to 200kg)
    for (let weight = 40; weight <= 200; weight++) {
      const row = table.insertRow();
      const weightCell = row.insertCell();
      const maleCell = row.insertCell();
      const femaleCell = row.insertCell();

      // BMR formulas for male and female
      const maleBMR = (10 * weight) + (6.25 * centimetersValue) - (5 * age) + 5;
      const femaleBMR = BMR = (10 * weight) + (6.25 * centimetersValue) - (5 * age) - 161;

      // Round BMR values to two decimal places
      weightCell.textContent = weight;
      maleCell.textContent = maleBMR.toFixed(2);
      femaleCell.textContent = femaleBMR.toFixed(2);
    }

    // Append the table to the result element
    resultElement.appendChild(table);
  }

  centimetersInput.addEventListener("input", recalculate);
  ageElement.addEventListener("input", recalculate);
}); 