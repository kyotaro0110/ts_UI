const button = document.getElementById('change-all-btn');
const tasks = document.querySelectorAll('.task-item'); //クラス名には.をつける

button.addEventListener('click',() => {
    tasks.forEach((task) => {
        task.textContent = '完了!';
    });
});

