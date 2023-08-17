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

let language = 'english'

const changeToRussian = () => {
  const contentOfListElementRus = document.getElementById('ru').textContent
  const selectedLanguageMenu = document.getElementById('selected-language')
  selectedLanguageMenu.textContent = contentOfListElementRus
  selectedLanguageMenu.classList.replace('flag-us','flag-ru');
  language = 'russian'
  console.log(language)
}

const changeToEnglish = () => {
  const contentOfListElementEn = document.getElementById('en').textContent
  const selectedLanguageMenu = document.getElementById('selected-language')
  selectedLanguageMenu.textContent = contentOfListElementEn
  selectedLanguageMenu.classList.replace('flag-ru','flag-us');
  language = 'english'
  console.log(language)
}

const App = () => {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const enScript = morseSwitchState ? decoderEn(message) : decoderEnBack(message)
  const ruScript = morseSwitchState ? decoderRus(message) : decoderRusBack(message)

  return (
    <div>
      <div className="lang-menu">
          <div id="selected-language" className="selected-language flag-us">
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
            <h4 id="txt">{language === 'english' ? enScript : ruScript}</h4>
          </output>
        </div>
      </div>
    </div>
  );
};

export default App;