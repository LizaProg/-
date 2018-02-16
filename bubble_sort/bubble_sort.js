const sort = (arr) => {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            let biggerNum;
            //сравниваем текущий эл-т и следующий
            if (arr[i] > arr[i + 1]) {
                //текущее число больше чем следующее
                //записываем его в переменную
                biggerNum = arr[i];
                //на место текущего эл-та ставим следущее
                arr[i] = arr[i + 1];
                //на место следующего (меньшего эл-та)
                //ставим большее
                arr[i + 1] = biggerNum;
            }
        }
    }
    return arr;
};
console.log(sort([2, 1.345, 15, 4, 65, 18, 90, 33, 700, 8.2]));

