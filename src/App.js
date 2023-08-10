import Title from "./components/Title"
import InputBlock from "./components/InputBlock"
import Button from "./components/Button"
import {useState} from 'react'

function App() {
  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };

  return (
    <div id="align-container">
      <div id="main-container">
        <Title text={'Morse Decoder'}/>
        <InputBlock placeholder={'Enter text'} />
        <Button text={'Submit'}/>
        <InputBlock placeholder={'Morse code'} />
      </div>
    </div>
  )
}

export default App