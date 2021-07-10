$(function() {
    $('.booklink').on('click', function(e) {
        e.preventDefault();
        window.open($(this).attr("href"), "_blank");
    });
});