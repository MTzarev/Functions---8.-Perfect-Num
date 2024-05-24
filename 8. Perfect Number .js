function perfectNumber(num) {
    let perfectNum = [];
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            perfectNum.push(i)
        } 

    }
    //perfectNum.split([]);
    for (let j = 0; j < perfectNum.length; j++) {
        let digit = Number(perfectNum[j]);
        sum += +digit;
    }



    if (sum === num) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }

    console.log();

}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);