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
      const maleBMR = (13.7516 * weight) + (5.0033 * centimetersValue) - (6.755 * age) + 66.473;
      const femaleBMR = (9.5634 * weight) + (1.8496 * centimetersValue) - (4.6756 * age) + 655.0955;

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