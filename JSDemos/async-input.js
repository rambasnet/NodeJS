// Enter some data
console.log('Enter some data: ')

// use 'data' event
process.stdin.on('data', data => {
  data = data.toString().trimEnd();
  console.log(`You typed: ${data}`);
  if (data == 'end')
    process.exit();
});