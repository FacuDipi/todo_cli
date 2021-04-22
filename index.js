#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import inquirer from 'inquirer';
import figlet from 'figlet';
import chalk from 'chalk';

import { todoPrompts } from './prompts.js';
import { saveTodo, getTodos } from './utils.js';

const program = new Command();
const { prompt } = inquirer;

let log = console.log;



program
  .version('1.0.0')
  .description(chalk.greenBright(figlet.textSync('MyToDo', {font: 'Larry 3D'})));





  program
  .command('new')
  .alias('n')
  .description(chalk.green('Create new ToDo'))
  .action(() => {
    prompt(todoPrompts).then(({ writeTodo }) => {
      const key = writeTodo;
      let todos = getTodos();
      todos[key] = { writeTodo };
      saveTodo(todos);
      log(chalk.cyanBright('To do creado'));
    });
  });

  program
  .command('list')
  .alias('l')
  .description(chalk.green('List ToDos'))
  .action(() => {
    let todos = getTodos();
    prompt([
      {
      
        choices: Object.keys(todos),
      },
    ]).then(({ selected }) => {
      const todo = todos[selected];
      console.log(todo);
    
    });
  });


  program.parse(process.argv);

