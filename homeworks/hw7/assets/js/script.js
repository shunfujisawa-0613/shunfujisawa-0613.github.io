function averageThreeNumbers (a,b,c){
    let sum = a+b+c;
    let average = sum/3;
    return average;
}


function createSentence (num, nouns){
    let sentence = "On average, a Berkeley student has" + num + nouns
    return sentence
}

function getRandomNum (max) {
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - 0) + 0);
}

let x = getRandomNum(20)
let y = getRandomNum(10)
let z = getRandomNum(13)

let average = averageThreeNumbers(x,y,z)

let sentence = createSentence(average, "penguins")

console.log (sentence);