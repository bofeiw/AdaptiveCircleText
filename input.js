adjustSize('circle');

function input() {
    const text = document.getElementById('input').value;
    const circleText = document.getElementById('circle').children[0];
    circleText.innerHTML = text;
    adjustSize('circle');
    centerCircle();
}


function centerCircle() {
    const circle = document.getElementById('circle');
    const container = document.getElementById('container');

    const circleWidth = circle.offsetWidth;
    const containerWidth = container.offsetWidth;

    const centerX = containerWidth / 2;
    const leftX = centerX - circleWidth / 2;

    circle.style.left = leftX + 'px';
}

centerCircle();

window.onresize = () => centerCircle();

document.getElementById('input').oninput = input;