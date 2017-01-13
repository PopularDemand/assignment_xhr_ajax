
var $ = (function(){

  //complete (function) What arguments should this take?
  //error (function) What arguments should this take?
  //success (function) What arguments should this take?
  //method (string) Note: type is an alias for this
  //data (object)
  //headers (object)
  //url (string)
  //async (boolean)
  var ajax = function(options) {

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", options.success);
    xhr.addEventListener("error", options.error);
    xhr.onreadystatechange = function(event) {
      if (xhr.readyState === 4) {
        options.complete(event);
      }
    };
    
    xhr.setRequestHeader(options.headers[0], options.headers[1]);
    xhr.open(options.method, options.url, options.async);
    xhr.send(data);
  };

  return {
    ajax: ajax
  };

}());
