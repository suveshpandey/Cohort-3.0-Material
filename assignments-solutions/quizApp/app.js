const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
]

const app = document.getElementById('app-container');

let i= 0;
function startQuiz(i){
    let ques = quizData[i].question;
    let question = document.createElement('h1');
    question.innerHTML = ques;
    app.appendChild(question);

    let option1 = document.createElement('button');
    option1.innerHTML = 'a- ' + quizData[i].a;
    app.appendChild(option1);
    let option2 = document.createElement('button');
    option2.innerHTML = 'b- ' +quizData[i].b;
    app.appendChild(option2);
    let option3 = document.createElement('button');
    option3.innerHTML = 'c- ' +quizData[i].c;
    app.appendChild(option3);
    let option4 = document.createElement('button');
    option4.innerHTML = 'd- ' + quizData[i].d;
    app.appendChild(option4);

    

}