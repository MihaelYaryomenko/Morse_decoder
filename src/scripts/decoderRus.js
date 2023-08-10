const letters =
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

const morseCode =
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
      const indexOfLetter = letters.findIndex((element) => element === buffer[i])
      if (indexOfLetter !== -1) {
         container.push(morseCode[indexOfLetter])
      }
   }
   return (container.join(' '))
}

console.log(decoderRus('Хорошего тебе дня знаешь надеюсь у тебя всё будет хорошо вот тебе немного позитива если ты захочешь это перевести'))

function decoderRusBack(strMorse) {

   const buffer = strMorse.split(' ')
   const container = [];
   for (i = 0; i < buffer.length; i++) {
      const indexOfLetter = morseCode.findIndex((element) => element === buffer[i])
      if (indexOfLetter !== -1) {
         container.push(letters[indexOfLetter])
      }
   }
   return (container.join(''))
}

console.log(decoderRusBack('.... --- .-. --- ---- . --. --- - . -... . -.. -. .-.- --.. -. .- . ---- -..- -. .- -.. . ..-- ... -..- ..- - . -... .-.- .-- ... -... ..- -.. . - .... --- .-. --- ---- --- .-- --- - - . -... . -. . -- -. --- --. --- .--. --- --.. .. - .. .-- .- . ... .-.. .. - -.-- --.. .- .... --- ---. . ---- -..- ...-... - --- .--. . .-. . .-- . ... - ..'))