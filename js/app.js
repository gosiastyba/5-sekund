class Player {
    constructor(name, score) {

        this.name = name;
        this.score = score;
        this.active = false;
    }

}

// var PlayersName = document.querySelector('#1').innerText;
// console.log(name);
// let Player1 = new Player(PlayersName, 1, 0);
// console.log(Player1);


$(() => {


    function insertData(questions) {

        const users = [];

        var timer;

        console.log(users);
        let currentPlayerIndex = 0;

        $('#firstInput').on("click", function () {
            $('.players').slideDown() &&
            $('.firstSlider').slideUp();

        });

        $('#secondInput').on("click", function () {


            $('.players').slideUp();
            $('.nameOfPlayers').slideDown();


            $('.formPlayers input').each((index, elem) => {
                const value = $(elem).val();

                const newUser = new Player(value, 0);

                users.push(newUser);


                const el = $('<p class="playersTable">').text(newUser.name + ' ma ' + newUser.score + ' puntków');
                $('.playersScore').append(el)

            });

        });

        x = 0;

        $('#startGame').on("click", function () {


            $('.playersTable').eq(currentPlayerIndex).addClass("activePlayer");


            $('.nameOfPlayers').slideUp() &&
            $('.questions').slideDown();

            let array = [];
            const random = Math.floor((Math.random()) * questions.length);
            $(array).push($(random));

            console.log(random);


            var span = $('<span class="question">', {class: "name"});
            span.text(questions[random].name)
            $('.questions').prepend(span);


            questions = questions.filter((question) => question.name !== questions[random].name);


            var counter = 6;
            var time = function () {
                var time2 = setInterval(function () {

                    counter = counter - 1;
                    $('#timer').html(counter);
                    if (counter === 0) {
                        clearInterval(time2);
                    }

                }, 1000);
            }
            setTimeout(time, 1000);

            $('#timer').html('-');



            // users[currentPlayerIndex].active = true;

            // const random = [1...questions.length]

            // users[currentPlayerIndex].score++;

        });
///////////////////////////////////////////////////////////////////////////////
        $('#yes').on('click', function () {
            users[currentPlayerIndex].score++;


            $('.playersTable').eq(currentPlayerIndex).text(users[currentPlayerIndex].name + ' ma ' + users[currentPlayerIndex].score + ' puntków');

            $("#yes").addClass('hidden');

            $('#no').addClass('hidden');

            clearInterval(timer);


        });
////////////////////////////////////////////////////////////////////////////////
        $('#no').on('click', function () {
            $("#yes").addClass('hidden');

            $('#no').addClass('hidden');

            clearInterval(timer);

        });
/////////////////////////////////////////////////////////////////////////////////////////////
        $("#nextQuestion").on("click", function () {
            clearInterval(timer);

            $('.playersTable').eq(currentPlayerIndex).removeClass("activePlayer");


            if (currentPlayerIndex === users.length - 1) {
                currentPlayerIndex = 0
            } else
                currentPlayerIndex++;
            $('.playersTable').eq(currentPlayerIndex).addClass("activePlayer");


            $('.questions').children().first().html('');

            const random = Math.floor((Math.random()) * questions.length);
            console.log(random);


            var span = $('<span class="question">', {class: "name"});
            span.text(questions[random].name);
            $('.questions').prepend(span);


            $("#yes").removeClass('hidden');

            $('#no').removeClass('hidden');

            $('#timer').html('-');

            var counter = 6;
            setTimeout(function () {
                timer = setInterval(function () {

                    counter = counter - 1;
                    $('#timer').html(counter);
                    if (counter === 0) {
                        clearInterval(timer);
                        $('#timer').html('Czas minal');
                    }

                }, 1000);
            }, 1000);



        });

        $('.numberOfPlayers').on("submit", function (el) {
            el.preventDefault();

            let quantity = $('.quantity').val();
            for (i = 0; i < quantity; i++) {
                $('.formPlayers').prepend($('<input class="name" type="text" placeholder="imię">'))

            }

        });


        $('.formPlayers').on("submit", function (f) {
            f.preventDefault();

            let players = $('.name');

            $.each(players, function (i, el) {
                $('.listOfPlayers').append($('<span >', {id: i, text: $(this).val()}))
            })
        });
    }


    $.ajax({
        url: 'http://localhost:3000/questions'
    }).done(function (data) {
        insertData(data);
        console.log(data);
    });


});

