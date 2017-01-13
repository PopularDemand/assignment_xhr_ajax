
var $ = (function(){

  //complete (function) What arguments should this take?
  //data (object)
  //error (function) What arguments should this take?
  //headers (object)
  //method (string) Note: type is an alias for this
  //success (function) What arguments should this take?
  //url (string)
  //async (boolean)
  var ajax = function(options) {

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", options.complete);
    xhr.addEventListener("error", //TODO);

  };

  return {
    ajax: ajax
  };

}());
