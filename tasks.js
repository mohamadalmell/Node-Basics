
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
var cmd = ["quit", "hello", "help", "exit", "list", "add", "remove", "edit"];

function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.replace("\n", '').trim() === cmd[1] || text.length > 5 && text.includes('hello')){
    text= text.trim().replace("\n", '');
    hello(text);
  }
  else if (text === 'help\n'){
    help();
  } else if (text.replace("\n", '').trim() === cmd[4]) {
    list();
  }else if (text.replace("\n", '').trim() === cmd[5] || text.length>3 && text.includes("add"))  {
    text = text.trim().replace("\n", '')
    add(text);
  }else if (text.replace("\n", '').trim() === cmd[6] || text.length>6 && text.includes("remove"))  {
    text = text.trim().replace("\n", '')
    remove(text);
  }else if (text.replace("\n", '').trim() === cmd[7] || text.length>4 && text.includes("edit"))  {
    text = text.trim().replace("\n", '')
    edit(text);
  }else {
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Greet the user by his name!
 * @param  {string}
 * @returns {void}
 */
function hello(name){
  console.log(name+'!');
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}


/**
 * Help the user of the application
 *
 * @returns {void}
 */function help(){
  console.log('quit,exit -to exit the application' + '\n' + 'hello -to say Hello!');
}

/**
 * Showing tasks
 *
 * @returns {void}
 */function list(input){
  // var all = tasks.values;
  // all = all.trim()
  if (input != []) {
    for (let i = 0; i < tasks.length; i++) {
      console.log(`${i+1} - [ ] ${tasks[i]}`);
    }
  }
}

/**
 * Add tasks
 *
 * @returns {void}
 */function add(input){
  if (input.length>3) {
    let item = input.split(" ", 2)
    tasks.push(item[1])
    console.log(`Added \"${item[1]}\" to the tasks`);
  } else console.log("error!");
}

/*
 * Remove tasks
 *
 * @returns {void}
 */function remove(input){
   let rmv = input.split(" ",2);
   let num = parseInt(rmv[1]);
   if (input === 'remove') {
    console.log(`Removed \"${tasks[tasks.length-1]}\" from the tasks`);
    tasks.splice(-1);
  } else if (num > 0) {
    console.log(`Removed \"${tasks[num-1]}\" from the tasks`);
    tasks.splice((num-1),1);
    if (num > tasks.length) {
      console.log('Item doesn\'t exist');
    }
  } 
 }

 /*
 * Edit tasks
 *
 * @returns {void}
 */function edit(input){
   input = input.trim().replace('\n', '')
  let edt = input.split(" ");
  if (input === 'edit') {
   console.log('Wrong input!'); 
  }else if (isNaN(edt[1]) == true) {
    console.log(`Edited \"${tasks[tasks.length-1]}\"`);
    tasks[tasks.length -1] = edt.slice(1).join(" ");
  } else {
    console.log(`Edited \"${tasks[edt[1]-1]}\"`);
    tasks[edt[1]-1] = edt.slice(2).join(" ")
  }
 }   


// The following line starts the application
startApp("Mohamad Al Mell")

// Tasks
  var tasks = ['laundry', 'dish washing', 'shopping']
