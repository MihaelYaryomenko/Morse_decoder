import Title from "./components/Title"
import InputBlock from "./components/InputBlock"
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
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <h2>Message: {decoderRus(message)}</h2>
    </div>
  );
};

export default App;