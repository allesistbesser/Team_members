const switchbutton = document.querySelector(".form-check-input");
switchbutton.checked = false;

const switchFunction = () => {
    if (switchbutton.checked) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }

}

