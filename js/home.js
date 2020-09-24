$('.menu .dropdown-toggle').click(function (e) { 
    e.stopPropagation();
    $(this).next().toggle(400);
    $(this).parent().siblings().find('.dropdown-toggle').next().slideUp(400);
});
$('.dropdown-menu').click(function(e) {
	e.stopPropagation();
});
$('.product-dropdown-menu').click(function(e) {
	e.stopPropagation();
});
$(document).click(function (e) { 
    e.stopPropagation();
    $('.dropdown-menu').slideUp(400);
    $('.product-dropdown-menu').slideUp(400);
});