/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS INSIDE OF A FUNCTION (tasks 1d through task 7), IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

// task 1a, 1b, and 1c are not autograded

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/

const votingAge = 18;
let currentAge = 29;
if(currentAge>= votingAge){
  console.log(true);
}
else{
  console.log(false)
} 

/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/
let var1b1=2;
let var1b2=5;

if(var1b1 <= var1b2){
  var1b1= 7;
  console.log(var1b1)
}
else{
  console.log('number error');
}




/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/

 var string1C = "1999";
 console.log(`this is a string ${string1C}`)
 console.log(`this is a number ${Number(string1C)}`);




/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(num1d1,num1d12){
  /*add your code here*/
  let newNum = num1d1*num1d12;
  return newNum;
}
let num1d1A = 7;
let num1d1B = 5;
console.log(multiply(num1d1A,num1d1B));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
 1. Invoke the dogYears function below and pass an age value to it
 2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
 3. Return the newly calculated age
*/

function dogYears(humanAge){
  /*add your code here*/
  ageInDog = humanAge*7;
  return ageInDog
}
let humanAgeReal = 29;
console.log(dogYears(humanAgeReal));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
1. Invoke the hungryDog function below and pass it a weight value in pounds
2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day

REMEMBER: This program should handle correctly adult AND puppy ages and weights

Feeding Requirements:

Adult Dogs 1 year and older 
   up to 5 lbs - 5% of their body weight
   6 - 10 lbs - 4% of their body weight 
   11 - 15 lbs - 3% of their body weight 
   > 15lbs - 2% of their body weight 

Puppies less than 1 year
   2 - 4 months 10% of their body weight
   4 - 7 months 5% of their body weight 
   7 - 12 months 4% of their body weight
  
NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(hungryDogWeight, hungryDogAge){
  /*add your code here*/
  let feedAmount = 0;
  if(hungryDogWeight>14 && hungryDogAge>=1){
    feedAmount = hungryDogWeight * .02;
    return(`dog needs this much food total: ${feedAmount}`);
  }
  else if(hungryDogWeight<15 && hungryDogWeight>=11 && hungryDogAge>=1){
    feedAmount = hungryDogWeight * .03;
    return(`dog needs this much food total: ${feedAmount}`);
  }
  else if(hungryDogWeight>=6 && hungryDogWeight<11 && hungryDogAge>=1){
  feedAmount = hungryDogWeight * .04;
  return(`dog needs this much food total: ${feedAmount}`);
}
else if(hungryDogWeight>=1 && hungryDogWeight<6 && hungryDogAge>=1){
  feedAmount = hungryDogWeight * .05;
  return(`dog needs this much food total: ${feedAmount}`);
}
else if(hungryDogAge<1 && hungryDogAge> .5){
feedAmount = hungryDogWeight * .04;
  return(`dog needs this much food total: ${feedAmount}`);

}
else if(hungryDogAge<.5 && hungryDogAge>0){
feedAmount = hungryDogWeight * .05;
  return(`dog needs this much food total: ${feedAmount}`);

}
else if(hungryDogAge<.3){
feedAmount = hungryDogWeight * .10;
  return(`dog needs this much food total: ${feedAmount}`);
}

}


console.log(hungryDog(15,.3));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
1. Receive 2 parameters the user's choice and the computer's choice
2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
 - win should return "you win!"
 - lose should return "you lose!"
 - tie should return "it's a tie"

RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie

HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/
let compChoiceRPS = Math.ceil(Math.random()*3);
/* testing global variable  console.log(compChoiceRPS);*/
function game(user, computer){
  if(user= 'rock' && computer === 3){
    console.log('you win!');
  }
  else if(user= 'rock' && computer === 2){
    console.log('you lose!');
  }
  else if(user= 'rock' && computer === 1){
    console.log('its a tie')
  }
  else if(user= 'paper' && computer === 1)
  {
    console.log('ypu win!');
  }
  else if(user= 'paper' && computer === 3){
    console.log('you lose!');
  }
  else if(user= 'paper' && computer === 2){
    console.log('its a tie')
  }
  else if(user = 'sciscors' && computer == 1){
    console.log('you lose');
  }
  else if(user= 'sciscors' && computer === 2){
    console.log('you win!');
  }
  else if(user = 'sciscors' && computer === 3){
    console.log('its a tie');
  }
  else{
    console.log('start a game')
  }

  /*add your code here*/
}

console.log(compChoiceRPS);
let mychoiceRPS = "none";
game(mychoiceRPS= 'rock',compChoiceRPS);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
1. Receive a number of kilometers
2. Convert the number of kiolmeters received to miles
3. Return the number of miles
*/

function miles(KMReceived){
  /*add your code here*/
  const milesConv= KMReceived *.621371;
  return milesConv;
}
console.log(miles(52));



//Task 5b - Feet to CM
/*
Using the feet function below do the following:
1. Receive a number of cm
2. Convert the number of cm to feet
3. Return number of feet
*/

function feet(CMReceived){
  /*add your code here*/
  const FeetConv = CMReceived * .0328084;
  return FeetConv;
}
console.log(feet(88));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
1. Receive a starting number and start the count down from the number received 
2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
    "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(AnnoyingBottles){
      /*add your code here*/
      TotalAnnoyingBottles =Number(AnnoyingBottles)
      while(TotalAnnoyingBottles>0 && TotalAnnoyingBottles<100){
        console.log(`${TotalAnnoyingBottles} bottles of soda on the wall, ${TotalAnnoyingBottles} bottles of soda, take one down pass it around ${TotalAnnoyingBottles-1} bottles of soda on the wall`);
        TotalAnnoyingBottles= TotalAnnoyingBottles-1;
      }
}
console.log(annoyingSong("30"))


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
1. Receive a score out of 100 
2. Return the corresponding letter grade following this grade scale:

 90-100 should return 'you got an A' 
 80-89 should return 'you got a B'
 70-79 should return 'you got a C'
 60-69 should return 'you got a D'
 below should return 'you got an F'
*/

function grade(gradeSent){
/*Your Code here */
if(gradeSent>89 && gradeSent<= 100){
  return('you get an A')
}
else if(gradeSent>79 && gradeSent<90){
  return('you get a B');
}
else if(gradeSent>69 && gradeSent<80){
  return('you get a C');
}
else if(gradeSent>59 && gradeSent<70){
  return('you get a D');
}
else if(gradeSent<60){
  return('you get a F');
}
}
console.log(grade(95));



/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
1. Receive a string as a parameter
2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

HINT - you may need to study tomorrow's content on arrays 
HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
  /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
module.exports = {
  foo,
  multiply,
  dogYears,
  hungryDog,
  game,
  miles,
  feet,
  annoyingSong,
  grade
}
