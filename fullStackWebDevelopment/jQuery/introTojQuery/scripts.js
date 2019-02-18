$(document).ready(function() {

    var limit = 10;
    var counter = 0;
    var array = [];
    // Code goes here.
    
    $('#container').on('click', callback);

    function callback() {
      if (counter < limit) {
        $(this).append('<li>Z</li>');
        array.push('<li>Z</li>');
        counter++;
      }   
    }
    $('#remove').on('click', function() {
      array.pop();
      $('#container').html(array.join(''))
      counter--;
    });

});