$(document).ready(function(){
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
    
});