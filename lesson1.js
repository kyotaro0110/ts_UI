//オブジェクトの作成
const person = {
    name: "太郎",
    age: 25,
    address: {
        city: "東京",
        zipCode: "123-4567"
        },
    hobbies: ["読書", "旅行"]
}; 

//アロー関数
const greet = (name) => {
    return `こんにちは、${name}さん!`;
}; 


console.log(person.name);
console.log(person["age"]);
console.log(person.address.city);
console.log(person.hobbies[0]);
console.log(greet("太郎"));
