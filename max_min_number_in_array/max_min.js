//min num in array

const minDigit = (arr) => {
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < res) {
            res = arr[i]
        }
    }
    return res;
};

//console.log(minDigit([1, 2, 4, 0, 10, 0, 5, -0.8, 0.9, 1,8]));


//max num in array

const maxNum = (arr) => {
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let numMax = arr[i];
        if (res < numMax) {
            res = numMax;
        }
    }
    return res;
};

console.log(maxNum([18, -3, 0, 23, 90, 9, -100.4, 90.1]));