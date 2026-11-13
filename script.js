
// =================================
// SPENDWISE - WEEK 6
// JavaScript Budget Tracker
// =================================

// 1. Collect monthly budget
let monthlyBudget = Number(
    prompt("Enter your monthly budget in KSh:")
);

// 2. Create an expenses array
let expenses = [];

// 3. Collect expense information
if (Number.isFinite(monthlyBudget) && monthlyBudget > 0) {

    let numberOfExpenses = Number(
        prompt("How many expenses do you want to record?")
    );

    if (
        Number.isInteger(numberOfExpenses) &&
        numberOfExpenses >= 1 &&
        numberOfExpenses <= 50
    ) {

        for (let i = 0; i < numberOfExpenses; i++) {

            let expenseName = prompt(
                "Enter expense name " + (i + 1)
            );

            let expenseAmount = Number(
                prompt("Enter amount for " + expenseName + " in KSh:")
            );

            if (
                expenseName === null ||
                expenseName.trim() === "" ||
                !Number.isFinite(expenseAmount) ||
                expenseAmount < 0
            ) {
                alert("Invalid expense information. Please try again.");
                break;
            }

            expenses.push({
                name: expenseName,
                amount: expenseAmount
            });
        }

        // 4. Calculate total expenses
        function calculateTotalExpenses(expenseList) {
            let total = 0;

            for (let expense of expenseList) {
                total += expense.amount;
            }

            return total;
        }

        // 5. Calculate remaining balance
        function calculateRemainingBalance(budget, expenses) {
            return budget - expenses;
        }

        // 6. Display results
        if (expenses.length === numberOfExpenses) {

            let totalExpenses = calculateTotalExpenses(expenses);

            let remainingBalance = calculateRemainingBalance(
                monthlyBudget,
                totalExpenses
            );

            console.log("===== SPENDWISE REPORT =====");
            console.log("Monthly Budget: KSh " + monthlyBudget);
            console.log("Total Expenses: KSh " + totalExpenses);
            console.log("Remaining Balance: KSh " + remainingBalance);
            console.table(expenses);

            if (remainingBalance < 0) {
                console.log("Warning: You have exceeded your budget!");
            } else {
                console.log("You are within your budget!");
            }

            // 7. Update dashboard
            document.getElementById("budget").textContent =
                "KSh " + monthlyBudget.toLocaleString();

            document.getElementById("expenses").textContent =
                "KSh " + totalExpenses.toLocaleString();

            document.getElementById("balance").textContent =
                "KSh " + remainingBalance.toLocaleString();
        }

    } else {
        alert("Please enter a whole number of expenses between 1 and 50.");
    }

} else {
    alert("Please enter a valid monthly budget.");
}
