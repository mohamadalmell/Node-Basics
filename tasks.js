
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
var cmd = ["quit", "hello", "help", "exit", "list"];

function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.replace("\n", '').trim() === 'hello\n' || text.length > 5){
    text= text.trim().replace("\n", '');
    hello(text);
  }
  else if (text === 'help\n'){
    help();
  } else if (text.replace("\n", '').trim() === cmd[4]) {
    list();
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
  var all = `Tasks:\n${tasks[0]}\n${tasks[1]}\n${tasks[2]}\n`;
  all = all.trim() 
  console.log(all);
}

// The following line starts the application
startApp("Mohamad Al Mell")

// Tasks
  var tasks = ['laundry', 'dish washing', 'shopping']
