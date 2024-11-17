// Function to calculate and display the freezing timeline recommendation
function calculateFreezingTimeline() {
    // Get values from input fields
    const currentAge = parseInt(document.getElementById("currentAge").value);
    const parenthoodAge = parseInt(document.getElementById("parenthoodAge").value);
    const cycles = parseInt(document.getElementById("cycles").value);
    const resultDiv = document.getElementById("result");
    const costResultDiv = document.getElementById("costResult");

    // Validate inputs
    if (isNaN(currentAge) || isNaN(parenthoodAge) || isNaN(cycles)) {
        resultDiv.textContent = "Please enter valid numbers for age and cycles.";
        resultDiv.style.color = "red"; // Set error message color to red
        return;
    }
    if (currentAge < 18 || currentAge > 100) {
        resultDiv.textContent = "Please enter a valid current age (between 18 and 100).";
        resultDiv.style.color = "red"; // Set error message color to red
        return;
    }
    if (parenthoodAge < 18 || parenthoodAge > 100) {
        resultDiv.textContent = "Please enter a valid parenthood age (between 18 and 100).";
        resultDiv.style.color = "red"; // Set error message color to red
        return;
    }
    if (cycles < 1 || cycles > 10) {
        resultDiv.textContent = "Please enter a valid number of cycles (between 1 and 10).";
        resultDiv.style.color = "red"; // Set error message color to red
        return;
    }

    // Recommendation logic based on current age
    let recommendation;
    if (currentAge < 30) {
        recommendation = "Ideal time for egg freezing with high success rates.";
    } else if (currentAge >= 30 && currentAge <= 35) {
        recommendation = "Moderate success rates. Freezing soon is advised.";
    } else {
        recommendation = "Success rates decline significantly after age 35. Freezing as soon as possible is recommended.";
    }

    // Display the result
    resultDiv.textContent = `Recommendation: ${recommendation}`;
    resultDiv.style.color = "green"; // Set success message color to green

    // Calculate the cost based on the number of cycles
    const costPerCycle = 6000; // Assuming the cost per cycle is $6,000
    const totalCost = costPerCycle * cycles;

    // Display the estimated cost
    costResultDiv.textContent = `Estimated Total Cost for ${cycles} cycles: $${totalCost.toLocaleString()}`;
}

// Function to create the success rate chart
function createSuccessChart() {
    const ctx = document.getElementById('successChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Cycle 1', 'Cycle 2', 'Cycle 3', 'Cycle 4', 'Cycle 5'],
            datasets: [{
                label: 'Success Rate',
                data: [70, 75, 80, 85, 90],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
            }]
        },
        options: {
            animation: {
                duration: 2000,
                easing: 'easeInOutBounce'
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Success Rate (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Cycles'
                    }
                }
            }
        }
    });
}

// Call createSuccessChart when the page loads
window.onload = createSuccessChart;
