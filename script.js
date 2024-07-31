function calculateTotalExpenses(expenses) {
    // Use reduce to sum up the amount of each expense
    const total = expenses.reduce((accumulator, expense) => {
      return accumulator + expense.amount;
    }, 0);
  
    return total;
  }
  
  // Input
  const expenses = [
    { name: "Food", amount: 50 },
    { name: "Transportation", amount: 30 },
    { name: "Internet", amount: 45 },
    { name: "Groceries", amount: 80 }
  ];
  
  // Output
  const totalExpenses = calculateTotalExpenses(expenses);
  console.log(totalExpenses); // Output should be: 205
  