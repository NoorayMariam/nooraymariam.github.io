// Selecting all elements with class "button"
const buttons = document.querySelectorAll(".button");

// Looping through each button to attach the click event listener
buttons.forEach(button => {
    button.onclick = () => {
        console.log("here");

            const d = new Date();
            d.setTime(d.getTime() + (60*1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = "username=couchpotato" + "=" + "100" + ";" + expires + ";path=/";
            console.log(document.cookie);
        
    };
});
