const informationForm = document.querySelector(".information__form"),
    specialDayContainer = document.querySelector(".special-day-main__container"),
    nameInput1 = informationForm.querySelector(".name-1__input"),
    nameInput2 = informationForm.querySelector(".name-2__input"),
    DATEINPUT = document.querySelector(".date__input"),
    LOVEDAY = document.querySelector(".love_date"),
    LOVENAME = document.querySelector(".title__name"),
    LOVEBODY = document.querySelector(".love-body"),
    delBtn = document.querySelector(".button__clear")

let now = new Date();

const NAME_LS = "names";
const DDAY_LS = "ddays";
const SPECIALDAY_LS = "specialdays";

function saveNames(name1, name2, date){
    nameList = [name1, name2, date]
    localStorage.setItem(NAME_LS, JSON.stringify(nameList));
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue1 = nameInput1.value;
    const currentValue2 = nameInput2.value;
    const currentValue3 = DATEINPUT.value;
    informationForm.classList.add("hiding");
    LOVEBODY.classList.add("showing");
    specialDayContainer.classList.remove("hiding");
    paintNames(currentValue1, currentValue2, currentValue3);
    const randomNumber = Math.floor(Math.random() * WORDS_NUMBERS);
    words.innerText = NOVEL_WORDS[randomNumber];
}

function paintNames(name1, name2, date) {
    LOVENAME.innerText = `${name1} ♥ ${name2}`
    LOVEDAY.innerText = `${date}`

    let start = new Date(`${date}`);
    let timeDiff = now.getTime() - start.getTime();
    let day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
    $("#love").text(day + "일째");

    saveNames(name1, name2, date);
}

function askForName(){
    informationForm.classList.remove("showing");
    LOVEBODY.classList.remove("hiding");
    specialDayContainer.classList.add("hiding");
    informationForm.addEventListener("submit", handleSubmit);
}

function loadNames(){
    const loadedNames = localStorage.getItem(NAME_LS);
    if(loadedNames === null){
        askForName();
    } else {
        const parsedNames = JSON.parse(loadedNames)
        informationForm.classList.add("hiding");
        LOVEBODY.classList.add("showing");
        specialDayContainer.classList.remove("hiding");
        paintNames(parsedNames[0], parsedNames[1], parsedNames[2]);
    }
}

function handleClick(event) {
    event.preventDefault();
    localStorage.removeItem(NAME_LS);
    localStorage.removeItem(SPECIALDAY_LS);
    localStorage.removeItem(DDAY_LS);
    informationForm.classList.remove("hiding");
    LOVEBODY.classList.remove("showing");
    specialDayContainer.classList.add("hiding");
}

function init(){
    delBtn.addEventListener('click', handleClick);
    loadNames();
}

init();