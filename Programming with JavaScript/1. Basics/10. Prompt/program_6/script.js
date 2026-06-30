// =====================================
// User Input
// =====================================

const celsius = Number(prompt("Enter Temperature (°C)"));

// =====================================
// Validation
// =====================================

if (Number.isNaN(celsius)) {
    alert("Please enter a valid number.");
}
else {

    // =====================================
    // Calculation
    // =====================================

    const fahrenheit = (celsius * 9 / 5) + 32;

    // =====================================
    // Output
    // =====================================

    alert(
`Temperature Report

Celsius : ${celsius}°C

Fahrenheit : ${fahrenheit.toFixed(2)}°F`
    );
}