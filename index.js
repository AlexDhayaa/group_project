$(buttonTest).click(function test(){

  var size = getRadioVal(document.getElementById("quiz"), 'size');
  var pay = getRadioVal(document.getElementById("quiz"), 'pay');
  var type = getRadioVal(document.getElementById("quiz"), 'type');

  if (size=='samsung'){
    alert("Use a Samsung");
  } else {
    alert("Use a Sony");
  }
});

function getRadioVal(form, name) {
  var val;
      // get list of radio buttons with specified name
  var radios = form.elements[name];

  // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val;
}
