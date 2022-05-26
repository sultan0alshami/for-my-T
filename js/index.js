$('.no').click(function() {
    var docHeight = $(".love-me").height(),
        docWidth = $(".love-me").width(),
        $div = $('.no'),
        divWidth = $div.width(),
        divHeight = $div.height(),
        heightMax = docHeight - divHeight,
        widthMax = docWidth - divWidth;

    $div.css({
        left: Math.floor( Math.random() * widthMax ),
        top: Math.floor( Math.random() * heightMax )
    });
});