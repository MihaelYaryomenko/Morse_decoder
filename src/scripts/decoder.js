const lettersEn = 
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

const morseCodeEn = 
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
      const indexOfLetter = lettersEn.findIndex((element) => element === buffer[i])
      console.log(letters.findIndex((element) => element === buffer[i]))
      if (indexOfLetter !== -1) {
         container.push(morseCodeEn[indexOfLetter])
      }
   }
   return (container.join(' '))
}

function decoderEnBack(strMorse) {

   const buffer = strMorse.split(' ')
   const container = [];
   for (i = 0; i < buffer.length; i++) {
      const indexOfLetter = morseCode.findIndex((element) => element === buffer[i])
      console.log(morseCodeEn.findIndex((element) => element === buffer[i]))
      if (indexOfLetter !== -1) {
         container.push(lettersEn[indexOfLetter])
      }
   }
   return (container.join(''))
}

const lettersRus =
[
   'а', 'б', 'в', 'г', 'д',
   'е', 'ж', 'з', 'и', 'й',
   'к', 'л', 'м', 'н', 'о', 
   'п', 'р', 'с', 'т', 'у',
   'ф', 'х', 'ц', 'ч', 'ш',
   'щ', 'ъ', 'ы', 'ь', 'э', 
   'ю', 'я',
   '1', '2', '3', '4', '5',
   '6', '7', '8', '9', '0'
]

const morseCodeRus =
[
   '.-', '-...', '.--', '--.', '-..',
   '.', '...-', '--..', '..', '.---',
   '-.-', '.-..', '--', '-.', '---',
   '.--.', '.-.', '...', '-', '..-',
   '..-.', '....', '-.-.', '---.', '----',
   '--.-', '.--.-.', '-.--', '-..-', '...-...',
   '..--', '.-.-',
   '.----', '..---', '...--', '....-', '.....',
   '-....', '--...', '---..', '----.', '-----'
]

function decoderRus(str) {

   const buffer = str.toLowerCase().split('')
   const container = [];
   for (i = 0; i < buffer.length; i++) {
      const indexOfLetter = lettersRus.findIndex((element) => element === buffer[i])
      if (indexOfLetter !== -1) {
         container.push(morseCodeRus[indexOfLetter])
      }
   }
   return (container.join(' '))
}

function decoderRusBack(strMorse) {

   const buffer = strMorse.split(' ')
   const container = [];
   for (i = 0; i < buffer.length; i++) {
      const indexOfLetter = morseCodeRus.findIndex((element) => element === buffer[i])
      if (indexOfLetter !== -1) {
         container.push(lettersRus[indexOfLetter])
      }
   }
   return (container.join(''))
}