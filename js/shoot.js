function shoot() {
    for(let i = 2; i < 7; i++){
        let ball = document.getElementById(`ball${i}`);
        let delaySeconds = `${0.5 * (i - 1)}s`;
        ball.style.animationDelay = delaySeconds;
    }
}

function init() {
    shoot();
}

init();