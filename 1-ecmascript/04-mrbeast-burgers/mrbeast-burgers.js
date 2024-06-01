const mrBeastInfo = {
  firstName: "Jimmy",
  lastName: "Donaldson",
  subscribers: 406000000
}

const mrBeastProducts = [
  "MrBeast Burgers",
  "Feastables",
  "Finger on the App",
  "Team Trees"
]

// Use destructuring assignment here 💖
const { firstName, lastName, subscribers } = mrBeastInfo;

const [mrbeastBurgers, , teamTrees] = mrBeastProducts;

// Log info here 💖
console.log(`${firstName} ${lastName}`);
console.log(subscribers);
console.log();
console.log(mrbeastBurgers);
console.log(teamTrees);