function generatePassword() {
    var length = document.getElementById("numberInput").value;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let randomID = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomID += characters.charAt(randomIndex);
    }

    document.getElementById("display").textContent = randomID;
}

function copyToClipboard() {
    const display = document.getElementById("display").textContent;
    if(display && display !== "Click \"Generate\" to get your password") {
        navigator.clipboard.writeText(display).then(() => {
            alert("Password copied to clipboard!");
        });
    } else {
        alert("Generate a password first!");
    }
}