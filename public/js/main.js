fun = {}; // global variable

function include(file) {
  var script = document.createElement("script");
  script.src = file;
  script.type = "text/javascript";
  script.defer = true;

  document.getElementsByTagName("head").item(0).appendChild(script);
}

/* Include Many js files */
// include('/code/js/bookIndex.js')

include("/js/script.js");
//include('/js/loginValidator.js')
