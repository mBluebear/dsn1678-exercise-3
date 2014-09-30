var salesDetailsRight = $('.sales__details__right');
var salesDetailslLeft = $('.sales__details__left');
var salesRight = $('.sales__right');
var salesLeft = $('.sales__left');

/*
Function are reusable pieces of code
They are basically code store inside variables
 */

var buttonClickHandler = function () {
    var isActive = salesDetailsRight.attr('data-state');

    if (isActive =='active') {
        salesDetailsRight.attr('data-state','inactive');

    } else {
        salesDetailsRight.attr('data-state','active');
    }


};

salesRight.on('click', buttonClickHandler);


var buttonClickHandler = function () {
    var isActive = salesDetailsLeft.attr('data-state');

    if (isActive =='active') {
        salesDetailsLeft.attr('data-state','inactive');

    } else {
        salesDetailsLeft.attr('data-state','active');
    }


};

salesLeft.on('click', buttonClickHandler);
