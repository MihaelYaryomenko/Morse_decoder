import Title from "./components/Title"
import Input from "./components/InputBlock"
import Button from "./components/Button"
import {useState} from 'react';
import {decoderEn, decoderEnBack, decoderRus, decoderRusBack} from './scripts/decoder'

const App = () => {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };
  
  return (
    <div>
      <div className="lang-menu">
          <div className="selected-language">
            English 
          </div>
        </div>
      <div id="align-container">
        <div id="main-container">
          <Title text={'Morse decoder'}/>
          <textarea
          className="text-container"
          placeholder="Enter Your text"
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={message}
          />
          <Button id="btn" text={'Submit'}/>
          <output className="text-container" id="output">
            <h4>{decoderEn(message)}</h4>
          </output>
        </div>
      </div>
    </div>
  );
};

export default App;