$(() => {


    $('.numberOfPlayers').on("submit", function (el) {

        el.preventDefault();
        let quantity = $('.quantity').val();
        for (i = 0; i < quantity; i++) {
            $('.formPlayers').append($('<input class="name" type="text" placeholder="imię">'))


        }

        // let players = $('.players input');
        // console.log(players);
        //
        // $.each(players, function (i, el) {
        //     console.log(el)
        //     $('.nameOfPlayers').append($('<span>', {text: $(this).val()}))
        //
        // })
    });


    $('.formPlayers').on("submit", function () {
        let players = $('.formPlayers input');


        $.each(players, function (i, el) {
            alert( i + ": " + $(this).val());
        })
    });


});

