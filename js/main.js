// findMax([3, 7, 2, 9, 4]) // => 9
// findMax([-5, -1, -8])     // => -1

let numberArray = [1,3,14,51,34,5];
let returnResult = findMax(numberArray);

console.log('戻ってきた値：'+returnResult);

function findMax(numbers){
    let result = numbers[0];

    // 最大値返す処理
    for(let i = 0;i < numbers.length; i++){
        if(result < numbers[i]){
            result = numbers[i];
        }
    }
    return result;
}
// 引数として与えられた文字列を、逆順にして返す関数 reverseString を作成してください。

let textString = '今日からテスト';
let returnText = reverseString(textString);
console.log(returnText);

function reverseString(text){
    let textArr = [];

    for(let i = 0; i < text.length; i++){
        textArr.push(text[i]);
    }
    var reverseArr = textArr.reverse();
    return reverseArr.join('');
    
}

// gold → 30%
// silver → 20%
// bronze → 10%
// その他 → 0%

let objectLank = {
    'gold' : 'gold',
    'silver' : 'silver',
    'bronze' : 'bronze',
}

let test1 = getDiscountRate(objectLank.gold);
let test2 = getDiscountRate(objectLank.silver);
let test3 = getDiscountRate(objectLank.bronze);
let test4 = getDiscountRate(objectLank.test);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);

function getDiscountRate(lank){
    let lankValue = '';
    if(lankValue == undefined || lankValue == null){
        return
    }

    if(lank == 'gold'){
        lankValue = '30%';
    }
    else if(lank == 'silver') {
        lankValue = '20%'; 
    } 
    else if(lank == 'bronze'){
        lankValue = '10%';
    }
    else {
        lankValue = '0%';
    }
    return lankValue;
}

console.log(getDiscountRate2('gold'));
console.log(getDiscountRate2('silver'));
console.log(getDiscountRate2('bronze'));
console.log(getDiscountRate2('test'));

function getDiscountRate2(lank){
    let lankNumber = lank;
    let objectLank = {
        'gold' : 30,
        'silver' : 20,
        'bronze' : 10,
    }
    return objectLank[lankNumber] ?? 0
}

const products = [
    { name: "りんご", price: 100, stock: 3 },
    { name: "バナナ", price: 80, stock: 0 },
    { name: "みかん", price: 120, stock: 5 },
    { name: "パイナップル", price: 300, stock: 0 }
];

console.log(productsFunc(products));

function productsFunc(products){
    let productArr = [];

    for(let i = 0; i < products.length; i++){
        if(products[i]['stock'] > 0){
            productArr.push(products[i]['name']);
        } 
    }
    
    return productArr;
}
const products2 = [
    { name: "りんご", price: 100, stock: 3 },
    { name: "バナナ", price: 80, stock: 0 },
    { name: "みかん", price: 120, stock: 5 },
    { name: "パイナップル", price: 300, stock: 1 }
];
console.log(productsFunc2(products2));

function productsFunc2(products){
    let result = 0;
    let productArr = [];
    
    for(let i = 0; i < products.length; i++){
        let total = 0;

        if(products[i]['stock'] > 0){
            total = products[i]['stock'] * products[i]['price'];
            productArr.push(total);
        }
    }

    for(let i = 0; i < productArr.length; i++){
        result += productArr[i];
    }

    return result;
}

// function waiting(seconds) {
//     return new Promise(ok => {
//     setTimeout(() => {
//         ok();
//         }, 1000 * seconds)
//     })
// };

// async function aTest2(){
//     console.log(1);
//     await waiting(2);
//     console.log(3);
// }

// aTest2(); // 関数の実行

// 非同期
let test111 = 'test';

function asyncFunc(num){
    return new Promise(ok => {
        setTimeout(function(){
            let test3 = 'しし座流星群';
            return ok(test3);
        }, num * 1000)
    })
}
async function noneFunc(){
    let test3 = await asyncFunc(1);
    test111 = test3;
    // console.log(test111);
    let input = document.querySelector('#test input');
    input.value = test111;

}

let input = document.querySelector('#test input');

noneFunc();
input.value = test111;


function countChars(text) {
    let result = {};

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }

    return result;
}

let textObj = countChars("apple"); 
console.log(textObj.p);