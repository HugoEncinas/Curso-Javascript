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
  var curp = document.getElementById('curp');
  firstName.addEventListener('keyup', copy);
  var badWords = ['culo', 'loco', 'wuey', 'roba'];
  var grosero = false;
  // var male = document.getElementById("male").checked;
  // var female = document.getElementById("female").checked;
  var pregnant = document.getElementById("pregnant");

  //Curp character values
  var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10;

  $("input[name='gender']").on('click', function(e) {
      if (e.currentTarget.id=="female"){
         $('#pregnant').prop("disabled", false);
         c8 = "M";
      }
      else{
        $('#pregnant').prop("disabled", true);
        $('#pregnant').prop("checked", false);
        c8 = "H";
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
  var sel = document.getElementById('state');
  for (var i = 0; i < states.length; i ++) {
    var option = document.createElement('option');
    option.setAttribute('value', states[i].value);
    option.appendChild(document.createTextNode(states[i].text));
    sel.appendChild(option);
  }


  function copy() {
    c1 = lastNameP.value.substring(0,1);
    c2 = getFirstVowel(lastNameP.value);
    c3 = lastNameM.value.substring(0,1);
    c4 = firstName.value.substring(0,1);
    c5 = picker.get('select').year;
    c6 = picker.get('select').month+1; //Plus 1 becuase months have zero-as-index
    c7 = picker.get('select').date;
    console.log(c8);
    curp.value = firstName.value;
    badWords.forEach(function (word) {
      if(firstName.value.includes(word)) {
        curp.value = 'Grosero' //Aqui remplazar una de las letras por X
      }
    })
  }

  function check() {
    console.log(gender);
  }

  function getFirstVowel(word){
    for(var x = 1; x < word.length; x++){
      if(['a', 'e', 'i', 'o', 'u'].indexOf(word[x].toLowerCase()) !== -1) { return word[x]}
    }
    return 'x';
  }

  function getFirstConsonant(word){
    for(var x = 1; x < word.length; x++){
      if(['a', 'e', 'i', 'o', 'u'].indexOf(word[x].toLowerCase()) == -1) { return word[x]}
    }
    return 'x';
  }
};

//Tarea: EIVH930510HNLNLG05
// 'Mi super generador de Curp', que se calcule al momento, cambiar palabras mala por X (pene, pxne), minimo 5 palabras
// Inputs: Nombre, Apellido, etc.
// Logica:
// Primer letra Ap. paterno
// Primer vocal ap. paterno
// Primer letra Ap. materno
// Primer letra nombre
// año 80, 95
// mes 02, 03
// dia 10, 20
// sexo h, m (radio button)
// checkbox opcional de embarazada?, en caso de ser mujer
// Entidad nacimiento SR, NL  (Select box)
// Primera consonante ap. paterno (no inicial)
// Primera consonante ap. materno (no inicial)
// Primera consoante nombre (no incial)

//Parte 2
//Ademas de lo anterior,
//boton de enviar
// en textArea, imprimir json del objeto que hemos generado, en ingles
// {
//   name: {
//     name:"",
//     lastName:"",
//     lastName2:""
//   },
//   DOB: {
//     day,
//     month,
//     year
//   }
// }
