(function($){
    'use strict';
    
    var shown = false,
    
    hover = false,
    
    width = {
      hided: '0',
      shown: '0'  
    },
    
    hide = function(){
        $(".smenu-menu .smenu-content").hide();
        
        $(".smenu-menu a").animate({
            'min-width': width.hided
        }, 250, function(){
            shown = false;
        });
    },
    
    show = function(){
        $(".smenu-menu .smenu-content").show();
        
        $(".smenu-menu a").animate({
            'min-width': width.shown
        }, 50, function(){
           shown = true;
        });
    },

    toggle = function(){
        if(shown){
            hide();
        } else {
            show();
        }
    },

    init = function(){
        width.hided = $(".smenu-menu .smenu-icon").css('width');
        width.shown = $(".smenu-menu a").css("min-width");

        hide();

        $(".smenu-menu a").mouseover(function(){
            hover = true;

            if(!shown){
                show();   
            }
        });
        
        $(".smenu-menu a").mouseout(function(){
            hover = false;
            
            setTimeout(function(){
                if(!hover && shown){
                    hide();   
                }
            }, 25);
        });
    };

    $(document).ready(init);

    $.fn.simplemenu = {
        toggle: toggle,
        hide: hide,
        show: show
    };
}(jQuery));
