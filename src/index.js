const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};



function decode(expr) {
    // write your solution here
    let answer = '';
    const stringArr = [];
    const exprArr = [];
    for (let i = 0; i < expr.length; i+=10) {
        exprArr.push(expr.slice(i, i + 10));
    }
    for (let i = 0; i < exprArr.length; i++) {
        let string = ''
        if(exprArr[i] ==='*'){
            string += '*';
        }
        for(let j = 0; j < exprArr[i].length; j+=2){
            if(exprArr[i][j] + exprArr[i][j+1]==='10'){
                string += '.';
            }
            if(exprArr[i][j] + exprArr[i][j+1]==='11'){
                string += '-';
            }
        }
        stringArr.push(string);
    }
    
    stringArr.forEach(item => {
        if(!MORSE_TABLE[item]){
            answer += ' ';
        }
        if(MORSE_TABLE[item]){
            answer += MORSE_TABLE[item];
        }
    });

    return answer;


}

module.exports = {
    decode
}