// Validating the email address

function validateEmail(email) {

    // Regex pattern for email
    const re = /\S+@\S+\.\S+/g;

    // Check if the email is valid
    let result = re.test(email);
    if (result) {
        console.log('The email is valid.');
    }
    else {
        let newEmail = prompt('Enter a valid email:');
        validateEmail(newEmail);
    }
}

// Take input
let email = prompt('Enter an email: ');

validateEmail(email);
