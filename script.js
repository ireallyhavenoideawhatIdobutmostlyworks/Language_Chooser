import {languageDetailsMap} from './details.js';

const WRAPPER_ELEMENTS = Array.from(document.getElementsByClassName("wrapper"));
const PHP_IMAGE = document.getElementById("php");

const PERFORM_PHP_LANGUAGE_EVENT = document.querySelector(".blue");
const PERFORM_RANDOM_LANGUAGE_EVENT = document.querySelector(".red");

const RGB_BLACK_COLOR = "rgb(0, 0, 0)";
const RGB_YELLOW_COLOR = "rgb(255, 255, 0)";
const BLUR_EFFECT = "blur(5px)";

const SLEEP_MILISECONDS = 50;
const PHP = "php";
const EVENT_LISTENER = "click";

var randomElement;


PERFORM_RANDOM_LANGUAGE_EVENT.addEventListener(EVENT_LISTENER, () => {
    setDefaultStyle();
    getRandomElementAndChangeColors();
    setLanguageDetailsToElementByKey(randomElement.id);
});


PERFORM_PHP_LANGUAGE_EVENT.addEventListener(EVENT_LISTENER, () => {
    setDefaultStyle();
    setBlurWithoutElement(PHP_IMAGE);
    changeBackgroundColor(PHP_IMAGE, RGB_YELLOW_COLOR)
    setLanguageDetailsToElementByKey(PHP);
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

async function getRandomElementAndChangeColors() {
    for (let i = 0; i <= WRAPPER_ELEMENTS.length; i++) {
        randomElement = getElementFromArrayByRandomIndex(getRandomIndexFromArray());

        changeBackgroundColor(randomElement, RGB_YELLOW_COLOR);

        await waitToNiceVisualEffect(SLEEP_MILISECONDS);

        if(i != WRAPPER_ELEMENTS.length) {
            changeBackgroundColor(randomElement, RGB_BLACK_COLOR);
        }

        if (i == WRAPPER_ELEMENTS.length) {
            setBlurWithoutElement(randomElement);
        }
    }
}

function getElementFromArrayByRandomIndex(randomIndex) {
    return WRAPPER_ELEMENTS[randomIndex];
}

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}

function setBlurWithoutElement(elementWithoutBlur) {
    WRAPPER_ELEMENTS
        .filter(element => element != elementWithoutBlur)
        .forEach((element) => {
            element.style.filter = BLUR_EFFECT;
        });
}

function setLanguageDetailsToElementByKey(languageDetailsMapKey) {
    document.querySelector(".language_details").textContent = languageDetailsMap.get(languageDetailsMapKey);
}

function getRandomIndexFromArray() {
    return getRandomIndex(0, WRAPPER_ELEMENTS.length);
}

function waitToNiceVisualEffect(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setDefaultStyle() {
    WRAPPER_ELEMENTS.forEach((element) => {
        element.style.removeProperty("filter");
        element.style.removeProperty("background-color");
    });
}

function getRandomIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
