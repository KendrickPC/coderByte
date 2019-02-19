// coderbyte.com/api/test/data/json

$(document).ready(function() {

    $.ajax({
        type: 'GET',
        url: 'https://coderbyte.com/api/test/data/json',
        dataType: 'jsonp',
        jsonpCallback: 'func',
        success: function(data) {
          console.log(data);
        },
        error: function() {
          console.log('error');
        }
    });
});  