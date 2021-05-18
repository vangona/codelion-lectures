const specialdayForm = document.querySelector(".special-day__form"),
    specialdayNameInput = specialdayForm.querySelector(".special-day-input__title"),
    specialdayDateInput = specialdayForm.querySelector(".special-day-input__date"),
    specialdayList = document.querySelector(".special-day-list");

let specialDays = [];

function deleteSpecialDays(event) {
    const btn = event.target;
    const section = btn.parentNode;
    specialdayList.removeChild(section);
    const cleanspecialDays = specialDays.filter(function(specialday){
        return specialday.id !== parseInt(section.id);
    });
    specialDays = cleanspecialDays;
    saveSpecialDays();
}

function saveSpecialDays(){
    localStorage.setItem(SPECIALDAY_LS, JSON.stringify(specialDays));
}

function paintSpecialDays(name, daysleft, date){
    const section = document.createElement("section");
    const divContent = document.createElement("div");
    const titlebox = document.createElement("div");
    const h3 = document.createElement("h3");
    const div = document.createElement("div");
    const daysLeft = document.createElement("p");
    const dateBox = document.createElement("p");
    const delBtn = document.createElement("button");
    const divHr = document.createElement("div");
    const newId = specialDays.length + 1

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteSpecialDays);

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
    specialdayList.appendChild(section);
    const specialDaysObj = {
        name: name,
        daysleft: daysleft,
        date: date,
        id: newId,
    };
    specialDays.push(specialDaysObj)
    saveSpecialDays();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentNameValue = specialdayNameInput.value;
    const currentDateValue = specialdayDateInput.value;
    const loadedStart = localStorage.getItem("names");
    const parsedStart = JSON.parse(loadedStart)
    start = new Date(`${parsedStart[2]}`);
    specialday = new Date(`${currentDateValue}`);

    let timeDiff = specialday.getTime() - now.getTime()
    let dayleft = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
    paintSpecialDays(currentNameValue, dayleft, currentDateValue);
    specialdayNameInput.value = "";
    specialdayDateInput.value = "";
}

function loadSpecialDays(){
  const loadedSpecialDays = localStorage.getItem(SPECIALDAY_LS);
      if(loadedSpecialDays !== null){
          const parsedSpecialDays = JSON.parse(loadedSpecialDays);
          parsedSpecialDays.forEach(function(specialDay){
              paintSpecialDays(specialDay.name, specialDay.daysleft, specialDay.date);
          });
  }
}

function init(){
    loadSpecialDays();
    specialdayForm.addEventListener("submit", handleSubmit);
}

init();