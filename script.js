// #### Part 1
// There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan.
// Create an array that has these three names in order.

const inOrder = ["Sofia", "David", "Juan"];

// #### Part 2
// Two more people get added to the back of the line - Sara and Augustin.
// The first person in line is called to the teller.
// What does the queue look like?
inOrder.push("Sara", "Augustin");
console.log(inOrder);

inOrder.shift(0);
console.log(inOrder);

// #### Part 3
// It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line.
// What does the queue look like?

inOrder.splice("David" + 0, 1, "Renata");
console.log(inOrder);
inOrder.push("Elena");
console.log(inOrder);
