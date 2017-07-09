(function () {
    setTimeout(function () {
        var x = '';
        $.post("https://gitnpm.herokuapp.com/format", { data: x },
            function (data) {
                $(".result").html(data);
            });
    }, 300000);
})();