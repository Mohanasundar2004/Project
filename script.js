document.getElementById('calculateBtn').addEventListener('click', function() {
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;
    const heightUnit = document.getElementById('heicalc').value;
    const weightUnit = document.getElementById('weicalc').value;
    
    let height = parseFloat(heightInput);
    let weight = parseFloat(weightInput);

    // Validate input
    if (isNaN(height) || isNaN(weight)) {
        document.getElementById('output').textContent = 'Please enter valid numbers for height and weight.';
        return;
    }
    
    if (heightUnit === 'centimeter') {
        height = height / 100; // Convert cm to meters
    }
    
    if (weightUnit === 'pounds') {
        weight = weight * 0.453592; // Convert pounds to kilograms
    }

    const bmi = weight / (height * height);
    let bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obesity';
    }

    document.getElementById('output').textContent = `Your BMI is ${bmi.toFixed(2)}. Category: ${bmiCategory}`;
});

