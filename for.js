// As you complete each challenge, RUN THE CODE to ensure it works. You can do this by
// running `node <filepath>`. If you are in this directory, you'd run `node for.js`.
  
// Challenge 1
// Use a for statement to log to the console all even numbers between 25 and 75.

for (var i = 26; i < 75; i+=2) {
  console.log(i);
}

// Challenge 2
// Use a for statement to log to the console a complete sentence stating the weather using the Array below:
var weatherOptions = ["sunny", "snowy", "freezing", "partly cloudy", "drizzly"]

for (var i = 0; i < weatherOptions.length; i++) {
  console.log(`The weather is ${weatherOptions[i]}!`)
}

// Challenge 3
// Use a for statement to log to the console only the words that are exactly 3 characters in length
var words = ["car", "bike", "bus", "van", "scooter", "truck", "rv"]

for (var i = 0; i < words.length; i++) {
  if (words[i].length ===3) {
    console.log(words[i]);
  }
}
// 📹 Record yourself live-coding and talking through any ONE of the challenges. 
  // The recording doesn't have to be the first time you are solving the problem. 
  // Use technical vocabulary and explain each part to demonstrate your understanding! 
  // Share the link to your video in your small group channel.

