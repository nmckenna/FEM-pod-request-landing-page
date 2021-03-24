// See: https://pageclip.co/blog/2018-02-20-you-should-use-html5-form-validation.html

const validationErrorClass = 'validation-error';
const emailInput = document.getElementById('request-access-email');

function checkValidity(options) {
    const insertError = options.insertError;
    const parent = emailInput.parentNode;
    const error = parent.querySelector(`.${validationErrorClass}`)
        || document.createElement('div');

    if (!emailInput.validity.valid && emailInput.validationMessage) {
        error.className = validationErrorClass;
        error.textContent = 'Oops! Please check your email';

        if (insertError) {
            parent.insertBefore(error, emailInput);
        }
    } else {
        error.remove();
    }
}

emailInput.addEventListener('input', function () {
    // We can only update the error or hide it on input.
    // Otherwise it will show when typing.
    checkValidity({insertError: false});
});
emailInput.addEventListener('invalid', function (e) {
    // prevent showing the default display
    e.preventDefault();

    // We can also create the error in invalid.
    checkValidity({insertError: true});
});

