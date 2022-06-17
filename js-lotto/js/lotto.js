const LASTBALL = document.getElementById("ball6");
const CONGRATULATION = document.querySelector(".congratulation");

let lotto = [];

function congratulation(lottoNumber) {
  LASTBALL.addEventListener("animationend", function(){
      CONGRATULATION.classList.add("showing");
      CONGRATULATION.innerText = `당첨번호는 
      ${lottoNumber[0]}, ${lottoNumber[1]}, ${lottoNumber[2]}, ${lottoNumber[3]}, ${lottoNumber[4]}, ${lottoNumber[5]} \n 🎉축하드립니다🎉`;
  });
}

function selectNum() {
    while (lotto.length < 6) {
        let num = parseInt(Math.random() * 45 + 1);
        if (lotto.indexOf(num) == -1) {
          lotto.push(num);
        };
      }
    lotto.sort((a, b) => a - b);

    for(let i = 0; i < 6; i++) {
        document.getElementById(`ball${i + 1}`).innerText = lotto[i];
      }
    }


function init() {
    selectNum();
    congratulation(lotto);
}

init();