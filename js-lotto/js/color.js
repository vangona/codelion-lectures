let colorCode = "f0f0f0";

function getRandomColor() {
    let colorCode = Math.floor(Math.random() * 16777215).toString(16);
    while (colorCode.length < 6){
        colorCode += "1";
    }
	return "#" + colorCode;
}

function paintColor(colorName, number) {
        let ball = document.getElementById(`ball${number + 1}`);
        console.log(colorName);
        ball.style.backgroundColor = colorName;
}

function init() {
    for(let i = 0; i < 6; i++) {
        let color = getRandomColor();
        paintColor(color, i);
    }
}

init();