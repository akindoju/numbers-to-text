import { useEffect, useState } from "react";
import { langObj } from "./arrays";
import { Howl, Howler } from "howler";
import "./App.scss";

import one from "./Sounds/one.wav";
import two from "./Sounds/two.wav";
import three from "./Sounds/three.wav";
import four from "./Sounds/four.wav";
import five from "./Sounds/five.wav";
import six from "./Sounds/six.wav";
import seven from "./Sounds/seven.wav";
import eight from "./Sounds/eight.wav";
import nine from "./Sounds/nine.wav";
import ten from "./Sounds/ten.wav";
import eleven from "./Sounds/eleven.wav";
import twelve from "./Sounds/twelve.wav";
import thirteen from "./Sounds/thirteen.wav";
import fourteen from "./Sounds/fourteen.wav";
import fifteen from "./Sounds/fifteen.wav";
import sixteen from "./Sounds/sixteen.wav";
import seventeen from "./Sounds/seventeen.wav";
import eighteen from "./Sounds/eighteen.wav";
import nineteen from "./Sounds/nineteen.wav";
import twenty from "./Sounds/twenty.wav";

function App() {
  const [inputError, setInputError] = useState(false);
  const [limitError, setLimitError] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [englishNumber, setEnglishNumber] = useState("");
  const [hausaNumber, setHausaNumber] = useState("");
  const [yorubaNumber, setYorubaNumber] = useState("");

  useEffect(() => {
    if (
      inputValue.length < 1 ||
      isNaN(inputValue) ||
      inputValue > 100 ||
      inputValue < 0
    ) {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [inputValue]);

  const checkingInputError = (target) => {
    if (isNaN(target)) {
      setInputError(true);
      // setIsBtnDisabled(true);
    } else {
      setInputError(false);
      // setIsBtnDisabled(false);
    }
  };

  const setNumbers = (input) => {
    setEnglishNumber(langObj[input].english);
    setHausaNumber(langObj[input].hausa);
    setYorubaNumber(langObj[input].yoruba);
  };

  const numberLimit = (input) => {
    if (input > 100 || input < 0) {
      setLimitError(true);
      setIsBtnDisabled(true);
    } else {
      setLimitError(false);
      setIsBtnDisabled(false);
    }
  };

  const playSound = (source) => {
    const sound = new Howl({ src: [source] });
    sound.play();

    Howler.volume(1);
  };

  const selectSound = () => {
    if (inputValue === "1") {
      playSound(one);
    } else if (inputValue === "2") {
      playSound(two);
    } else if (inputValue === "3") {
      playSound(three);
    } else if (inputValue === "4") {
      playSound(four);
    } else if (inputValue === "5") {
      playSound(five);
    } else if (inputValue === "6") {
      playSound(six);
    } else if (inputValue === "7") {
      playSound(seven);
    } else if (inputValue === "8") {
      playSound(eight);
    } else if (inputValue === "9") {
      playSound(nine);
    } else if (inputValue === "10") {
      playSound(ten);
    } else if (inputValue === "11") {
      playSound(eleven);
    } else if (inputValue === "12") {
      playSound(twelve);
    } else if (inputValue === "13") {
      playSound(thirteen);
    } else if (inputValue === "14") {
      playSound(fourteen);
    } else if (inputValue === "15") {
      playSound(fifteen);
    } else if (inputValue === "16") {
      playSound(sixteen);
    } else if (inputValue === "17") {
      playSound(seventeen);
    } else if (inputValue === "18") {
      playSound(eighteen);
    } else if (inputValue === "19") {
      playSound(nineteen);
    } else if (inputValue === "20") {
      playSound(twenty);
    }
  };

  //select text after button click
  const selectText = () => {
    const input = document.getElementById("text-box");
    input.focus();
    input.select();
  };

  const inputValueLength = inputValue.length;
  const firstInputValue = inputValue[0];

  return (
    <div className="app">
      <div className="header">
        <form className="header__components">
          <input
            id="text-box"
            type="text"
            value={inputValue}
            onChange={({ target }) => {
              setInputValue(Number(target.value.trim()));
              console.log(inputValue);
              // checkInputLength(target.value);
              numberLimit(target.value);
              checkingInputError(target.value);
              // setInputError(false);
              // trimFirstZero();
            }}
            autoFocus
            placeholder="Enter a number between 1 - 100"
          />

          <button
            className={
              isBtnDisabled
                ? "header__components__btn active"
                : "header__components__btn"
            }
            onClick={(event) => {
              event.preventDefault();
              setNumbers(inputValue);
            }}
            disabled={isBtnDisabled}
          >
            Go
          </button>
        </form>

        {inputError && <p>Input is not a number</p>}
        {limitError && <p>Input is Invalid</p>}
      </div>

      <div className="result">
        <div className="result__details">
          <h1>
            English: <span>{englishNumber}</span>
          </h1>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            onClick={() => {
              selectSound();
            }}
          >
            <title>volume-medium</title>
            <path d="M22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z"></path>
            <path d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path>
          </svg>
        </div>

        <div className="result__details">
          <h1>
            Hausa: <span>{hausaNumber}</span>
          </h1>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>volume-medium</title>
            <path d="M22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z"></path>
            <path d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path>
          </svg>
        </div>

        <div className="result__details">
          <h1>
            Yoruba: <span>{yorubaNumber}</span>
          </h1>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>volume-medium</title>
            <path d="M22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z"></path>
            <path d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
