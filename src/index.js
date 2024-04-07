#! /usr/bin/env node
import inquirer from 'inquirer';
const randomNumber = Math.floor(Math.random() * 10);
const ans = await inquirer.prompt([
    {
        type: "number",
        name: "UserGuess",
        message: "write your guess b/w 1 to 10"
    }
]);
// destructure
const { UserGuess } = ans;
if (UserGuess === randomNumber) {
    console.log(UserGuess, 'UserGuess', randomNumber, 'Random Number');
    console.log("you won!!!!");
}
else {
    console.log("plzz try again later \n better luck next time");
}
console.log(ans.UserGuess);
