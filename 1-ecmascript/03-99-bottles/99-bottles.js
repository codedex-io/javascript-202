// 99 Bottles 🥤
// Codédex

for (let i = 99; i > 0; i--) {
  console.log(`${i} ${i === 1 ? 'bottle' : 'bottles'} of pop on the wall`);
  console.log(`${i} ${i === 1 ? 'bottle' : 'bottles'} of pop`);
  console.log("take one down, pass it around");
  console.log(`${i - 1} ${i - 1 === 1 ? 'bottle' : 'bottles'} of pop on the wall`);
  console.log();
}