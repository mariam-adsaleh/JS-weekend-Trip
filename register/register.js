const form = document.getElementById("register-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const phone = document.getElementById("phone").value;

    const errors = [];

    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        errors.push("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.");
    }

    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("Email must be in a valid format.");
    }

    if (errors.length === 0) {
        const userData = {
            name,
            email,
            password,
            phone,
        };

        // Store user data in JSON object
        const jsonUserData = JSON.stringify(userData);
        console.log(jsonUserData);

        // Reset form
        form.reset();
    } else {
        alert(errors.join("\n"));
    }
});
