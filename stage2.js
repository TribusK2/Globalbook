$(document).ready(function(){
    // load gallery
    var loadGallery = function(){
        $("#profilePage").fadeOut(200, function(){
            $("#loaderPage").fadeIn(200, function(){
                $("#loaderPage").delay(800).fadeOut(200, function(){
                    $("#galleryPage").fadeIn(200)
                });
            });
        });
    };
    $('#inputText').on('keyup', function (e) {
        if (e.keyCode == 13) {
            loadGallery();
        };
    });
    $('#inputBtn').click(loadGallery);
    // load gallery end

    // open chat
    var openChat = function(){
        $('#chatWindow').css('bottom', '5%');
    };
    $('.picMessage').click(openChat);
    // open chat end

    // chatting
    var slowChating = function(){
        var inputChat = $('#inputChat').val();
        $('#inputChat').val('');
        $('#slowText').html(inputChat);
        $('#slowChating').fadeIn(100); 
    };
    $('#inputChat').on('keyup', function (e) {
        if (e.keyCode == 13) {
            slowChating();
        };
    });

    var kamilaChating = function(){
        $('#kamilaChating').fadeIn(200);
    };
    var kamilaAnswer = function(){
        $('#kamilaChating').fadeOut(100, function(){
            var kamilaText = 'Cześć :)';
            var kamilaTime = '22:30';
            $('#kamilaText').html(kamilaText);
            $('#kamilaTime').html(kamilaTime);
            $('#kamilaChating').fadeIn(100);
        });
    };
    $(window).on('keyup', function (e) {
        if (e.keyCode == 38) {
            kamilaChating();
        };
        if (e.keyCode == 39) {
            kamilaAnswer();
        };
    });
    // chatting end

    // close chat
    var closeChat = function(){
        $('#chatWindow').css('bottom', '-55%');
        $('#slowChating').fadeOut(200);
        $('#kamilaChating').fadeOut(200);
        $('#slowText').html('');
        $('#kamilaText').html('...');
        $('#kamilaTime').html('');
    };
    $('.chatClose').click(closeChat);
    // close chat end
});