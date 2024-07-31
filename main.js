var quotes = [];

const fs = require('fs');
const readline = require('readline');

async function readQuotes() {
  const fileStream = fs.createReadStream('quoteFile.txt');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  for await (const line of rl) {
    console.log(`line from file: ${line}`);
  }
}

// The method that is going to print the qoute to the console
function printQuote(quote) {
   console.log(quote);
}

readQuotes();


