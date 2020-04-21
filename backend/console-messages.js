const fs = require('fs');

let wordArt;
if (fs.existsSync('art.txt')) {
  wordArt = fs.readFileSync('art.txt', 'utf8');
}

module.exports = {
  clearConsole () {
    console.log('\033[2J');
    process.stdout.write("\u001b[3J\u001b[2J\u001b[1J");
    console.clear();
  },
  checkingDatabase () {
    console.log('Checking DB connection...')
  },
  wordArt () {
    if (wordArt) {
      console.log(wordArt)
    }
  },
  serverReady (url) {
    console.log(`Connected to DB`)
    console.log(`🚀  Server ready at ${url}`)
  }

}