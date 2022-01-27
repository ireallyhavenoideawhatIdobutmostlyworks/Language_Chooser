import {languageDetailsMap} from './details.js';

document.addEventListener("DOMContentLoaded", function() {

    const RGB_BLACK_COLOR = "rgb(0, 0, 0)";
    const RGB_YELLOW_COLOR = "rgb(255, 255, 0)";
    const BLUR_EFFECT = "blur(5px)";

    const DELAY = 50;
    const PHP = "php";
    const EVENT = "click";

    const WRAPPER_ELEMENTS = Array.from(document.getElementsByClassName("wrapper"));
    const PHP_IMAGE = document.getElementById(PHP);

    const PERFORM_PHP_LANGUAGE_EVENT = document.querySelector(".blue");
    const PERFORM_RANDOM_LANGUAGE_EVENT = document.querySelector(".red");



    PERFORM_RANDOM_LANGUAGE_EVENT.addEventListener(EVENT, () => {
        setDefaultStyle();
        let randomElement = getRandomElementAndChangeColors();
        setLanguageDetailsToElementByKey(randomElement.id);
    });

    PERFORM_PHP_LANGUAGE_EVENT.addEventListener(EVENT, () => {
        setDefaultStyle();
        setBlurWithoutLastElement(PHP_IMAGE);
        changeBackgroundColor(PHP_IMAGE, RGB_YELLOW_COLOR)
        setLanguageDetailsToElementByKey(PHP);

    });


    async function getRandomElementAndChangeColors() {
        let randomElement;
        for (let i = 0; i <= WRAPPER_ELEMENTS.length; i++) {
            randomElement = getElementFromArrayByRandomIndex(getRandomIndexFromArray());

            changeBackgroundColor(randomElement, RGB_YELLOW_COLOR);

            await waitToNiceVisualEffect(DELAY);

            if(isLastElement(i)) {
                setBlurWithoutLastElement(randomElement);
            } else {
                changeBackgroundColor(randomElement, RGB_BLACK_COLOR);
            }
        }
        return randomElement;
    }

    function getElementFromArrayByRandomIndex(randomIndex) {
        return WRAPPER_ELEMENTS[randomIndex];
    }

    function changeBackgroundColor(element, color) {
        element.style.backgroundColor = color;
    }

    function setBlurWithoutLastElement(elementWithoutBlur) {
        WRAPPER_ELEMENTS
            .filter(element => element != elementWithoutBlur)
            .forEach((element) => {element.style.filter = BLUR_EFFECT;});
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

    function isLastElement(i) {
        return i === WRAPPER_ELEMENTS.length;
    }

    console.log("What are you looking at? You can send your answer to urbaniak.michal@yahoo.com or high-five on www.linkedin.com/in/urLToMichalUrbaniakProfile");
});
