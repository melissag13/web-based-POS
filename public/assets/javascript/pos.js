/**
 * Created by Kristi Heredia on 10/26/2016.
 */

/*
 Array to hold the line item objects so we have them to total
 and to write to receipt, global so we can access it as needed
 */
var orderArray = [];

// This variable is to keep track of the largest the array
// has been so I can keep my object index values from repeating
var maxIndex = 0;

$(document).on('click', '.glyphicon-trash', function remove() {
    // Get the item index value from the data-index attribute of the <tr>
    var $itemIndex = $(this).closest("tr").data("index");
    // Now get the array index that goes with that item index
    var myIndex = getIndex($itemIndex);
    // If it wasn't found, just return
    if (myIndex == -1) return;

    var itemPrice = orderArray[myIndex].itemData.price;
    console.log("itemPrice:", itemPrice);
    // Use this to remove the array item at that index
    orderArray.splice(myIndex, 1);
    // Remove the row
    $(this).closest("tr").remove();
    // Update the running total
    runningTotal(itemPrice, '-');
});

function getIndex(itemIndex) {
    console.log("orderArray.length:", orderArray.length);
    console.log("itemIndex:", itemIndex);

    for (var i = 0; i < orderArray.length; i++) {
        console.log("i:", i);
        console.log("orderArray[" + i + "].index: " +  orderArray[i].index);
        if(orderArray[i].index == itemIndex) {

            return i;
        }
    }
    // if nothing found, return -1
    return -1;
}

$(function () {
    $(document).on('submit', 'form', function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);

        $.post("/pos/add", data, function (data, success) {
            console.log("data:", data);
            if (data.err) {
                // If the data json that is returned has an err property,
                // no record was found, so write the error to the screen
                console.log("err:", data.err);
                $("#itemErrMsg").html(data.err);
            }
            // Otherwise, we found a record in the database and retrieved
            // the row
            else {
                // Push the product to the array, this should give us an array
                // of json objects
                var arrLength = orderArray.length;
                maxIndex++; //Keep track of the maxIndex value we have had for deleting purposes
                orderArray.push({"index": maxIndex, "itemData": data});
                //Clear error message if there was one
                $("#itemErrMsg").empty();
                // build the order summary display
                var $orderSummary = $('#orderSummaryBody');
                var $lineItem = $('<tr>').attr('data-index', maxIndex);
                var $sku = $('<td>').html(data.sku).appendTo($lineItem);
                var $prodName = $('<td>').html(data.productName).appendTo($lineItem);
                var $price = $('<td>').html(data.price).appendTo($lineItem);
                var $deleteBtn = $('<button>').addClass("btn btn-danger btn-xs pull-right")
                    .append($('<span>').addClass("glyphicon glyphicon-trash"))
                    .appendTo($lineItem);
                // Write line item to order summary
                $lineItem.appendTo($orderSummary);
                // Update running total
                runningTotal(data.price, '+');
            }
        })
    })
});

// Function to calculate the total, it will be called each time an item is added
// and will update the displayed total
function runningTotal(itemPrice, operator) {
    var temp = parseFloat($('#runningTotal').html());
    if (operator == '+') {
        temp += itemPrice;
    } else if (operator == '-') {
        temp -= itemPrice;
    }
    $('#runningTotal').html(temp.toFixed(2));
}