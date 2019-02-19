// coderbyte.com/api/test/data/json

$(document).ready(function() {

    $.ajax({
        type: 'GET',
        url: 'https://coderbyte.com/api/test/data/json',
        dataType: 'jsonp',
        jsonpCallback: 'func',
        success: function(data) {
          for (var i =0; i < data.people.length; i++) {
            $('#people').append('<li>' + data.people[i].name + '</li>');
          }
        },
        error: function() {
          console.log('error');
        }
    });
});  