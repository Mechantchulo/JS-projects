const quiz = [
    ["Who is the president of Kenya?", "Ruto"],
    ["Who is the president of USA?", "Trump"],
    ["Who is the president of Tz?", "Suluhu"]

]

//start the quiz

function start(quiz) {
    let score = 0;

    for (const [question, answer] of quiz) {
        const response = ask(question);
        check(response, answer);

    }
}
gameOver();

function ask(question) {
    return prompt(question);
}

function check(response) {
    if (response === answer) {
        alert('Correct!!');
        score++;
    } else {
        alert('Wrong answer to the question asked!!');

    }
}

start(quiz);