#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.bold.italic.magentaBright("Please Enter Your Name: "),
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "Select",
        type: "list",
        message: chalk.bold.italic.magentaBright("Select Your Opponent"),
        choices: ["Skeleton☠️", "Alien👽", "Zombie🧟"],
    }
]);
let P1 = new Player(player.name);
let O1 = new Opponent(opponent.Select);
do {
    // Skeleton
    if (opponent.Select == "Skeleton☠️") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack💥", "Drink Portion🍹", "Run for your Life...🥺"],
            }
        ]);
        if (ask.opt == "Attack💥") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log("You Lose, better Luck next time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (O1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion🍹") {
            P1.fuelIncrease();
            console.log(chalk.green(`You drink a health potion! Your fuel is ${P1.fuel}`));
        }
        if (ask.opt == "Run for your Life...🥺") {
            console.log(chalk.red("You run for your life, but couldn't escape!"));
            console.log(chalk.red("You lose, better luck next time!"));
            process.exit();
        }
    }
    // Alien
    if (opponent.Select == "Alien👽") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack💥", "Drink Portion🍹", "Run for your Life...🥺"],
            }
        ]);
        if (ask.opt == "Attack💥") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log("You Lose, better Luck next time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (O1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion🍹") {
            P1.fuelIncrease();
            console.log(chalk.green(`You drink a health potion! Your fuel is ${P1.fuel}`));
        }
        if (ask.opt == "Run for your Life...🥺") {
            console.log(chalk.red("You run for your life, but couldn't escape!"));
            console.log(chalk.red("You lose, better luck next time!"));
            process.exit();
        }
    }
    // Zombie
    if (opponent.Select == "Zombie🧟") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack💥", "Drink Portion🍹", "Run for your Life...🥺"],
            }
        ]);
        if (ask.opt == "Attack💥") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log("You Lose, better Luck next time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (O1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion🍹") {
            P1.fuelIncrease();
            console.log(chalk.green(`You drink a health potion! Your fuel is ${P1.fuel}`));
        }
        if (ask.opt == "Run for your Life...🥺") {
            console.log(chalk.red("You run for your life, but couldn't escape!"));
            console.log(chalk.red("You lose, better luck next time!"));
            process.exit();
        }
    }
} while (true);
