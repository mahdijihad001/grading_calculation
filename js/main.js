document.querySelector('.submit_btn').addEventListener('click', function () {
    let bangla_mark = document.querySelector('.bangla_mark').value;
    let banela = document.querySelector('.bangla_mark');
    let english_mark = document.querySelector('.english_mark').value;
    let english = document.querySelector('.english_mark');
    let math_mark = document.querySelector('.math_mark').value;
    let math = document.querySelector('.math_mark');
    let total_mark = Number(bangla_mark) + Number(english_mark) + Number(math_mark);

    let average_mark = total_mark / 3;

    // document.querySelector('.your_result').innerHTML = average_mark;


    if (average_mark < 33) {
        document.querySelector('.your_result').innerHTML = "You are failed! try again later. Your average mark " + Math.floor(average_mark);
    } else if (average_mark >= 33 && average_mark <= 40) {

        document.querySelector('.your_result').innerHTML = "You get D gread! Your average mark  " + Math.floor(average_mark);


    } else if (average_mark >= 41 && average_mark <= 50) {
        document.querySelector('.your_result').innerHTML = "You get C gread! Your average mark  " + Math.floor(average_mark);

    } else if (average_mark >= 51 && average_mark <= 60) {
        document.querySelector('.your_result').innerHTML = "You get B gread! Your average mark  " + Math.floor(average_mark);

    } else if (average_mark >= 61 && average_mark <= 70) {
        document.querySelector('.your_result').innerHTML = "You get A- gread! Your average mark  " + Math.floor(average_mark);

    } else if (average_mark >= 71 && average_mark <= 80) {
        document.querySelector('.your_result').innerHTML = "You get A gread! Your average mark  " + Math.floor(average_mark);

    } else if (average_mark >= 81) {
        document.querySelector('.your_result').innerHTML = "Congratulations You get A+! Your average mark  " + Math.floor(average_mark);

    }


    banela.value = " ";
    math.value = " ";
    english.value = " ";








})