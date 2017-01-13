
function reqresGetTest() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://reqres.in/api/products/3", true);

  xhr.onload = function() {
    console.log(xhr.responseText);
  };

  xhr.send();
}

function reqresPostTest() {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function(){
    console.log(this.responseText);
  });

  xhr.open("POST", "https://reqres.in/api/posts", true);

  xhr.send("title=Foo&body=Bar&userId=1");
}
