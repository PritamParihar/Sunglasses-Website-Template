$(document).ready(function() {
    $("#registration-link").click(function() {
      $("#registration-form").show();
      $("#login-form").hide();
    });
  
    $("#login-link").click(function() {
      $("#login-form").show();
      $("#registration-form").hide();
    });
  });
  