//問題１

function processNumbers(numbers){
    b = []
    for(let i = 0;i<numbers.length;i++){
        if (numbers[i] % 2 === 0){
            b.push(numbers[i])
        }
    }

    return b
}

const input = [1, 2, 3, 4, 5, 6];
let result = processNumbers(input);

console.log(result);

//問題２
function sumEvenNumbers(numbers){
    let sum = 0
    for(let i = 0;i<numbers.length;i++){
        if (numbers[i] % 2 === 0){
            sum += numbers[i]
        }
    }
    return sum
}

result = sumEvenNumbers(input);
console.log(result);

function createCounter(initialValue){
    //1.状態を保持するローカル変数を定義
    let count = initialValue;

    return {
        // 2. countを操作するメソッドを持つオブジェクトを返す
        increment() {
            count += 1;
            return count;
        },
        decrement() {
            count -= 1;
            return count;
        }
    };
}

const counter = createCounter(10);

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());

console.log(counter.count);


