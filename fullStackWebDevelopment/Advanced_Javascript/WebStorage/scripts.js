$(document).ready(function() {

  $('#field1').on('keyup', function() {  
    sessionStorage.setItem('field1', $('#field1').val());
  });

  $('#field2').on('keyup', function() {  
  sessionStorage.setItem('field2', $('#field2').val());
  });

  if(sessionStorage.getItem('field1')) {
    $('#field1').val(sessionStorage.getItem('field1'));
  }

  if(sessionStorage.getItem('field2')) {
    $('#field2').val(sessionStorage.getItem('field2'));
  }

  console.log(sessionStorage.field1, sessionStorage.field2)
});
