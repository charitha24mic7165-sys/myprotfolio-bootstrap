document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('portfolioContactForm');
    const alertPlaceholder = document.getElementById('alertPlaceholder');

    // Utility function to inject dynamic Bootstrap Alert Popups into layout
    function showAlert(message, type) {
        alertPlaceholder.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show d-flex align-items-center" role="alert">
                <i class="bi bi-check-circle-fill me-2 fs-5"></i>
                <div>${message}</div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        
        // Auto scroll to view notification context block clearly
        alertPlaceholder.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Capture Submit Action Trigger Event
    form.addEventListener('submit', function (event) {
        // Prevent default submission action to handle manual checking validation routine
        event.preventDefault();
        event.stopPropagation();

        // Specific Custom RegEx Filter check for email composition patterns
        const emailInput = document.getElementById('userEmail');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;
        
        if (emailInput.value.trim() !== "" && !emailPattern.test(emailInput.value)) {
            emailInput.setCustomValidity("Invalid Format");
        } else {
            // Clear manual validations if text values pass patterns
            emailInput.setCustomValidity("");
        }

        // Validate complete structure against HTML5 constraint check parameters
        if (form.checkValidity()) {
            // Form is successfully validated! Process data capture routines safely here
            const nameValue = document.getElementById('userName').value;
            
            showAlert(`Thank you, <strong>${nameValue}</strong>! Your validation checks passed successfully. Message simulated as sent.`, 'success');
            
            // Clean interface formatting status layout blocks back to default configurations
            form.reset();
            form.classList.remove('was-validated');
        } else {
            // Apply visual indicators from Bootstrap toolkit to flag processing error positions
            form.classList.add('was-validated');
        }
    }, false);

    // Dynamic clean-up logic to strip inline alert messages as user overwrites input strings
    const responsiveInputs = form.querySelectorAll('input, textarea');
    responsiveInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (input.id === 'userEmail') {
                input.setCustomValidity("");
            }
            if (form.classList.contains('was-validated')) {
                // Re-evaluate validity dynamically on input change
                if (input.checkValidity()) {
                    input.classList.remove('is-invalid');
                }
            }
        });
    });
});
