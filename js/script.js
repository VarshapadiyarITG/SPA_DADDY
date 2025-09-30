const form = document.querySelector("#contactForm");
const inputs = form.querySelectorAll("input");
const data = {}; // Valid data ko store karne ke liye object

// Ye check karta hai kya character lowercase hai
function isLowerCase(char) {
    return char >= 'a' && char <= 'z';
}

// Ye check karta hai kya character uppercase hai
function isUpperCase(char) {
    return char >= 'A' && char <= 'Z';
}

// Ye check karta hai kya character ek digit (0–9) hai
function isDigit(char) {
    return char >= '0' && char <= '9';
}

// Name ka pehla character letter hona chahiye (A–Z or a–z)
function startWithCharOrnot(value) {
    let firstChar = value[0];
    return ((firstChar >= 'a' && firstChar <= 'z') || (firstChar >= 'A' && firstChar <= 'Z'));
}

// Email validation: '@' hona chahiye, uske dono sides valid length hone chahiye, aur '.' hona chahiye
function checkValidGmail(email) {
    const indexOfAt = email.indexOf('@');
    return (
        indexOfAt > 1 &&
        email.slice(indexOfAt + 1).length > 1 &&
        email.includes('.')
    );
}

// Name field ka validation
function nameValidation(value) {
    value = value.trim();

    if (value.length === 0) return false;

    // Agar name chhota hai to error dikhaye
    if (value.length < 2) {
        alert("Name is too short");
        return false;
    }

    // Name letter se start hona chahiye
    if (!startWithCharOrnot(value)) {
        alert("Please enter a valid name");
        return false;
    }

    return true;
}

// Email field ka validation
function emailValidation(value) {

    if (value.length === 0) return false;

    if (!checkValidGmail(value)) {
        alert("Please enter a valid email");
        return false;
    }

    return true;
}

// Form submit hone par saare validations ek sath chalein
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Page reload na ho
    // Sabhi inputs check karte hain valid hain ya nahi
    const allValid = Array.from(inputs).every((ele) => {
        const value = ele.value;
        const name = ele.name;

        // Individual validations
        if (name === "name") {
            if (nameValidation(value, name)) {
                data[name] = value;
                return true;
            }
        } else if (name === "email") {
            if (emailValidation(value, name)) {
                data[name] = value;
                return true;
            }
        }

        return false; // Agar koi validation fail ho to
    });

    // Agar sab field valid hain to data console mein dikhao
    if (allValid) {
        console.log("Validated Data:", data);
    }
});






// header toogle btn
// const toggleButton = document.querySelector('.menu-toggle');
// const navMenu = document.querySelector('nav ul');

// toggleButton.addEventListener('click', () => {
//     navMenu.classList.toggle('show');
// });
