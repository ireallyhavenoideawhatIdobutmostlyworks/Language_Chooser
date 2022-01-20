import {languageDetailsMap} from './details.js';

const WRAPPER_ELEMENTS = document.getElementsByClassName("wrapper");

const RGB_BLACK_COLOR = "rgb(0, 0, 0)";
const RGB_YELLOW_COLOR = "rgb(255, 255, 0)";
const SLEEP_MILISECONDS = 50;
const PHP = "php";
const EVENT_LISTENER = "click";


document.querySelector(".red").addEventListener(EVENT_LISTENER, () => {
    setDefaultStyle();
    drawing();
});

document.querySelector(".blue").addEventListener(EVENT_LISTENER, () => {
    setDefaultStyle();
    selectPhp()
});


async function drawing() {
    for (let i = 0; i <= WRAPPER_ELEMENTS.length; i++) {
        var randomIndex = getRadomIndexFromArray();
        var randomElement = getElementFromArrayByRandomIndex(randomIndex);
        changeBackgroundColor(randomElement, RGB_YELLOW_COLOR);
        await waitToNiceVisualEffect(SLEEP_MILISECONDS);


        if(i != WRAPPER_ELEMENTS.length) {
            changeBackgroundColor(randomElement, RGB_BLACK_COLOR);
        }
    }

    setBlurStyleWithoutLastSelectedElement(randomIndex);
    setLanguageDetailsToElement(randomElement.id);
}

function selectPhp() {
    Array.from(WRAPPER_ELEMENTS).forEach((element) => {
        element.style.filter = 'blur(5px)';
    });

    changeBackgroundColor(document.getElementById(PHP), RGB_YELLOW_COLOR)
    setLanguageDetailsToElement(PHP);
}

function setBlurStyleWithoutLastSelectedElement(randomIndex) {
    for (let i = 0; i < WRAPPER_ELEMENTS.length; i++) {
        if(i == randomIndex){
            continue;
        }

        addBlurToElementClass(i);
    }
}

function setDefaultStyle() {
    Array.from(WRAPPER_ELEMENTS).forEach((el) => {
        el.style.removeProperty("filter");
        el.style.removeProperty("background-color");
    });
}

function getElementFromArrayByRandomIndex(randomIndex) {
    return WRAPPER_ELEMENTS[randomIndex];
}

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}

function waitToNiceVisualEffect(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setLanguageDetailsToElement(languageDetailsMapKey) {
    document.querySelector(".language_details").textContent = languageDetailsMap.get(languageDetailsMapKey);
}

function addBlurToElementClass(iterator) {
    WRAPPER_ELEMENTS[iterator].style.filter = 'blur(5px)';
}

function getRadomIndexFromArray() {
    return getRandomIndex(0, WRAPPER_ELEMENTS.length);
}

function getRandomIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
