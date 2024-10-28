// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass/height ** 2 = mass / (height * height). (mass in kg and height in meters).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weighs 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

//Solution
var markM = 95,
    markH = 1.88,
    johnM = 85,
    johnH = 1.76;

let markBMI = markM / (markH ** 2);
let johnBMI = johnM / (johnH * johnH);
let markHigherBMI = markBMI > johnBMI;

// alert(`Does Mark have a higher BMI than John? Absolutely ${markHigherBMI}!`);
console.log(`Does Mark have a higher BMI than John? Absolutely ${markHigherBMI}!`);


// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉
GOOD LUCK 😀
*/

//Solution
if (markBMI > johnBMI) {
    // alert(`Mark has a higher BMI (${markBMI}) than John (${johnBMI})`);
    console.log(`Mark has a higher BMI (${markBMI}) than John (${johnBMI})`);
} else {
    // alert(`John has a higher BMI (${johnBMI}) than Mark (${markBMI})`);
    console.log(`John has a higher BMI (${johnBMI}) than Mark (${markBMI})`);
}


// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team and, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal to 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

//Solution
function scoreAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

var dolphinAverageScore = scoreAverage(97, 112, 101),
    koalaAverageScore = scoreAverage(109, 95, 123);

if (dolphinAverageScore > koalaAverageScore && dolphinAverageScore >= 100) {
    console.log(`Dolphins wins with an Average Score of ${dolphinAverageScore}!`);
} else if (koalaAverageScore > dolphinAverageScore && koalaAverageScore >= 100) {
    console.log(`Koalas wins with an Average Score of ${koalaAverageScore}!`);
} else if (koalaAverageScore === dolphinAverageScore && koalaAverageScore >= 100 && dolphinAverageScore >= 100) {
    console.log(`It's a Draw for both teams! Koala : ${koalaAverageScore} vs Dolphins : ${dolphinAverageScore}`)
} else {
    console.log(`Quite a show of shame, as both teams performed poorly not scoring up to 100 points! Dolphins : ${dolphinAverageScore} vs Koala : ${koalaAverageScore}`)
}

// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300 if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/

//Solution
var billValue = 430;
let tip = (billValue >= 50 && billValue <=300) ? billValue * 0.15 : billValue * 0.2;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`)
