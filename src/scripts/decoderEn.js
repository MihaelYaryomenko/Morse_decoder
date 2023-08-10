const letters = 
[
   'a', 'b', 'c', 'd', 'e',
   'f', 'g', 'h', 'i', 'j',
   'k', 'l', 'm', 'n', 'o',
   'p', 'q', 'r', 's', 't',
   'u', 'v', 'w', 'x', 'y',
   'z',
   '1', '2', '3', '4', '5',
   '6', '7', '8', '9', '0'
];

const morseCode = 
[
   '.-','-...','-.-.','-..','.',
   '..-.','--.','....','..','.---',
   '-.-','.-..','--','-.','---',
   '.--.','--.-','.-.','...','-',
   '..-','...-','.--','-..-','-.--',
   '--..',
   '.----', '..---', '...--', '....-', '.....',
   '-....', '--...', '---..', '----.', '-----'
];

function decoderEn(str) {

   const buffer = str.toLowerCase().split('')
   const container = [];
   for (i = 0; i < buffer.length; i++) {
      const indexOfLetter = letters.findIndex((element) => element === buffer[i])
      console.log(letters.findIndex((element) => element === buffer[i]))
      if (indexOfLetter !== -1) {
         container.push(morseCode[indexOfLetter])
      }
   }
   return (container.join(' '))
}

function decoderEnBack(strMorse) {

   const buffer = strMorse.split(' ')
   const container = [];
   for (i = 0; i < buffer.length; i++) {
      const indexOfLetter = morseCode.findIndex((element) => element === buffer[i])
      console.log(morseCode.findIndex((element) => element === buffer[i]))
      if (indexOfLetter !== -1) {
         container.push(letters[indexOfLetter])
      }
   }
   return (container.join(''))
}