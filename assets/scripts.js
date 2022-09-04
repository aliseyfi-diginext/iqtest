$(document).ready(function () {

    var contents = '';
    var buttons = '';
    for (var i = 1; i <= 35; i++) {

        contents += `
            <div class="question" id="q${i}" data-current-question="${i}">
                <div class="main-picture">
                    <img src="img/q${i}.png">
                </div>
                <div class="answers-pictures" data-answer="">
                    <img src="img/q${i}a.png" data-value="a">
                    <img src="img/q${i}b.png" data-value="b">
                    <img src="img/q${i}c.png" data-value="c">
                    <img src="img/q${i}d.png" data-value="d">
                    <img src="img/q${i}e.png" data-value="e">
                    <img src="img/q${i}f.png" data-value="f">
                </div>
            </div>

        `;

        buttons += `<button ${i == 1 ? 'class="active"' : ''} type="button" name="button">${i}</button>`;
    }

    $('.container').html(contents);
    $('.menu').html(buttons);


    $('.answers-pictures img').click(function(){

        // find out current question
        var currentQuestion = Number($(this).parents('.question').attr('data-current-question'));

        // find answer
        var answer = $(this).attr('data-value');
        $(this).parents('.answers-pictures').attr('data-answer', answer);

        // display next question
        $(`#q${currentQuestion}`).hide();
        $(`#q${currentQuestion+1}`).slideDown();

        $('button').removeClass('active');
    });

});
