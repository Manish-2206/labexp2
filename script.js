// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function(event) {
            // Prevent form submission
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value;
            const nickname = document.getElementById("nickname").value;
            const dob = document.getElementById("dob").value;
            const hobbies = document.getElementById("hobbies").value;
            const citizenship = document.getElementById("citizenship").value;
            const medical = document.getElementById("medical").value;
            const gender = document.querySelector('input[name="gender"]:checked');

            // Basic validation
            if (name === "" || nickname === "" || dob === "" || hobbies === "" || citizenship === "" || medical === "") {
                alert("Please fill in all fields.");
                return;
            }

            if (!gender) {
                alert("Please select your gender.");
                return;
            }

            // If all validations pass, submit the form
            alert("Form submitted successfully!");
            form.submit(); // Uncomment this line to actually submit the form
        });
    }
});
