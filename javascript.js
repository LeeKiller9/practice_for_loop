let result1 = ""
let result2 = ""

function showN5() {
    for (let i = 0; i <= 5; i++) {
        result1 = result1 + 'Number ' + i + '; ';
    }
    document.getElementById('prac1Result').innerHTML = result1;
}

function showTotal() {
    let num = parseInt(prompt("Enter number:"));
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total = total + i
        if (i === num)
            result2 = result2 + i + " = " + total
        else
            result2 = result2 + i + " + "
    }
    document.getElementById('prac2Result').innerHTML = result2;
}

function reset() {
    document.getElementById('prac1Result').innerHTML = ""
    document.getElementById('prac2Result').innerHTML = ""
}