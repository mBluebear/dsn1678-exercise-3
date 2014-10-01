var info1 = $('.info1');
var info1_detail= $('.info1_detail');

var buttonClickHandler = function () {
	var isActive = info1_detail.attr('data-state');
	
	if (isActive == 'active'){
		info1_detail.attr('data-state', 'inactive');
	} else {
		info1_detail.attr('data-state', 'active');
	}
	
};


info1.on('click', buttonClickHandler);


var info2 = $('.info2');
var info2_detail= $('.info2_detail');

var buttonClickHandler = function () {
	var isActive = info2_detail.attr('data-state');
	
	if (isActive == 'active'){
		info2_detail.attr('data-state', 'inactive');
	} else {
		info2_detail.attr('data-state', 'active');
	}
	
};


info2.on('click', buttonClickHandler);
