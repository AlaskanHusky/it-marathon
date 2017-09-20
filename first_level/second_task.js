function shuffleArray(array) {
    for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let tempArr = [0, 1, 2, 3, 4, 5, 6, 7];

document.querySelector('#array').innerHTML += tempArr.join(' ');
document.querySelector('#resultArray2').innerHTML += shuffleArray(tempArr).join(' ');