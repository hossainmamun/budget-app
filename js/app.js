// ! input field selection
const budget_input = document.querySelector('#budget-input');

// ! expense field selection
const expense_title = document.querySelector('#expense-title');
const expense_input = document.querySelector('#expense-input');


// ! button selection
const budget_button = document.querySelector('#budget-btn');
const expense_button = document.querySelector('#expense-btn')

// ! result part selection
const budget = document.querySelector('#budget-balance')
const expense = document.querySelector('#expense-balance')
const balance = document.querySelector('#balance')

// ! table part
const table_display = document.querySelector('#display')

// ! add events handler with button
budget_button.onclick = () => {
    if (budget_input.value == "" || budget_input.value == 0) {
        alert('insert valid value in budget input');
    }
    else {
        budgetCalculation()
    }

}
expense_button.onclick = () => {
    if (expense_input.value == '' || expense_input.value == 0) {
        alert('insert valid value in expense input');
    }
    else if (expense_title.value == '') {
        alert('Insert a title please')
    }
    else {
        displayExpense()
        expanseCalculation()
        document.querySelector('#display-table').style.display = 'block'
    }
}

//! calculate budget
function budgetCalculation() {
    const budget_input_parse = parseFloat(budget_input.value);
    const budget_parse = parseFloat(budget.innerText);
    const balance_parse = parseFloat(balance.innerText)

    const budget_balance = budget_input_parse + budget_parse;
    budget.innerHTML = budget_balance.toFixed(2)

    const newBalance = budget_input_parse + balance_parse;
    balance.innerHTML = newBalance.toFixed(2);
    document.querySelector('#budget-input').value = '';
}

// ! calculate expense
function expanseCalculation() {
    const expense_input_parse = parseFloat(expense_input.value);
    const expense_parse = parseFloat(expense.innerText);
    const balance_parse = parseFloat(balance.innerText)

    const total_expanse = expense_input_parse + expense_parse;
    expense.innerHTML = total_expanse.toFixed(2);

    const newBalance = balance_parse - expense_input_parse;
    balance.innerHTML = newBalance

    document.querySelector('#expense-title').value = '';
    document.querySelector('#expense-input').value = '';
}

// ! ----- table display part -------
function displayExpense() {
    const row = document.createElement('tr');

    const td_title = document.createElement('td');
    td_title.innerHTML = expense_title.value;
    row.appendChild(td_title);

    const td_date = document.createElement('td');
    td_date.innerHTML = new Date().toDateString("dd/MM/yyyy");
    row.appendChild(td_date);

    const td_expense = document.createElement('td');
    td_expense.innerHTML = `${expense_input.value}.tk`;
    row.appendChild(td_expense);

    table_display.appendChild(row)
}