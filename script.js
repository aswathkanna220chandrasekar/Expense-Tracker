let expenses = []; 
let total = 0; 
function addExpense() { 
    let name = document.getElementById("expenseName").value.trim(); 
    let amount = Number(document.getElementById("expenseAmount").value); 
    if (name === "" || !Number.isFinite(amount) || amount <= 0) { 
        alert("Please enter a valid expense name and amount."); 
        return; 
    } 
    let expense = { 
        id: Date.now(), 
        name: name, 
        amount: amount 
    }; 
    expenses.push(expense);
    displayExpenses(); 
    document.getElementById("expenseName").value = ""; 
    document.getElementById("expenseAmount").value = ""; 
} 
function displayExpenses() { 
    let list = document.getElementById("expenseList"); list.innerHTML = ""; 
    total = 0; 
    expenses.forEach(function (expense) { 
        total += expense.amount; 
        let li = document.createElement("li"); 
        let details = document.createElement("span"); 
        details.textContent = 
        expense.name + " - ₹" + expense.amount.toFixed(2); 
        let deleteButton = document.createElement("button"); 
        deleteButton.textContent = "Delete"; 
        deleteButton.className = "delete-btn"; 
        deleteButton.onclick = function () { 
            deleteExpense(expense.id); 
        }; 
        li.appendChild(details); 
        li.appendChild(deleteButton); 
        list.appendChild(li); }); 
        document.getElementById("totalAmount").textContent = total.toFixed(2); 
    } 
    function deleteExpense(id) { 
        expenses = expenses.filter(function (expense) { 
            return expense.id !== id; 
        }); 
        displayExpenses(); 
    }