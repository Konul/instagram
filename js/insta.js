var new_img = $('.new_img').removeAttr("class");
new_img = $('.new-img');

var faLen = $('.invite-div').length;
//if ($('body').has('#carousel-none')==false) {

$(document).ready(function(){
    var config = {
    	margin: 15,
        autoWidth:true,
        items: Math.floor($('.container').width() / 90)
    };
   	var margin = {
   		margin: 15
   	}
    $('.owl-carousel').owlCarousel(config);
    $('.filter-div-size').on('click', function(event){
        var currentFilter = this.getAttribute('class').replace('filter-div-size', '');
        //console.log(new_img);
        new_img.removeAttr("class").addClass(currentFilter);
        $(this).siblings('h5').removeClass('txt-gray');
        var filt_name = $(this).parent().siblings('div').find('h5').addClass('txt-gray');
    });
    $('.fa-times').on('click', function(event) {
    	faLen = faLen-1;
		if (faLen <= 0) {
			$(this).parents('.show-hide').removeClass('.show-hide').addClass('none');
			$('.down').removeClass('bg-light-gray').addClass('bg-white');
		}
		$(this).parents('.owl-item').remove('.owl-item');
	});

    $('.follow').on('click', function(event) {
	    //var par = $(this).parents('.row').eq(0).parent();
	    //var index = $(this).parents('.row').eq(0).index();
	    var num = $(this).attr('data-num');
	    $('.follow').attr({'data-target':'.user-inf','data-toggle':'modal'});
	    var changebtn = $(this).removeClass('follow txt-hover-white bg-blue txt-white');
	    if ( num == 0 ) {
	       changebtn.addClass('b-gray following').children().text('').text('Following');

	    } else {//private account
	       changebtn.addClass('b-gray requested').children().text('').text('Requested');
	    } 
	});
        //resized.owl.carousel-
    });


var window_h =  window.innerHeight;
$('body').css( 'height', window_h+'px' );

$('.bold').click(function() {
	$(this).parents('.row').find('.f-s-24').removeClass('fas').addClass('fal');
	$(this).removeClass('fal').addClass('fas');
});


$(document).on('click', '.change-col', function() {
	if ($(this).hasClass('fas') == false) {
		$(this).removeClass('fal').addClass('fas');
		if ($(this).hasClass('fa-heart')) {
			$(this).css({
				'color': '#ed4956'
			})
		}
	}
	else{
		var iconCol= $(this).removeClass('fas').addClass('fal')
		//$(this).removeClass('fas').addClass('fal').css('color','#bfbfbf');
		if ($(this).hasClass('txt-black')==true) {
			iconCol.css('color','#000');
		}
		else{ iconCol.css('color','#bfbfbf'); }
	}
	
});


$('.down').click(function() {
	var myElement = $(this).parents('.container').find('.show-hide');
	if ( myElement.hasClass('none')==true ) {
		myElement.removeClass('none').addClass('block');
		$(this).removeClass('bg-white').addClass('bg-light-gray');
	}
	else{ 
		myElement.removeClass('block').addClass('none');
		$(this).removeClass('bg-light-gray').addClass('bg-white');
	}
		

});


$('.reply').click(function() {
	var name = $(this).parent().siblings('.name').text();
	$('.write-name').val('@'+name);
});


$(document).on('click','.follow-div',function() {
	$('.follow-div').addClass('none');
	var num = $(this).attr('data-num');
	if ( num == 0 ) {
		$('.follow-div').parents('.row').find('.user-check-div, .message-div').removeClass('none');
	} else {//private account
		$('.follow-div').parents('.row').find('.hidden-profil').removeClass('none');
	}
});


$(document).on('click','.follow', function() {
    var par = $(this).parents('.row').eq(0).parent();
    var index = $(this).parents('.row').eq(0).index();
    var num = $(this).attr('data-num');
    console.log(num);
    var changebtn = par.find('.row').eq(index).find('.follow').removeClass('follow txt-hover-white bg-blue txt-white');
    if ( num == 0 ) {
    	$('.follow').attr('data-target', '.user-inf');
       	changebtn.addClass('b-gray following').children().text('').text('Following');

    } else {//private account
       	changebtn.addClass('b-gray requested').children().text('').text('Requested');
    } 
});

$(document).on('click', '.requested', function () {
	console.log('click isleyir');
    var par = $(this).parents('.row').eq(0).parent();
    var index = $(this).parents('.row').eq(0).index();
    par.find('.row').eq(index).find('.requested').removeClass('b-gray requested').addClass('follow txt-hover-white bg-blue txt-white').children().text('').text('Follow');
});


$(document).on('click','.following',function() {
	var par = $(this).parents('.row').eq(0).parent();
	var index = $(this).parents('.row').eq(0).index();
	$('#unf-modal').find('.unf').click(function(){
		par.find('.row').eq(index).find('.following').removeClass('b-gray following').addClass('follow bg-blue txt-white').children().text('').text('Follow');
		$('#unf-modal').modal('hide');
        $('.follow').removeAttr('data-target','data-toggle'); 
	});	

});

$('.user-check').click(function () {
    var profname = $('#get-prof-name').text();
    console.log(profname);
    $('#set-prof-name').text("@"+profname );
	$('.unf').click(function () {
		$('.user-check').parents('.row').find('.user-check-div, .message-div').addClass('none');
		$('.follow-div').removeClass('none');
		$('#unf-modal').modal('hide');
	});
});


$('.hidden-profil').click(function() {
   $('.hidden-profil').addClass('none');
   $('.hidden-profil').parents('.row').find('.follow-div').removeClass('none');
})

$('#fa-th').click(function () {
	$('#th-div').removeClass('none');
	$('#user-div, #th-list-div').addClass('none');
});

$('#fa-th-list').click(function () {
	$('#th-list-div').removeClass('none');
	$('#th-div, #user-div').addClass('none');

});

$('#fa-user').click(function () {
	$('#user-div').removeClass('none');
	$('#th-div, #th-list-div').addClass('none');
});

var contWidth = $('.row').innerWidth();
var leftBlock = contWidth-30-60;
$('.following-left-block').css('width', leftBlock+'px');
console.log(contWidth);
console.log(leftBlock);

$('.about-following-btn').click(function () {
    $(this).addClass('b-bottom-black').removeClass('txt-gray');
    $(this).siblings().removeClass('b-bottom-black').addClass('txt-gray');
    $('.about-following').removeClass('none');
    $('.about-you').addClass('none');
});

$('.about-you-btn').click(function () {
    $(this).addClass('b-bottom-black').removeClass('txt-gray');
    $(this).siblings().removeClass('b-bottom-black').addClass('txt-gray');
    $('.about-you').removeClass('none');
    $('.about-following').addClass('none');
});

$('form .message-input').keydown(function (argument) {
    if ( $('.message-input').val() !== '') {
    	$('.message-send').removeClass('none');
    }
})

$('form .message-input').keyup(function (argument) {
    event.preventDefault();
    if ( $('.message-input').val() == '') {
        $('.message-send').addClass('none');
    }
    console.log($('.message-input').val());
});


$('#js-form-message').on('submit', function (e) {
    e.preventDefault();
    var text = $('.message-input').val();
   	if (text.length >= 1) {
   		 var msg = $('.direct-content .message.hidden').clone();
    	msg.removeClass('hidden');
    	msg.find('.delete-element').text(text);
    	$('.direct-content .message').last().after(msg);
    	$('.message-input').val("");
   	} else{

   	}
    
    /*var message = $('.message-input').val();
    $('.message-input').val("");
    var newElement = $('<div >',{
        class: 'message',
        text: message
    });


    console.log($('.direct-content ~ div'));
    $('.direct-content .delete-element').last().after(newElement);
    $('.direct-content .message').last().wrap('<div class="b-gray t-p-5 b-p-5 border-40 l-p-25 r-p-25 t-m-10 comment-txt-w r-0 delete-element"></div>');*/
    //newElement.before('<div class = "width-100 block"></div>');
});

$('#th-div').find('.col-md-4').on('click', function () {
	$('.show-img').find('#myrow').empty();
	var imgIndex = $(this).index();
	var parIndex = $(this).parent().index();
	var myIndex = 3*parIndex+imgIndex;
	var myrow = $('.list-div').eq(myIndex).clone();
	$('#myrow').append(myrow);
	//$('#th-list-div').find('img[src$='+img+']').css('background-color','red');
	//$("#th-list-div>img[src =" +img+ "]").css('background-color','red');
});
//"img[src$='logo.png']"


var num = 0;
$(document).on('click','.delete-element',function () {
	
	$('.trash-row').removeClass('none');
	//$('.direct-content:eq(2)').addClass('.t-m-15');
	if ($(this).hasClass('del-this')==false) {
		$(this).addClass('del-this bg-light-gray');
		num = num + 1;
	} else {
		$(this).removeClass('del-this bg-light-gray');
		num = num - 1;
	}
	$('.selected').text(num);
	if ($('.del-this').length < 1) { $('.trash-row').addClass('none') }

	if ($('.trash-row').hasClass('none')==false) {
	$('#direct').removeClass('t-m-70').addClass('t-m-85');
	}else{ console.log('else dusd')}
});




$('.fa-trash-alt').on('click',function () {
	$('.direct-content').find('.del-this').remove();
	$('.trash-row').addClass('none');
	$('#direct').removeClass('t-m-85').addClass('t-m-70');
	num = 0
});

$('.closeTrash').on('click',function () {
	$('.trash-row').addClass('none');
	$('#direct').removeClass('t-m-85').addClass('t-m-70');
	$('.delete-element').removeClass('del-this bg-light-gray');
	num = 0
})





