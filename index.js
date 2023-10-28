function writeCards(names, msg) {
    let arr = [];
    for (let i = 0; i < names.length; i++) {
        arr.push(`Thank you, ${names[i]}, for the wonderful ${msg} gift!`);
        debugger;
    }
    return arr;
}

function countDown (num) {

    while (num >= 0) {
        console.log(num);
        num--;
    }
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");
countDown(10);
