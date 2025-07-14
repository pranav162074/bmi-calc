document.addEventListener('DOMContentLoaded', () => { // Waits for the HTML to load completely before running JS.
  const form = document.getElementById('bmiForm'); // Get the BMI form element by its ID.
  const resultBox = document.getElementById('bmiResult'); // Get the result box where BMI output will be shown.

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents page from reloading on form submission.

    // Collect user input
    const weight = parseFloat(document.getElementById('weight').value); // Get weight in kg and convert to float.
    const heightCm = parseFloat(document.getElementById('height').value); // Get height in cm and convert to float.
    const age = parseInt(document.getElementById('age').value); // Get age and convert to integer.
    if (age < 2) {
      resultBox.innerHTML = "<p>BMI is not applicable for babies under 2 years old. Please consult a pediatrician.</p>";
      return; // <- Stop the function so BMI is not calculated
    }
    const sex = document.getElementById('sex').value; // Get selected sex (male/female/other).

    // Check for valid weight and height
    if (isNaN(weight) || isNaN(heightCm)) {
      resultBox.innerHTML = "<p>Please enter valid numbers for weight and height.</p>";
      return; // Exit if invalid input
    }

    // Convert height to meters
    const heightM = heightCm / 100;

    // Calculate BMI
    const bmi = weight / (heightM * heightM);

    let category = ''; // Declares a variable named category. To store BMI category based on age and sex

    if (age < 20) {
      // For users under 20, BMI interpretation is based on percentiles
      // Simplified version: this should ideally use WHO or CDC BMI-for-age percentiles data
      // We'll simulate it based on average tendencies

      if (sex === 'male') {
        if (bmi < 16.5) {
          category = 'Underweight (young male)';
        } else if (bmi < 22) {
          category = 'Healthy weight (young male)';
        } else if (bmi < 26) {
          category = 'Overweight (young male)';
        } else {
          category = 'Obese (young male)';
        }
      } else if (sex === 'female') {
        if (bmi < 16) {
          category = 'Underweight (young female)';
        } else if (bmi < 21.5) {
          category = 'Healthy weight (young female)';
        } else if (bmi < 25.5) {
          category = 'Overweight (young female)';
        } else {
          category = 'Obese (young female)';
        }
      } else {
        // For 'other' or unspecified
        if (bmi < 16.2) {
          category = 'Underweight';
        } else if (bmi < 21.7) {
          category = 'Healthy weight';
        } else if (bmi < 25.7) {
          category = 'Overweight';
        } else {
          category = 'Obese';
        }
      }

    } else {
      // For adults 20 and older, use standard BMI categories
      if (bmi < 18.5) {
        category = 'Underweight';
      } else if (bmi < 25) {
        category = 'Normal weight';
      } else if (bmi < 30) {
        category = 'Overweight';
      } else {
        category = 'Obese';
      }
    }

    // Display the result
    resultBox.innerHTML = `
      <h4>Your BMI: ${bmi.toFixed(2)}</h4>
      <p>Category: ${category}</p>
    `; // BMI shown with 2 decimal places so bmi.toFixed(2).
  });
});

