window.onload = function() {
  var $input = $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 120,
    today: '',
    min: new Date(1900,1,1),
    max: true
  });

  var firstName = document.getElementById('firstName');
  var lastNameP = document.getElementById('lastNameP');
  var lastNameM = document.getElementById('lastNameM');
  var picker = $input.pickadate('picker');
  var pickerModal = document.getElementsByClassName('picker__holder');
  var curp = document.getElementById('curp');
  curpForm.addEventListener('keyup', copy);
  curpForm.addEventListener('click', copy);
  curpForm.addEventListener('submit', generateObject);
  pickerModal[0].addEventListener('click', copy);
  var badWords = ['culo', 'loco', 'wuey', 'roba', 'pene'];
  var grosero = false;
  var pregnant = "no"
  var year="", month="", date="";
  var gender="";
  var state = document.getElementById("state");
  var stateText = "";
  var curpTextArea = document.getElementById("curpTextArea");
  var curpObject;

  //Curp character values
  var c1="?", c2="?", c3="?", c4="?", c5="??", c6="??", c7="??", c8="?", c9="??", c10="?", c11="?", c12="?";
  var curpString;

  //event listener for the gender checkbox
  $("input[name='gender']").on('click', function(e) {
      if (e.currentTarget.id=="female"){
         $('#pregnant').prop("disabled", false);
         gender="female"
      }
      else{
        $('#pregnant').prop("disabled", true);
        $('#pregnant').prop("checked", false);
        gender="male"
      }
  });

  var states = [
    {text: "Aguascalientes", value: "AS"},
    {text: "Baja California", value: "BC"},
    {text: "Baja California Sur", value: "BS"},
    {text: "Campeche", value: "CC"},
    {text: "Chiapas", value: "CS"},
    {text: "Chihuahua", value: "CH"},
    {text: "Coahuila", value: "CL"},
    {text: "Colima", value: "CM"},
    {text: "Distrito Federal", value: "DF"},
    {text: "Durango", value: "DG"},
    {text: "Guanajuato", value: "GT"},
    {text: "Guerrero", value: "GR"},
    {text: "Hidalgo", value: "HG"},
    {text: "Jalisco", value: "JC"},
    {text: "México", value: "MC"},
    {text: "Michoacan", value: "MN"},
    {text: "Morelos", value: "MS"},
    {text: "Nayarit", value: "NT"},
    {text: "Nuevo León", value: "NL"},
    {text: "Oaxaca", value: "OC"},
    {text: "Puebla", value: "PL"},
    {text: "Querétaro", value: "QT"},
    {text: "San Luis Potosí", value: "SP"},
    {text: "Sinaloa", value: "SL"},
    {text: "Tabasco", value: "TC"},
    {text: "Tlaxcala", value: "TL"},
    {text: "Tamaulipas", value: "TS"},
    {text: "Veracruz", value: "VZ"},
    {text: "Yucatán", value: "YN"},
    {text: "Zacatecas", value: "ZS"}
  ];
  //dynamically populates the select input with the states array
  for (var i = 0; i < states.length; i ++) {
    var option = document.createElement('option');
    option.setAttribute('value', states[i].value);
    option.appendChild(document.createTextNode(states[i].text));
    state.appendChild(option);
  }

  //main function that updates the CURP value
  function copy() {
    c1 = lastNameP.value.substring(0,1).toUpperCase();
    c2 = getFirstVowel(lastNameP.value).toUpperCase();
    c3 = lastNameM.value.substring(0,1).toUpperCase();
    c4 = firstName.value.substring(0,1).toUpperCase();
    if (picker.get('select')!=null){
      year = picker.get('select').year;
      month = picker.get('select').month+1; //Plus 1 becuase months have zero-as-index
      date = picker.get('select').date
      c5 = String(year).slice(-2);
      c6 = month.toString();
      c7 = date.toString();
    }
    if (c6.length == 1) {
      c6 = "0" + c6;
    }
    if (c7.length == 1) {
      c7 = "0" + c7;
    }
    if (gender=="male"){
      c8 = "H";
    }
    else if(gender=="female"){
      c8 = "M";
    }
    c9 = state.options[state.selectedIndex].value;
    console.log(state.selectedIndex);
    if (c9 == "") {
      c9 = "??";
    }
    c10 = getFirstConsonant(lastNameP.value).toUpperCase();
    c11 = getFirstConsonant(lastNameM.value).toUpperCase();
    c12 = getFirstConsonant(firstName.value).toUpperCase();

    // console.log(c1+c2+c3+c4+c5+c6+c7+c8+c9+c10+c11+c12);
    curpString = c1+c2+c3+c4+c5+c6+c7+c8+c9+c10+c11+c12;

    //Replaces the second letter of a potential censored word with an X
    badWords.forEach(function (word) {
      if(curpString.substring(0,4).toLowerCase().includes(word)) {
        curpString = curpString.substr(0, 1) + 'X' + curpString.substr(2);
      }
    })
    curp.value = curpString;
  }

  function getFirstVowel(word){
    for(var x = 1; x < word.length; x++){
      if(['a', 'e', 'i', 'o', 'u'].indexOf(word[x].toLowerCase()) !== -1) { return word[x]}
    }
    return '?';
  }

  function getFirstConsonant(word){
    for(var x = 1; x < word.length; x++){
      if(['a', 'e', 'i', 'o', 'u'].indexOf(word[x].toLowerCase()) == -1) { return word[x]}
    }
    return '?';
  }

  function generateObject(e){
    e.preventDefault(); //Prevents reloading the page
    if (document.getElementById('pregnant').checked){
      pregnant = "Yes"
    }
    else {
      pregnant = "No"
    }
    if (state.selectedIndex!=0) {
      stateText = states[state.selectedIndex-1].text;
    }
    console.log("entro");
    curpObject = {
      "name":{
        "first name": firstName.value,
        "paternal last name": lastNameP.value,
        "maternal last name": lastNameM.value,
      },
      "birthday":{
        "year": year,
        "month": month,
        "day": date
      },
      "gender": gender,
      "pregnant": pregnant,
      "state": stateText
    };
    curpObject = JSON.stringify(curpObject,undefined, 2);
    curpTextArea.value=curpObject;
    Materialize.updateTextFields();
    $('#curpTextArea').trigger('autoresize');
  }
};
