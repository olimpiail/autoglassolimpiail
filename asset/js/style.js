var $form = $('form#contactForm'),
    url = 'https://script.google.com/macros/s/AKfycbx38GNoXKBUE5uXRUxcbeGJlFRQ3y_hfgT30vD2rTdIzXP_iqhY/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})