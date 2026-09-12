const slider = document.getElementById("menu-slider");
const nextButton = document.getElementById("next-btn");

let currentPosition = 0;

const menuItems = document.querySelectorAll(".menu-item");

const gap = 20;

function moveNext() {

    const itemWidth = menuItems[0].offsetWidth + gap;

    const maxPosition =
        menuItems.length - 3;

    if (currentPosition < maxPosition) {

        currentPosition++;

        slider.style.transform =
            `translateX(-${currentPosition * itemWidth}px)`;
    }
    else {

        currentPosition = 0;

        slider.style.transform = "translateX(0)";
    }
}

nextButton.addEventListener("click", moveNext);