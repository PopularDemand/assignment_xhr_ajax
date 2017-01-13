
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
      if (xhr.readyState === 4 && options.complete) {
        options.complete(event);
      }
    };

    if (options.headers) {
      xhr.setRequestHeader(options.headers[0], options.headers[1]);
    }

    xhr.open(options.method, options.url, options.async);

    xhr.send(options.data);
  };

  return {
    ajax: ajax
  };

}());

/*
 * TESTS
*/
function ajaxGetTest() {

  var success = function() {
    console.log("GET", this.responseText);
  };

  $.ajax({ url: "https://reqres.in/api/products/3",
    method: "GET",
    success: success,
    async: true
  });
}

function ajaxPostTest() {

  var success = function() {
    console.log("POST", this.responseText);
  };

  $.ajax({ url: "https://reqres.in/api/posts",
    method: "POST",
    success: success,
    async: true,
    data: "title=Foo&body=Bar&userId=1"
  });
}
