jQuery(document).ready(function ($) {

  // move the help text from below the input field to directly below the field label

  $('.form-item .description').each(function () {  // description is the help text
    var desc = $(this);
    var label = desc.siblings('label:first');
     if (label.length) {
       desc.insertAfter(label);
     }
  })
  // the help text is tangled up in the text format stuff on a filtered text field
  $('.text-format-wrapper .description').each(function () {
    var desc = $(this);
    var label = desc.siblings('.form-item').find('label:first');
     if (label.length) {
        desc.insertAfter(label);
     }
  }) 
});