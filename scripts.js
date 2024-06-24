document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const submitBtn = document.getElementById('submit-btn');

    function validateForm() {
        const emailValue = emailInput.value.trim();
        const phoneValue = phoneInput.value.trim();

        if (emailValue.length >= 5 && phoneValue.length >= 5) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    emailInput.addEventListener('input', validateForm);
    phoneInput.addEventListener('input', validateForm);
});
