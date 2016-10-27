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
            console.log("Item sku:", data.sku);
            console.log("Item description:", data.description);
            console.log("Item price:", data.price);


            var $orderSummary = $('#orderSummaryBody');
            var $lineItem = $('<tr>');
            var $sku = $('<td>').html(data.sku).appendTo($lineItem);
            var $prodName = $('<td>').html(data.productName).appendTo($lineItem);
            var $price = $('<td>').html(data.price).appendTo($lineItem);
            var $deleteBtn =$('<button>').addClass("btn btn-danger btn-xs pull-right")
                                         // .on('click', deleteItem(data.sku))
                                         .append($('<span>').addClass("glyphicon glyphicon-trash"))
                                         .appendTo($lineItem);

            $lineItem.appendTo($orderSummary);
        })
    })
});