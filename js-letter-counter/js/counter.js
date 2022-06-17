const LETTERFORM = document.querySelector(".length-form");
const LETTERINPUT = document.querySelector(".letter-length");
const TEXTINPUTCONTAINER = document.querySelector(".text-input-container");
const TEXTINPUT = document.getElementById("jasoseol")

let letterLen = 0;

function counter() {
    let content = TEXTINPUT.value;
    let conLen = parseInt(content.length);
    let conLenSpace = parseInt(content.replace(/ /g,"").length);
    let letterLenSpace = letterLen + (conLen - conLenSpace);

    console.log(letterLenSpace);

    if (conLen > letterLenSpace) {
      content = content.substring(0, letterLenSpace);
      TEXTINPUT.value = content;
    }
    document.getElementById("count").innerHTML =
      `(${conLenSpace}/${letterLen})`;
}

function submitHandle(event) {
    event.preventDefault();
    letterLen = parseInt(LETTERINPUT.value);
    LETTERFORM.classList.remove("showing");
    TEXTINPUTCONTAINER.classList.add("showing");
    document.getElementById("count").innerHTML = `(0/${letterLen})`;
}

function init() {
    LETTERFORM.addEventListener("submit", submitHandle);
}

init();

