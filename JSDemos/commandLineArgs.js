// proces.argv is an array containing the command line arguments
// the first element will be path to node
// the second element will be the name of the JS file
// the next elements will be any additional command line arguments

for (var index in process.argv)
    console.log(index, process.argv[index]);

// run the program in terminal
// node commandLineArgsDemo.js
// node commandLineArgsDemo.js arg1 arg2 name test key=val
