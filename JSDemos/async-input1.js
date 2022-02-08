
// use 'readable' event
process.stdin.on('readable', () => {
  let chunk;
  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`data: ${chunk}`);
    if (chunk.toString().trim() === 'end')
      process.exit();
  }
});