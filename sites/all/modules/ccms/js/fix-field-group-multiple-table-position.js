jQuery(document).ready(function ($) {

  // correct field mis-positioning. See https://drupal.org/node/1650132.
  
  $('#fgm_node_module_version_form_group_assessment_methods-add-more-wrapper').insertAfter('#edit-field-mod-assess-strategy');
  $('#fgm_node_module_version_form_group_clo-add-more-wrapper').insertAfter('#form-clo-title');
  $('#fgm_node_module_version_form_group_named_awards-add-more-wrapper').insertAfter('#edit-field-date-of-production-of-mif');

});