const list = document.getElementById("list");

const newItem = document.createElement("li");
newItem.textContent = "新しいアイテム";

list.appendChild(newItem);

//DOM操作
const title = document.getElementById('title');
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
    //3. 文字の内容を書き換える
    title.textContent = 'ボタンが押されました!';
    title.style.color = 'blue'; //色も変えてみる
    
});