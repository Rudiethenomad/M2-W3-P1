/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help if you get stuck, reach a Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux
- The solution must be pushed into your repository and be available in eduflow before the next lecture day
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/*
let area = function (l1, l2)
{
    return l1 * l2;
}
let solution = area(7,63);
console.log (solution);

*/

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/*
let crazySum = function (int1, int2)
{
    if(int1 !== int2)
    {
    return (int1 + int2);
}
    else
    {
        return (int1 + int2) * 3;
    }
};
//console.log (crazySum(12,12));
console.log (crazySum(12,24));
*/


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
/*
let crazyDiff = function (n1)
{
if (n1 >= 19)
{
    return (n1 - 19) * 3;
}
else
{
    return (19- n1) * 3;
}
}
//console.log (crazyDiff(20));
console.log (crazyDiff(11));
*/
/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/*
let boundary = function(n)
{
    if ((n >= 20 && n <= 100) || n === 400)
    {
        return true;
    }
    else
    {
        return false;
    }
}

//console.log (boundary(22));
console.log (boundary(5));
*/


/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
/*
let strivify = function (str)
{
    if (str.startsWith("Strive"))
    {
        return str;
    }
    else
    {
        return str + "Strive";
    }

}
//console.log (strivify("ForLife"));
console.log (strivify("StriveForLife"));
*/
/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
/*
let check3and7 = function (n1)
{
    if (n1 >= 0 && (n1 % 3 === 0 || n1 % 7 === 0))
    {
        return true;
    }
    else
    {
        return false;
    }
}
//console.log (check3and7(21));
console.log (check3and7(5));
*/
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
let reverseString = function (str)
{
    return str.split("").reverse("").join("");
}
console.log (reverseString("eMnOknirDAevaH"));
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* 
const upperFirst = function (str)
{
    for (let i = 0; i <  ; i++)
    {

    }
}
*/
/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

const cutString = function(str)
{
    return str.slice(1, str.length -1);

};
console.log(cutString("ToSmokeFree"));


/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
//use math.random

const giveMeRandom = function(n)

    {
        const arr = [];
        for (let i =0; i <= n; i++)
        {
            arr.push(Math.floor(Math.random() * 10));
        }
        return arr;
    }
console.log (giveMeRandom(7));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
