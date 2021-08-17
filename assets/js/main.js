console.clear();

const inputTipPercent = document.querySelectorAll('.select')
const inputBill = document.getElementById('bill');
const inputCustom = document.getElementById('custom');
const inputPeople = document.getElementById('people');
const reset = document.getElementById('reset');
const tipAmount = document.getElementById('amount');
const total = document.getElementById('total');

let bill = 0;
let tip = 0;
let people = 0;

inputTipPercent.forEach(tipPercent => {
    tipPercent.addEventListener('click', (e) => {
        console.log(e.target.value)
        tipPercent.checked == true;
        tip = parseInt(tipPercent.value);
        calculate(bill, tip, people);
    })
});


inputBill.addEventListener('focus', (e) => {
    if(inputBill.value == 0) {
        document.querySelector('.bill-btn').classList.add('error');
    } else {
        document.querySelector('.bill-btn').classList.remove('error');

    }
    bill = inputBill.value;
    calculate(bill, tip, people);
});
inputBill.addEventListener('input', (e) => {
    if(inputBill.value == 0) {
        document.querySelector('.bill-btn').classList.add('error');
    } else {
        document.querySelector('.bill-btn').classList.remove('error');

    }
    bill = inputBill.value;
    calculate(bill, tip, people);
});

inputCustom.addEventListener('focus', (e) => {
    if (inputPeople.value == 0) {
        document.querySelector('.tip__amount-btn').classList.add('error');
    } else {
        document.querySelector('.tip__amount-btn').classList.remove('error');
    }
    tip = inputCustom.value;
    calculate(bill, tip, people);
    clearPercent();

});
inputCustom.addEventListener('input', (e) => {
    if (inputPeople.value == 0) {
        document.querySelector('.tip__amount-btn').classList.add('error');
    } else {
        document.querySelector('.tip__amount-btn').classList.remove('error');
    }
    tip = inputCustom.value;
    calculate(bill, tip, people);
    clearPercent();

});

inputPeople.addEventListener('focus', (e) => {
    if (inputPeople.value == 0) {
        document.querySelector('.people-btn').classList.add('error');
    } else {
        document.querySelector('.people-btn').classList.remove('error');
    }
    people = inputPeople.value;
    calculate(bill, tip, people);

});
inputPeople.addEventListener('input', (e) => {
    if (inputPeople.value == 0) {
        document.querySelector('.people-btn').classList.add('error');
    } else {
        document.querySelector('.people-btn').classList.remove('error');
    }
    people = inputPeople.value;
    calculate(bill, tip, people);

});

function clearPercent() {
    inputTipPercent.forEach(tipPercentClear => {
        tipPercentClear.checked = false
    })
};

function calculate(bill, tip, people) {
    if (bill > 0 && people > 0) {
        const tipPercent = tip / 100;
        const billPerPeople = bill / people;
        const tipAmountPerPoeple = billPerPeople * tipPercent;
        tipAmount.innerText = `$${tipAmountPerPoeple.toFixed(2)}`;
        total.innerText = `$${(tipAmountPerPoeple + billPerPeople).toFixed(2)}`;
    }
};