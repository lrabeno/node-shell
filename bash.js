//Output a prompt
const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  //   console.log("COMMAMD FROM 11", cmd);
  const [file, arg] = cmd.split(" ");

  //   console.log("This the file --->>>", file);
  //   console.log("This the ARGGG --->>>", arg);

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd === `cat ${arg}`) {
    cat(arg);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
