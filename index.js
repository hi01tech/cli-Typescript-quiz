#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("-".repeat(60));
console.log(chalk.bold.rgb(255, 255, 146) `\n\tWelcome to "hi01tech" Typescript Quiz\n`);
console.log("-".repeat(60) + "\n");
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "\nQ1. What is the correct way to check if two variables are not equals in Typescript?",
        choices: [{ value: 'a == b' }, { value: 'a === b' }, { value: 'a = b' }, { value: 'a !== b' }]
    },
    {
        name: "question_2",
        type: "list",
        message: "\nQ2. Which Typescript feature allows you to combine multiple types togather to create a new type?",
        choices: [{ value: 'Union types' }, { value: 'Intersction types' }, { value: 'Tuples type' }, { value: 'Enum types' }]
    },
    {
        name: "question_3",
        type: "list",
        message: "\nQ3. In Typescript, which symbol is used to terminate a statement ?",
        choices: [{ value: '.' }, { value: ':' }, { value: ';' }, { value: ',' }]
    },
    {
        name: "question_4",
        type: "list",
        message: "\nQ4. Which method of Inquirer.js is used to start the prompt interface and recieve user input?",
        choices: [{ value: '.start()' }, { value: '.prompt()' }, { value: '.init()' }, { value: '.run()' }]
    },
    {
        name: "question_5",
        type: "list",
        message: "\nQ5. Which operator is used for string concatination in Typescript?",
        choices: [{ value: '+' }, { value: '&' }, { value: ',' }, { value: '/' }]
    }
]);
let score = 0;
// switch case to match answers
switch (quiz.question_1) {
    case 'a !== b':
        score++;
        console.log(chalk.bold.rgb(154, 240, 0)("1. Correct!"));
        break;
    default:
        console.log(chalk.bold.rgb(216, 31, 42)("1. Incorrect!"));
        break;
}
switch (quiz.question_2) {
    case 'Union types':
        score++;
        console.log(chalk.bold.rgb(154, 240, 0)("2. Correct!"));
        break;
    default:
        console.log(chalk.bold.rgb(216, 31, 42)("2. Incorrect!"));
        break;
}
switch (quiz.question_3) {
    case ';':
        score++;
        console.log(chalk.bold.rgb(154, 240, 0)("3. Correct!"));
        break;
    default:
        console.log(chalk.bold.rgb(216, 31, 42)("3. Incorrect!"));
        break;
}
switch (quiz.question_4) {
    case '.prompt()':
        score++;
        console.log(chalk.bold.rgb(154, 240, 0)("4. Correct!"));
        break;
    default:
        console.log(chalk.bold.rgb(216, 31, 42)("4. Incorrect!"));
        break;
}
switch (quiz.question_5) {
    case '+':
        score++;
        console.log(chalk.bold.rgb(154, 240, 0)("5. Correct!"));
        break;
    default:
        console.log(chalk.bold.rgb(216, 31, 42)("5. Incorrect!"));
        break;
}
console.log(chalk.rgb(255, 255, 146)(`\n Your Score: ` + `${score}`));
