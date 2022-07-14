$(document).ready(function () {
    $('a[name=modal]').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var backHeight = $(document).height();
        var backWidth = $(window).width();
        $('#back').css({ 'width': backWidth, 'height': backHeight });
        $('#back').fadeIn(300);
        $('#back').fadeTo(300, 0.3);
        var winH = $(window).height();
        var winW = $(window).width();
        $(id).css('top', winH / 2 - $(id).height() / 2);
        $(id).css('left', winW / 2 - $(id).width() / 2);
        $(id).fadeIn(300);
    });
    $('.window .close').click(function (e) {
        e.preventDefault();
        $('#back, .window').hide();
    });
    $('#back').click(function () {
        $(this).hide();
        $('.window').hide();
    });
});


let inputs = document.querySelectorAll('.input__file');
Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;

    input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
            countFiles = this.files.length;

        if (countFiles)
            label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
            label.querySelector('.input__file-button-text').innerText = labelVal;
    });
});


date2.max = new Date().toLocaleDateString('en-ca')
date1.max = new Date().toLocaleDateString('en-ca')
