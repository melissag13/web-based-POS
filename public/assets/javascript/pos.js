/**
 * Created by Kristi Heredia on 10/26/2016.
 */

$(function () {
    $(document).on('submit', 'form', function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);

        $.post("/pos/add", data, function (data, success) {
            console.log("success:", success);
            console.log("data:", data);
        })
    })
});