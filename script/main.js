jQuery(document).ready(function ($) {
 
  var App = App || {};

  //---MAIN----
  $(function () {
      App.Site.getplugin();
  });

  //--All site
    App.Site = function(){


        var getplugin = function(){

            // $("#modal-sucess").fancybox({}).trigger('click'); 
          $('#provn-1').on('click', function(e) {
                  $.fancybox.close();
          });



        }

        return{
            getplugin:getplugin,
        };

    }(); 

  //--End All site


    
   
});    



