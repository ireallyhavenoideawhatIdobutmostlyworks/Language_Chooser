import {languageDetailsMap} from './details.js';
import {isNullOrUndefinied} from './checker.js';

document.addEventListener("DOMContentLoaded", function() {

    const RGB_BLACK_COLOR = "rgb(0, 0, 0)";
    const RGB_YELLOW_COLOR = "rgb(255, 255, 0)";

    const WRAPPER_ELEMENTS = Array.from(document.getElementsByClassName("wrapper"));
    const PHP_IMAGE = document.getElementById("php");

    let redPill = document.querySelector(".red");
    if(!isNullOrUndefinied(redPill)) {
        document.querySelector(".red").addEventListener("click", () => {
            setDefaultProperties();
            changeProperties();
        });
    }

    let bluePill = document.querySelector(".red");
    if(!isNullOrUndefinied(bluePill)) {
        document.querySelector(".blue").addEventListener("click", () => {
            setDefaultProperties();
            setBlur(PHP_IMAGE);
            changeBackgroundColor(PHP_IMAGE, RGB_YELLOW_COLOR)
            setLanguageDetailsToElementByKey(PHP_IMAGE.id);
        });
    }


    async function changeProperties() {
        for (let i = 0; i <= WRAPPER_ELEMENTS.length; i++) {
            let index = getRandomIndexWithRange(0, WRAPPER_ELEMENTS.length);
            let element = WRAPPER_ELEMENTS[index];

            changeBackgroundColor(element, RGB_YELLOW_COLOR);
            await sleepMiliseconds(50);
            changeBackgroundColor(element, RGB_BLACK_COLOR);

            if(isLastElement(i)) {
                changePropertiesForLastElement(element);
            } 
        }
    }

    function changePropertiesForLastElement(element) {
        setBlur(element);
        changeBackgroundColor(element, RGB_YELLOW_COLOR);
        addClassWithAnimation(element);
        setLanguageDetailsToElementByKey(element.id);
    }

    function isLastElement(i) {
        return i === WRAPPER_ELEMENTS.length;
    }

    function addClassWithAnimation(element) {
        if(element.id !== PHP_IMAGE.id) {
            element.classList.add("select");
        }
    }

    function changeBackgroundColor(element, color) {
        element.style.backgroundColor = color;
    }

    function setBlur(elementWithoutBlur) {
        WRAPPER_ELEMENTS
            .filter(element => element != elementWithoutBlur)
            .forEach((element) => {element.style.filter = "blur(5px)";});
    }

    function setLanguageDetailsToElementByKey(languageDetailsMapKey) {
        const elementDetails = document.querySelector(".language_details");
        const langDetails = languageDetailsMap.get(languageDetailsMapKey);

        if(isNullOrUndefinied(elementDetails)) {
            elementDetails.textContent = "Not working because we have problem here. Check details in the console.";
            return;
        }

        elementDetails.textContent = langDetails;
    }

    function sleepMiliseconds(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function setDefaultProperties() {
        WRAPPER_ELEMENTS.forEach((element) => {
            element.style.removeProperty("filter");
            element.style.removeProperty("background-color");
            element.classList.remove("select");
        });
    }

    function getRandomIndexWithRange(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    console.log("What are you looking at? You can send your answer to urbaniak.michal@yahoo.com or high-five on www.linkedin.com/in/urLToMichalUrbaniakProfile");
});
