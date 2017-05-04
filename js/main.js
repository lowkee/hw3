function displayVals() {
  var checkBoxValues = $( "#checkBox" ).val();


//$( "input[type=checkbox][name=bar]:checked" ).val();
//
//$( "input[type=radio][name=baz]:checked" ).val();
  
  /* globals $ */

 $('select').on('input change', selectFunction);
 
function selectFunction() {
var element = $(this);
var row = element.closest("tr");
 
 
 function textareaFunction() {
  var element = $(this);
  var row = element.closest("tr");
 
  } 