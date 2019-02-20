$(document).ready(function() {

  $('#field1').on('keyup', function() {  
    sessionStorage.setItem('field1', $('#field1').val());
  });

  $('#field2').on('keyup', function() {  
  sessionStorage.setItem('field2', $('#field2').val());
  });

  console.log(sessionStorage.field1, sessionStorage.field2)
});
