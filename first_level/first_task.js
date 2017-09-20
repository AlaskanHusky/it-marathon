let fArr = [0, 1, 2];
let sArr = [0, 1, 2, 'a', 'b', 'c', 6, 7];
let tArr = ['%', '#', 2, 3];

function arraysValuesAddition(firstArray, secondArray, thirdArray) {
    let arr = [firstArray, secondArray, thirdArray];
    let maxSize = Math.max(firstArray.length, secondArray.length, thirdArray.length);
    for (let i = 0; i < 3; i++) {
        if (arr[i].length < maxSize) {
            while (arr[i].length !== maxSize) {
                arr[i].push('');
            }
        }
    }
    return firstArray.map((num, i) => num + secondArray[i] + thirdArray[i]);
}

document.querySelector('#firstArray').innerHTML += fArr.join(' ');
document.querySelector('#secondArray').innerHTML += sArr.join(' ');
document.querySelector('#thirdArray').innerHTML += tArr.join(' ');
document.querySelector('#resultArray').innerHTML += arraysValuesAddition(fArr, sArr, tArr).join(', ');