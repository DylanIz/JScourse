
let userName = '';
let userQuestion = '';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

userName = prompt('Enter your name: ');
userQuestion = prompt('What is your question for the Magic 8 Ball? ');

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

console.log(`${userName ? userName : 'Someone'} asked: ${userQuestion}`);

console.log(`The random number is: ${randomNumber}`);

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Invalid random number generated';
    break;
}

console.log(`The Magic 8 Ball says: ${eightBall}`);


  
  
  
  
  
/*
  const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userName = '';
let userQuestion = '';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

rl.question('Enter your name: ', (name) => {
  userName = name;
  rl.question('What is your question for the Magic 8 Ball? ', (question) => {
    userQuestion = question;

    console.log(`${userName ? 'Hello, ' + userName + '!' : 'Hello!'}`);
    console.log(`${userName ? userName : 'Someone'} asked: ${userQuestion}`);
    console.log(`The random number is: ${randomNumber}`);

    switch(randomNumber) {
      case 0:
        eightBall = 'It is certain';
        break;
      case 1:
        eightBall = 'It is decidedly so';
        break;
      case 2:
        eightBall = 'Reply hazy try again';
        break;
      case 3:
        eightBall = 'Cannot predict now';
        break;
      case 4:
        eightBall = 'Do not count on it';
        break;
      case 5:
        eightBall = 'My sources say no';
        break;
        case 7:
            eightBall = 'Signs point to yes';
            break;
          default:
            eightBall = 'Invalid random number generated';
            break;
        }
        
        
      
      
    console.log(`The Magic 8 Ball says: ${eightBall}`)*/