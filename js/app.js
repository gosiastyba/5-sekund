$(() => {


    $('.numberOfPlayers').on("submit", function (el) {

        el.preventDefault();
        let quantity = $('.quantity').val();
        for (i = 0; i < quantity; i++) {
            $('.players').append($('<input type="text" placeholder="imię">'))

        }
        let players = $('.players input');
        console.log(players)

        $.each(players, function (i, el) {
            console.log(el)
            $('.nameOfPlayers').append($('<span>', {text: $(this).val()}))

        })
    })


    // let players = $('.players input');
    // console.log(players)
    //
    // $.each(players, function (i, el) {
    //     console.log(el)
    //     $('.nameOfPlayers').append($('<span>', {text: el.val()}))
    //
    // })


});

