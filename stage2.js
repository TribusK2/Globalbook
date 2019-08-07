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
    var chating = function(){
        var inputChat = $('#inputChat').val();
        $('#inputChat').val('');
        var kamilaWritingDeley = 3000;
        var kamilaAnswerDeley = 3000;
        var kamilaText = 'Cześć :)';
        var kamilaTime = '13:18';
        $('#slowText').html(inputChat);
        $('#slowChating').fadeIn(100, function(){
            $('#kamilaChating').delay(kamilaWritingDeley).fadeIn(200, function(){
                $('.show').delay(kamilaAnswerDeley).fadeOut(100, function(){
                    $('#kamilaText').html(kamilaText);
                    $('#kamilaTime').html(kamilaTime);
                    $('.show').fadeIn(100);
                });  
            });
        });
    };
    $('#inputChat').on('keyup', function (e) {
        if (e.keyCode == 13) {
            chating();
        };
    });
    // chatting end
});