function repeater(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

// repeater(5, console.log);

function multiplier(factor) {
    return function (x) {
        return x * factor;
    };
}

// const triple = multiplier(3);
// const res = triple(1);
// console.log(res);

function compose(f, g) {
    return function (x) {
        return f(g(x));
    };
}

const add1 = (x) => x + 1;
const double = (x) => x * 2;

const addThenDouble = compose(double, add1);
// console.log(addThenDouble(3));

//function to convert number to binary form

function IntToBinary(x) {
    let res = "";
    while (x > 0) {
        res = res + String(x % 2);
        x = Math.floor(x / 2);
    }

    return Number(reverse(res));
}

function reverse(s) {
    const arr = s.split("");

    const reversedarr = arr.reverse();

    const reversedS = reversedarr.join("");

    return reversedS;
}

const res = IntToBinary(13);
console.log("Int to binary: ", res);

function BinaryToInt(binaryNum) {
    let ans = 0;
    let temp = String(binaryNum);

    let i = temp.length - 1;
    let pt = 1;
    while (i >= 0) {
        if (temp[i] == "1") {
            ans += pt;
        }
        pt = pt * 2;
        i--;
    }

    return ans;
}

const res2 = BinaryToInt(res);
console.log("Binary to int: ", res2);
