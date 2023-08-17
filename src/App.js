import Title from "./components/Title"
import Button from "./components/Button"
import {useState} from 'react';
import {decoderEn, decoderEnBack, decoderRus, decoderRusBack} from './scripts/decoder'

let morseSwitchState = true;

const morseSwitch = () => {
  morseSwitchState = !morseSwitchState
  const txtElement = document.getElementById('txt');
  const messageElement = document.getElementById('message')
  const messageElementContent = messageElement.value
  messageElement.value = txtElement.textContent
  txtElement.textContent = messageElementContent
  if (messageElement.placeholder === "Enter Your text") {
    messageElement.placeholder = "Enter Morse code"
  } else {
    messageElement.placeholder = "Enter Your text"
  }
}

const changeToRussian = () => {
  const contentOfListElementRus = document.getElementById('ru').textContent
  const selectedLanguageMenu = document.getElementById('selected-language')
  selectedLanguageMenu.textContent = contentOfListElementRus
  selectedLanguageMenu.style.backgroundImage = "url(https://flagsapi.com/RU/shiny/32.png)"
}

const changeToEnglish = () => {
  const contentOfListElementEn = document.getElementById('en').textContent
  const selectedLanguageMenu = document.getElementById('selected-language')
  selectedLanguageMenu.textContent = contentOfListElementEn
}

const App = () => {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };
  
  return (
    <div>
      <div className="lang-menu">
          <div id="selected-language" className="selected-language">
            English 
          </div>
          <ul>
            <li>
              <a onClick={changeToEnglish} id="en">English</a>
            </li>
            <li>
              <a onClick={changeToRussian} id="ru">Russian</a>
            </li>
          </ul>
      </div>
      <div id="align-container">
        <div id="main-container">
          <Title text={'Morse decoder'}/>
          <textarea
          className="text-container"
          placeholder="Enter Your text"
          type="text"
          id="message"
          onChange={handleChange}
          value={message}
          />
          <Button id="btn" text={'Switch'} onClick={morseSwitch}/>
          <output className="text-container" id="output">
            <h4 id="txt">{morseSwitchState ? decoderEn(message) : decoderEnBack(message)}</h4>
          </output>
        </div>
      </div>
    </div>
  );
};

export default App;