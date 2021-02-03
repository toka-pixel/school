$(function(){
  
    function third(){
        $('.info-list li').on('click',function (){

            $(this).addClass('selected').siblings('li').removeClass('selected');
          
            window.console.log($(this).data('class'));
          
            $('.info-content div').hide();
          
            $('.'+$(this).data('class')).fadeIn();
            
              });
    
              console.log('llll');
    }

});