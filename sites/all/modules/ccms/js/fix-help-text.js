jQuery(document).ready(function ($) {

  // move the help text from below the input field to directly below the field label

  $('.form-item .help-block').each(function () {
    var help = $(this);
    var label = help.parent().parent().children('.control-label');
     if (label.length) {
       help.insertAfter(label);
     }
  })
  // the help text is tangled up in the text format stuff on a filtered text field
  $('.text-format-wrapper .description').each(function () {
    var help = $(this);
    var label = help.siblings('.form-item').find('label:first');
     if (label.length) {
        help.insertAfter(label);
     }
  }) 
});