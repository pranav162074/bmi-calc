document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bmiForm');
  const resultBox = document.getElementById('bmiResult');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;

    if (isNaN(weight) || isNaN(heightCm)) {
      resultBox.innerHTML = "<p>Please enter valid numbers for weight and height.</p>";
      return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);

    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal weight';
    } else if (bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    resultBox.innerHTML = `
      <h4>Your BMI: ${bmi.toFixed(2)}</h4>
      <p>Category: ${category}</p>
    `;
  });
});
