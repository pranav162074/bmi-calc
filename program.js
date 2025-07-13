document.addEventListener('DOMContentLoaded', () => { // <- This ensures the JavaScript code runs only after the whole HTML DOM (elements, structure) is loaded, preventing errors from trying to access elements before they exist.
  const form = document.getElementById('bmiForm'); // <- Selects the HTML element with the ID bmiForm (which is your form for BMI input) and stores it in the form constant for further use.
  const resultBox = document.getElementById('bmiResult'); // <- Selects the HTML element with ID bmiResult (where you will display the BMI result) and stores it in resultBox.

  form.addEventListener('submit', (e) => { // <- Adds an event listener to the form that listens for the submit event (when the user clicks submit). The event object passed to the callback function, representing the submit event.
    e.preventDefault(); // <- What it does: Prevents the default behaviour of the form submission, which would normally reload the page or navigate away. Why it's needed: Allows you to handle the form submission with JavaScript and display results dynamically without page refresh.

    const weight = parseFloat(document.getElementById('weight').value); // <- Retrieves the value entered in the input with ID weight, converts it from a string to a floating-point number, and stores it in weight.
    const heightCm = parseFloat(document.getElementById('height').value); // <- Retrieves the value entered in the input with ID height (assumed to be in cm), converts it to float, and stores it in heightCm.
    const age = document.getElementById('age').value; // <- Retrieves the value of input with ID age as a string and stores it in age.
    const sex = document.getElementById('sex').value; // <- Retrieves the value of input with ID sex (male/female/other) as a string and stores it in sex.

    if (isNaN(weight) || isNaN(heightCm)) {
      resultBox.innerHTML = "<p>Please enter valid numbers for weight and height.</p>";
      return;
    } // <- What it does: Checks if either weight or heightCm is Not a Number (NaN) after parsing. If true: Displays an error message inside resultBox asking for valid input and stops further code execution using return.

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);

    let category = ''; // <- Declares a variable category to store the BMI category string later.
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
      <p>Category: ${category}</p>`; // <- What it does: Sets the innerHTML of the resultBox element to show: BMI value (rounded to 2 decimal places using toFixed(2)). BMI category (Underweight, Normal weight, Overweight, or Obese).
  });
});
