// --------- POWER FUNCTION

function pow(x, n) {
    var y = 1;

    for (var i = 0; i < n; i++) {
        y *= x;
    }

    return y;
}

var x = prompt("Please, enter the number", '');
var n = prompt("Please, enter the integer power", '');

if (n <= 1) {
    alert('Power' + n + 'Is not allowed, enter the integer power greater than 1');
} else {
    alert( pow(x, n) );
};

// SECOND TASK

var myArr = [];
var numOfNames = 5;

pushNames(myArr, numOfNames);

console.log("Your array is "+ myArr);

if (myArr.length === numOfNames) {
    var search = prompt("Please, enter your login", " ");
    findName(myArr, search);
}

// Function collecting names to the array
function pushNames(arr, n) {
    for (var i = 0; i < n; i++) {
        arr[i] = prompt("Please, enter any name", " ");
        if (arr[i] === null) {
            alert("The program was canceled");
            break;
        } else if (arr[i] === " ") {
            alert("You entered an invalid value, the program has been canceled");
            break;
        }
    }
    return (arr);
}

// SEARCHING MATCHES IN NAMES
function findName(arr, search) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] == search) {
            alert(search + " , hello!");
            return;
        }
    }
    alert("Such user was not found");
    return;
}