'use strict';

let counter = 0;

function check(ans) {
  if (ans === 'yes' | ans ==='y') {
    // console.log ("Correct !!")
    alert ('Correct !!');
    counter = counter + 1;

  } else if (ans ==='no' | ans === 'n') {
    // console.log ("Wrong!!")
    alert ('Wrong!!');


  } else {
    // console.log ("Do not put random inputs")
    alert ('Do not put random inputs');

  }

}
function q6() {
  for (let i = 0; i < 4; i++) {
    let q6 = parseInt( prompt ('Guess the correct number, u have only 4 chanses'));
    let ans = 6;
    // console.log(ans);
    if (q6 < ans) {
      alert ('too low');
    }
    else if (q6 > ans) {
      alert ('too high');
    }
    else if (q6 === ans) {
      alert ('correct !!');
      counter = counter + 1;
      break; }
    else {
      alert ('You put random alphapets');
    }
  }
}

function q7(){
  let cans ;
  for (let i = 0; i < 6; i++) {
    let q7 = prompt ('Guess my fav movie, you have only 6 choices');
    let myFav = ['The Shawshank Redemption','The Godfather","The Godfather: Part II','The Dark Knight','12 Angry Men","Schindler s List','The Lord of the Rings: The Return of the King','Pulp Fiction','The Good, the Bad and the Ugly','The Lord of the Rings: The Fellowship of the Ring' ];
    for (let i = 0; i < 10; i++) {
      if (q7 === myFav[i]) {
        cans = myFav[i];
        break;
      }
    }
    if (q7 === cans) {
      alert ('Correct');
      counter = counter + 1 ;
      break;
    } else {
      alert ('Wrong');
    }
    //    console.log (q7)  ;
  }
}

// x = 13 ;
alert ('Read my Biography first, then answer y/n or yes/no, please, Thank you');
alert ('Hello there, here is Abdullah AlSawalmeh, I am 26 years old, I have MS.c Degree in Mechatronics engineering and BS.c degree in Mechaninal engineering, I love programming, I have a great knowlegde in Python programming language, my graduation thesis was about how to predict IDC cancer in women using Histopathology images, by applying machine and deep learning approaches, Also I worked in Hungary for 3 months as a customer support agent for Ryanair airlines, My goal of taking this course is to develop my skills in programming, getting a suitable job and having a new nice friends, Thank you');
let q1 = prompt ('1st question: Do I have a great knowledge in Machine and deep learning? (Python) ? ').toLowerCase();
check (q1);
let q2 = prompt ('2nd question: Is my name Abdullah AlSawalmeh?').toLowerCase();
check (q2);
let q3 = prompt ('3rd question: Is the company name that I worked in, called Ryanair airlines?').toLowerCase();
check (q3);
let q4 = prompt ('4th question: Do I have two scientific degrees?').toLowerCase();
check (q4);
let q5 = prompt ('5th question: What my MS.c thesis was about? is it was about predicting IDC cancer in women using Histopathology images, by applying machine and deep learning approaches ? ').toLowerCase();
check (q5);


q6();

q7();




alert ('Your score is: ' + counter);


// // 2nd Story
// let qNmae = prompt ("And you, What is your name? ");
// alert ("Hello, " + qNmae + " It is nice to meet you !!")
// alert (qNmae + ", I hope, you live a long happy life <3, Thank you")





