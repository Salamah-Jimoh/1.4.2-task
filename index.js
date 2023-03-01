let classGroup = prompt("Please enter your class group: ");

if (classGroup == "Science") {
  console.log("Your subjects are: Physics, Chemistry, Biology, Technical Drawing, English, Mathematics");
} else if (classGroup === "Social Science") {
  console.log("Your subjects are: Accounting, Commerce, Marketing, Geography, English, Mathematics");
} else if (classGroup == "Arts") {
  console.log("Your subjects are: Government, Economics, Literature, History, English, Mathematics");
} else {
  console.log("Invalid class group. Please enter Science, Social Science or Arts.");
}
let num = prompt("Please enter a  number: ");
num = parseInt(num);

if (num <= 0) {
  console.log("Invalid input. Please enter a positive number.");
} else {
  let lowerPwr = 1;
  let higherPwr = 2;
  while (higherPwr <= num) {
    lowerPwr = higherPwr;
    higherPwr *= 2;
  }
  let pwr;
  if (num - lowerPwr <= higherPwr - num) {
    pwr = lowerPwr;
  } else {
    pwr = higherPwr;
  }
  console.log("The number " + pwr + " is the power of 2 nearest to " + num + ".");
}
