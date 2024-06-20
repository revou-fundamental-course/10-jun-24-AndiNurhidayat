function convertTemperature() {
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = document.getElementById('fahrenheit').value;
    let calculation = '';
    let explanation = '';

    if (celsius !== '') {
        fahrenheit = Math.round((celsius * 9/5) + 32);
        calculation = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
        explanation = `Untuk mengonversi Celsius ke Fahrenheit, kalikan suhu Celsius dengan 9/5 lalu tambahkan 32.`;
    } else {
        calculation = '';
        explanation = '';
    }

    document.getElementById('fahrenheit').value = fahrenheit;
    document.getElementById('calculation').innerText = calculation;
    document.getElementById('conversionExplanation').innerText = explanation;
}

function reverseTemperature() {
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = document.getElementById('fahrenheit').value;
    let calculation = '';
    let explanation = '';

    if (fahrenheit !== '') {
        celsius = Math.round((fahrenheit - 32) * 5/9);
        calculation = `(${fahrenheit}°F - 32) * 5/9 = ${celsius}°C`;
        explanation = `Untuk mengonversi Fahrenheit ke Celsius, kurangkan 32 dari suhu Fahrenheit lalu kalikan dengan 5/9.`;
    } else {
        calculation = '';
        explanation = '';
    }

    document.getElementById('celsius').value = celsius;
    document.getElementById('calculation').innerText = calculation;
    document.getElementById('conversionExplanation').innerText = explanation;
}

function resetForm() {
    document.getElementById('tempForm').reset();
    document.getElementById('calculation').innerText = '';
    document.getElementById('conversionExplanation').innerText = '';
}
