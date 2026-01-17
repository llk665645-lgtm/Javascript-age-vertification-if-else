const input = document.getElementById('ageInput');// 1-task
const button = document.getElementById('checkBtn');
const result = document.getElementById('result');
button.addEventListener('click', () =>{
    const age = Number(input.value);
    
    if (age < 0){
        result.textContent = 'Введите корректный возраст'
        result.style.color = 'blue';
        return;
    }
    if (!age) {
        result.textContent = 'Введите корректный возраст'
        result.style.color = 'orange';
        return;
    }
    const status = age >= 18 ? 'adult': 'child';
    result.textContent = `Status: ${status}`;
    result.style.color ='white'
})


let students =[//  2-task
    {name:'Mariyam', age: 16, class: 10 },
    {name:'Aisha', age: 17, class: 11},
    {name:'Sanzhar', age: 16, class: 10},
    {name:'Erasyl', age: 17, class: 11}
]
console.log(students[0])


students.forEach((students) => {// task-3
    console.log(students);
 })

const markInput = document.getElementById('markInput'); // 4-task
const checkBtnMarks = document.getElementById('checkBtnMarks');
const resultMarks = document.getElementById('resultMarks');
checkBtnMarks.addEventListener('click', () =>{
    const mark = Number(markInput.value);
    
    if (mark < 0){
        resultMarks.textContent = 'F'
        resultMarks.style.color = 'red';
        return;
    }
    if (!mark) {
        resultMarks.textContent = 'Введите корректный балл'
        resultMarks.style.color = 'pink';
        return;
    }
    if (mark <= 9) {
        resultMarks.textContent = 'C'
        resultMarks.style.color = 'purple';
        return;
    }
    if (mark >= 10 && mark < 15) {
        resultMarks.textContent = 'B'
        resultMarks.style.color = 'blue';
        return;
    }
    if (mark>= 10 && mark <= 20) {
        resultMarks.textContent = 'A'
        resultMarks.style.color = 'green';
        return;
    }
    else {
        resultMarks.textContent = 'Максимальный балл 20'
        resultMarks.style.color = 'orange';
        return;
    }
})