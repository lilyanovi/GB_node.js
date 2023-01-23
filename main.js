import colors from 'colors'


const arr= process.argv;
const arg1=Number(arr[2]);
const arg2=Number(arr[3]);

function isNumber(num) {
	return typeof num === 'number' && !isNaN(num);
}

if (isNumber(arg1) && isNumber(arg2)) {
  
    const simpleNumbers = [];

    for(let i=arg1; i<=arg2; i++){
        primeNumb(i);       
    }

    function primeNumb(num) {
        if (num > 1) {
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    return;
                }
            }
                simpleNumbers.push(num);
                return;
            } 
    }

    if (simpleNumbers == 0){
        console.log(colors.red('Простых чисел в диапазоне нет'))
    }


    let size = 3; 
    let subarray = []; 
    for (let i = 0; i <Math.ceil(simpleNumbers.length/size); i++){
        subarray[i] = simpleNumbers.slice((i*size), (i*size) + size);
    }
    subarray.forEach(array => {
        console.log(colors.green(array?.[0]));
        console.log(colors.yellow(array?.[1]));
        console.log(colors.red(array?.[2]));
    });
} else {
    console.log(colors.green('Аргумент, переданный при запуске, не является числом'))
}







    