$(document).ready(function(){
    var btn_play = $(".btn-play");
    btn_play.click(function(){
        $(this).hide();
        $(".video-ytb").show();
        $(".btn-hidden").show();
    });
    $(".btn-hidden").click(function(){
        $(this).hide();
        $(".video-ytb").hide();
        $(btn_play).show();
    });
});