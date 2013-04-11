jQuery(document).ready(function ($) {

  // make inline field labels the same height as the field items if the
  // field items container is bigger

  $('.field-label-inline .field-label').each(function(){
            
     var itemsHeight = 0;      
     fieldItemsHeight = $(this).next().height();
      
     if ( fieldItemsHeight > $(this).height() )            
       $(this).height(fieldItemsHeight);
             
    });
});