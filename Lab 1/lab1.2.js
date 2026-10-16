const items = [true, 'hello', 5, 12, -200, false, false, 'word', 42, 'test', true, 3.14];
const typeCounts = {};
for (const item of items) {
  const type = typeof item;
  typeCounts[type] = (typeCounts[type] || 0) + 1;
}
console.log(typeCounts);