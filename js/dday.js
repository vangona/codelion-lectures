const ddayForm = document.querySelector(".d-day__form"),
    ddayNameInput = ddayForm.querySelector(".d-day-input__title"),
    ddayDateInput = ddayForm.querySelector(".d-day-input__date"),
    ddayList = document.querySelector(".d-day-list");

let dDays = [];

function deletedDays(event) {
    const btn = event.target;
    const section = btn.parentNode;
    ddayList.removeChild(section);
    const cleandDays = dDays.filter(function(dday){
        return dday.id !== parseInt(section.id);
    });
    dDays = cleandDays;
    console.log(cleandDays)
    savedDays();
}

function savedDays(){
    localStorage.setItem(DDAY_LS, JSON.stringify(dDays));
}

function paintdDays(name, daysleft, date){
    const section = document.createElement("section");
    const divContent = document.createElement("div");
    const titlebox = document.createElement("div");
    const h3 = document.createElement("h3");
    const div = document.createElement("div");
    const daysLeft = document.createElement("p");
    const dateBox = document.createElement("p");
    const delBtn = document.createElement("button");
    const divHr = document.createElement("div");
    const newId = dDays.length + 1

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deletedDays);

    section.id = newId;
    section.setAttribute("class", "special-day special-day-content");
    divContent.setAttribute("class", "div__content");
    titlebox.setAttribute("class", "title-box");
    h3.setAttribute("class", "title");
    h3.innerText = `${name}`;
    div.setAttribute("class", "date-box");
    daysLeft.setAttribute("class", "day-left")
    daysLeft.id = `${name}`;
    daysLeft.innerText = `${daysleft}일 남음`;
    dateBox.setAttribute("class", "date");
    dateBox.innerText = date;
    divHr.setAttribute("class", "div__hr");

    titlebox.appendChild(delBtn);
    titlebox.appendChild(h3);
    div.appendChild(daysLeft);
    div.appendChild(dateBox);
    
    divContent.appendChild(titlebox);
    divContent.appendChild(div);

    section.appendChild(divContent);
    section.appendChild(divHr);
    ddayList.appendChild(section);
    const dDaysObj = {
        name: name,
        daysleft: daysleft,
        date: date,
        id: newId,
    };
    dDays.push(dDaysObj)
    savedDays();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentNameValue = ddayNameInput.value;
    const currentDateValue = ddayDateInput.value;
    const loadedStart = localStorage.getItem("names");
    const parsedStart = JSON.parse(loadedStart)
    start = new Date(`${parsedStart[2]}`);
    ddayms = start.getTime() + (currentDateValue - 1) * (1000 * 60 * 60 * 24);
    ddayDate = new Date(ddayms);
    dday = `${
        ddayDate.getFullYear() < 10 ? `0${ddayDate.getFullYear()}` : ddayDate.getFullYear()}.${
        ddayDate.getMonth() < 10 ? `0${ddayDate.getMonth()}` : ddayDate.getMonth()}.${
            ddayDate.getDate() < 10 ? `0${ddayDate.getDate()}` : ddayDate.getDate()}`;

    let timeDiff = ddayDate.getTime() - now.getTime()
    let dayleft = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
    paintdDays(currentNameValue, dayleft, dday);
    ddayNameInput.value = "";
    ddayDateInput.value = "";
}

function loadDDays(){
  const loadedDDays = localStorage.getItem(DDAY_LS);
      if(loadedDDays !== null){
          const parsedDDays = JSON.parse(loadedDDays);
          parsedDDays.forEach(function(DDay){
              paintdDays(DDay.name, DDay.daysleft, DDay.date);
          });
  }
}

function init(){
    loadDDays();
    ddayForm.addEventListener("submit", handleSubmit);
}

init();