$(document).ready(function product() {
    function idProduct(id) {
        id.click(function (){
            if (id.hasClass('product_selected')) {
                id.removeClass('product_selected');
                id.children('.ponderosity').removeClass('ponderosity_selected');
                id.children('.product-card').html('Чего сидишь? Порадуй котэ, <a class="buy">купи</a>.');
            } else if(id.hasClass('product_disabled')){
                id.children('.ponderosity').addClass('ponderosity_disabled');
                id.children('.viands').addClass('viands_disabled');
                id.children('.product-description').find('.nurse').addClass('nurse_disabled');
                id.children('.product-description').find('.quantity').addClass('quantity_disabled');
                id.children('.product-description').find('.present').addClass('present_disabled');
                id.children('.product-description').find('.additionally').addClass('additionally_disabled');
                id.children('.product-card').css('color', '#ffff66');
                if (id.attr('id') == 'fua-gra') {
                    id.children('.product-card').text('Печалька, с фуа-гра закончился.');
                } else if (id.attr('id') == 'fish') {
                    id.children('.product-card').text('Печалька, с рыбой закончился.');
                } else if (id.attr('id') == 'chickens') {
                    id.children('.product-card').text('Печалька, с курой закончился.');
                }
            } else {
                id.addClass('product_selected');
                id.children('.ponderosity').addClass('ponderosity_selected');
                if (id.attr('id') == 'fua-gra') {
                    id.children('.product-card').text('Печень утки разварная с артишоками.');
                } else if (id.attr('id') == 'fish') {
                    id.children('.product-card').text('Головы щучьи с чесноком да свежайшая сёмгушка.');
                } else if (id.attr('id') == 'chickens') {
                    id.children('.product-card').text('Филе из цыплят с трюфелями в бульоне.');
                }
            }
        });
        if (id.hasClass('product_disabled')) {
            id.children('.ponderosity').addClass('ponderosity_disabled');
            id.children('.viands').addClass('viands_disabled');
            id.children('.product-description').find('.nurse').addClass('nurse_disabled');
            id.children('.product-description').find('.quantity').addClass('quantity_disabled');
            id.children('.product-description').find('.present').addClass('present_disabled');
            id.children('.product-description').find('.additionally').addClass('additionally_disabled');
            id.children('.product-card').css('color', '#ffff66');
            if (id.attr('id') == 'fua-gra') {
                id.children('.product-card').text('Печалька, с фуа-гра закончился.');
            } else if (id.attr('id') == 'fish') {
                id.children('.product-card').text('Печалька, с рыбой закончился.');
            } else if (id.attr('id') == 'chickens') {
                id.children('.product-card').text('Печалька, с курой закончился.');
            }
        }
        
    }
    
    idProduct($("#fua-gra"));
    idProduct($("#fish"));
    idProduct($("#chickens"));
});



import $ from 'jquery';
export default 'product';