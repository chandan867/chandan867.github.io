// script.js
document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const questionInput = document.getElementById('questionInput').value;
    if (!questionInput) {
        alert('Please enter your question.');
        return;
    }

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.classList.remove('result-hidden'); // Show the result container

    fetch('http://localhost:3000/webhook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: questionInput }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultOutput').textContent = data.result;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while processing your request.');
    });
});
