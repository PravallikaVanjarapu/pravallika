// Ensure the DOM is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function() {
    // Form Submission Handler
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get the form data
        const formData = new FormData(this);

        // Convert form data to a JSON object
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Display an alert message
        alert('Thank you for contacting ETO Motors. We will get back to you soon!');
        
        // Send the form data to a server using fetch (AJAX request)
        fetch('https://example.com/api/contact', {
            method: 'POST', // or 'GET' depending on the server setup
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // You can display a success message or redirect here
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle any errors (e.g., show an error message to the user)
        });
    });
});
