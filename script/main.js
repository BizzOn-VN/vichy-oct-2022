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

          $('#the-le').on('click', function(e) {
                  $.fancybox.close();
          });
          $('.ui.checkbox').checkbox();


        }

        return{
            getplugin:getplugin,
        };

    }(); 

  //--End All site


    
   
});    



