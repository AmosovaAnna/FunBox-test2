$(document).ready(function mouse(){
document.getElementById ("fua-gra").addEventListener ("mouseout", function mouseoutFuagra() {
        if ($("#fua-gra").hasClass('product_selected')) {
            $("#fua-gra").children('.ponderosity_selected').addClass('ponderosity_selected-hover');
            $("#fua-gra").addClass('product_selected-hover');
            $("#fua-gra").children('.viands-hidden').css('display', 'block');
            $("#fua-gra").children('.viands').css('display', 'none');
        } else {
            $("#fua-gra").children('.ponderosity').addClass('ponderosity-hover');
            $("#fua-gra").addClass('product-hover');
        }
    });
document.getElementById ("fua-gra").addEventListener ("mouseover", function mouseoverFuagra() {
        if ($("#fua-gra").hasClass('product_selected')) {
            $("#fua-gra").children('.ponderosity_selected').removeClass('ponderosity_selected-hover');
            $("#fua-gra").removeClass('product_selected-hover');
            $("#fua-gra").children('.viands-hidden').css('display', 'none');
            $("#fua-gra").children('.viands').css('display', 'block');
        } else {
            $("#fua-gra").children('.ponderosity').removeClass('ponderosity-hover');
            $("#fua-gra").removeClass('product-hover');
        }
    });
document.getElementById ("fish").addEventListener ("mouseout", function mouseoutFish() {
        if ($("#fish").hasClass('product_selected')) {
            $("#fish").children('.ponderosity_selected').addClass('ponderosity_selected-hover');
            $("#fish").addClass('product_selected-hover');
            $("#fish").children('.viands-hidden').css('display', 'block');
            $("#fish").children('.viands').css('display', 'none');
        } else {
            $("#fish").children('.ponderosity').addClass('ponderosity-hover');
            $("#fish").addClass('product-hover');
        }
    });
document.getElementById ("fish").addEventListener ("mouseover", function mouseoverFish() {
        if ($("#fish").hasClass('product_selected')) {
            $("#fish").children('.ponderosity_selected').removeClass('ponderosity_selected-hover');
            $("#fish").removeClass('product_selected-hover');
            $("#fish").children('.viands-hidden').css('display', 'none');
            $("#fish").children('.viands').css('display', 'block');
        } else {
            $("#fish").children('.ponderosity').removeClass('ponderosity-hover');
            $("#fish").removeClass('product-hover');
        }
    });
document.getElementById ("chickens").addEventListener ("mouseout", function mouseoutChickens() {
        if ($("#chickens").hasClass('product_selected')) {
            $("#chickens").children('.ponderosity_selected').addClass('ponderosity_selected-hover');
            $("#chickens").addClass('product_selected-hover');
            $("#chickens").children('.viands-hidden').css('display', 'block');
            $("#chickens").children('.viands').css('display', 'none');
        } else {
            $("#chickens").children('.ponderosity').addClass('ponderosity-hover');
            $("#chickens").addClass('product-hover');
        }
    });
document.getElementById ("chickens").addEventListener ("mouseover", function mouseoverChickens() {
        if ($("#chickens").hasClass('product_selected')) {
            $("#chickens").children('.ponderosity_selected').removeClass('ponderosity_selected-hover');
            $("#chickens").removeClass('product_selected-hover');
            $("#chickens").children('.viands-hidden').css('display', 'none');
            $("#chickens").children('.viands').css('display', 'block');
        } else {
            $("#chickens").children('.ponderosity').removeClass('ponderosity-hover');
            $("#chickens").removeClass('product-hover');
        }
    });
});

import $ from 'jquery';
export default 'mouse';