"use strict";


$("form").attr('autocomplete', 'off');

$("#dialog-form").dialog({
modal: true,
buttons: {
  "Log in": function() {
    // $(this).dialog("close");
    $( this ).toggle("explose");

    console.log('close')
  }
}
});

$( "#name" ).keypress(function() {
  console.log('input')
  $( "#dialog-form" ).effect("bounce", {times:3, distance: 10, times: 3}, 200);
  $( "body" ).effect('highlight',{color: 'pink'}, 200);

});
