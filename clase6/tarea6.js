window.onload = function() {
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 120,
    today: '',
    min: new Date(1900,1,1),
    max: true
  });
  var name = document.getElementById('firstName');
  var curp = document.getElementById('curp');
  name.addEventListener('keyup', copy);
  var badWords = ['culo', 'loco', 'wuey', 'roba'];
  var grosero = false;

  function copy() {
    curp.value = name.value;
    badWords.forEach(function (word) {
      if(name.value.includes(word)) {
        curp.value = 'Grosero' //Aqui remplazar una de las letras por X
      }
    })
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
