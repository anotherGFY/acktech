function side(el1,el2,zt){
    var canGo = true;
    var al= $(el1);
    var main = $(el2);
    var on=zt;
    var abc=main.length;
    main.each(function(index, element) {
        if ($(window).scrollTop()>=$(this).offset().top-170) {
            al.removeClass(on);
            al.eq(index).addClass(on);
        }
    });
    al.each(function(index, element) {
        $(this).click(function() {
            canGo = false;
            al.removeClass(on);
            $(this).addClass(on);
            $("html,body").stop(true, true).animate({
                "scrollTop": main.eq(index).offset().top-$(".paddingbox").height()
            }, 500,function(){
                canGo=true;
            });
        });
    });
    $(window).scroll(function() {
        if(canGo){
            for(var index=abc-1;index>=0;index--){
                if ($(window).scrollTop()>=main.eq(index).offset().top) {
                    if(al.eq(index).hasClass(on))
                    {
                    }
                    else{
                        al.removeClass(on);
                        al.eq(index).addClass(on);
                    }
                    break;
                }
            }
        }
    });
}
$(document).ready(function() {

        $(document).bind("click",function(e){
            var target = $(e.target);
            if(target.closest('.app-ban-pop b').length == 0){
                $('.app-ban-pop b img').hide();
            }
        });
    $(document).on('click','.app-ban-pop b',function(){
        var el=$('.app-ban-pop b img');
       el.show();
    });



        $(document).on('click','.menubtn',function(){
            var el=$('.menu');
            var el2=$('.menu-list');
            var el3=$('.searchtip-ph');
            var el4=$('.menu-list-oc');
            if($(this).hasClass('o')){
                $(this).removeClass('o');
                el.stop().slideUp();
                el2.slideDown();
                el3.hide();
                el4.hide();
                $('html').removeClass('hidebody');
            }else{
                $(this).addClass('o');
                el.stop().slideDown();
                $('html').addClass('hidebody');
            }
        });
        $(document).on('click','.menu-list-oc',function(){
            var el=$('.menu-list');
            var el3=$('.searchtip');
            if(el.is(':hidden')){
                $(this).fadeOut();
                el.stop().slideDown();
                el3.stop().fadeOut();
            }else{
            }
        });
        $(document).on('click','.search-txt-ph',function(){
            var el=$('.menu-list-oc');
            var el2=$('.menu-list');
            var el3=$('.searchtip-ph');
            el3.stop().fadeIn();
            if(!el2.is(':hidden')){
                el.show();
                el2.stop().slideUp(500);

                $("html,body").delay(600).stop(true, true).animate({
                    "scrollTop": 0
                }, 0);
            }
        });


        $(document).on('focus','.search-txt-pc',function(){
            var el3=$('.searchtip-pc');
            el3.stop().fadeIn();
        });
        $(document).on('blur','.search-txt-pc',function(){
            var el3=$('.searchtip-pc');
            el3.stop().fadeOut();
        });


        $(document).on('click','.searchbtn',function(){
            var el=$('.searchbox');
            var el2=$('.nav');
           if($(this).hasClass('o')){
               $(this).removeClass('o');
               el.stop().animate({'top':'-80px'},300);
               el2.stop().fadeIn(300);
           }else{
               $(this).addClass('o');
               el.stop().animate({'top':'0'},300);
               el2.stop().fadeOut(300);
           }
        });


    $(document).on('click','.menuwt h4 a',function(){
      if($(this).parents('li').hasClass('show')){
          $(this).parents('li').removeClass('show');
      }else{
          $('.menuwt li').removeClass('show');
          $(this).parents('li').addClass('show');
      }
    });



    /*$(document).on('click','.wth li h5',function(){
        if($(this).parents('li').hasClass('show')){
            $(this).parents('li').removeClass('show');
        }else{
            $('.wth li').removeClass('show');
            $(this).parents('li').addClass('show');

            var id = $(this).attr('init');
            $.post("{:U('Ajax/clickSum')}", { 'id': id },function(res){
                 $(this).parents('li').children('.z3').html(res);
            },'json');
        }
    });*/
    



        $('.nav li').hover(function(){
            $(this).find('.sub').stop().slideDown(500);
        },function(){
            $(this).find('.sub').stop().slideUp(250);
        });

        jQuery.divselect = function(divselectid,inputselectid) {
            var inputselect = $(inputselectid);
            $(divselectid+" cite").click(function(){
                var ul = $(divselectid+" ul");
                if(ul.css("display")=="none"){
                    ul.slideDown("fast");
                }else{
                    ul.slideUp("fast");
                }
            });
            $(divselectid+" ul li a").click(function(){
                var txt = $(this).text();
                $(divselectid+" cite").html(txt);
                var value = $(this).attr("selectid");
                inputselect.val(value);
                $(divselectid+" ul").hide();
            });
            $(document).bind("click",function(e){
                var target = $(e.target);
                if(target.closest(divselectid).length == 0){
                    $(divselectid+" ul").hide();
                }
            })
        };

        $('.pjs-btns .b').click(function(){
            var el=$('.proewm');
           if(!el.hasClass('show')){
               el.addClass('show');
           }else{
               el.removeClass('show');
           }
        });




    $(document).on('click','.webmap dt',function(){
        var el=$(this).parent('.webmap');
        var el2=$('.webmap');
        var el3=$(this).find('span');
        var el4=$('.webmap dt').find('span');
        if(el.hasClass('on')){
            el.removeClass('on');
            el3.html('+')
        }else{
           el2.removeClass('on');
           el.addClass('on');
           el4.html('+');
           el3.html('-')
        }
    });


    $('.news-msg-sharebtn').hover(function(){
        $(this).prev('.share007').addClass('show');
        $(this).removeClass('show');
    },function(){
    });

    $('.share007').hover(function(){
    },function(){
        $(this).removeClass('show');
        $(this).next('.news-msg-sharebtn').addClass('show');
    });

    



});