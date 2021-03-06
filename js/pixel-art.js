var nombreColores = [
  "White",
  "LightYellow",
  "LemonChiffon",
  "LightGoldenrodYellow",
  "PapayaWhip",
  "Moccasin",
  "PeachPuff",
  "PaleGoldenrod",
  "Bisque",
  "NavajoWhite",
  "Wheat",
  "BurlyWood",
  "Tan",
  "Khaki",
  "Yellow",
  "Gold",
  "Orange",
  "DarkOrange",
  "OrangeRed",
  "Tomato",
  "Coral",
  "DarkSalmon",
  "LightSalmon",
  "LightCoral",
  "Salmon",
  "PaleVioletRed",
  "Pink",
  "LightPink",
  "HotPink",
  "DeepPink",
  "MediumVioletRed",
  "Crimson",
  "Red",
  "FireBrick",
  "DarkRed",
  "Maroon",
  "Brown",
  "Sienna",
  "SaddleBrown",
  "IndianRed",
  "RosyBrown",
  "SandyBrown",
  "Goldenrod",
  "DarkGoldenrod",
  "Peru",
  "Chocolate",
  "DarkKhaki",
  "DarkSeaGreen",
  "MediumAquaMarine",
  "MediumSeaGreen",
  "SeaGreen",
  "ForestGreen",
  "Green",
  "DarkGreen",
  "OliveDrab",
  "Olive",
  "DarkOliveGreen",
  "YellowGreen",
  "LawnGreen",
  "Chartreuse",
  "GreenYellow",
  "Lime",
  "SpringGreen",
  "LimeGreen",
  "LightGreen",
  "PaleGreen",
  "PaleTurquoise",
  "AquaMarine",
  "Cyan",
  "Turquoise",
  "MediumTurquoise",
  "DarkTurquoise",
  "DeepSkyBlue",
  "LightSeaGreen",
  "CadetBlue",
  "DarkCyan",
  "Teal",
  "Steelblue",
  "LightSteelBlue",
  "Honeydew",
  "LightCyan",
  "PowderBlue",
  "LightBlue",
  "SkyBlue",
  "LightSkyBlue",
  "DodgerBlue",
  "CornflowerBlue",
  "RoyalBlue",
  "SlateBlue",
  "MediumSlateBlue",
  "DarkSlateBlue",
  "Indigo",
  "Purple",
  "DarkMagenta",
  "Blue",
  "MediumBlue",
  "DarkBlue",
  "Navy",
  "Thistle",
  "Plum",
  "Violet",
  "Orchid",
  "DarkOrchid",
  "Fuchsia",
  "Magenta",
  "MediumOrchid",
  "BlueViolet",
  "DarkViolet",
  "DarkOrchid",
  "MediumPurple",
  "Lavender",
  "Gainsboro",
  "LightGray",
  "Silver",
  "DarkGray",
  "Gray",
  "DimGray",
  "LightSlateGray",
  "DarkSlateGray",
  "Black"
];
var indicadorColor = document.getElementById("indicador-de-color");
var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var mousePresionado = false;

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById("color-personalizado");

colorPersonalizado.addEventListener("change", function() {
  // Se guarda el color de la rueda en colorActual
  colorActual = colorPersonalizado.value;
  indicadorColor.style.backgroundColor = colorActual;
});

var crearPaleta = function() {
  for (var i = 0; i < nombreColores.length; i++) {
    var color = nombreColores[i];
    var nuevoDiv = document.createElement("div");
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.className = "color-paleta";
    paleta.appendChild(nuevoDiv);
  }
};
crearPaleta();

var crearGrilla = function() {
  for (var i = 0; i < 1750; i++) {
    var pixel = document.createElement("div");
    grillaPixeles.appendChild(pixel);
  }
};
crearGrilla();

var cambiarColorElegido = function(e) {
  var nuevoColor = e.target.style.backgroundColor;
  indicadorColor.style.backgroundColor = nuevoColor;
  console.log(nuevoColor);
};

var pintarGrilla = function(e) {
  var colorSeleccionado = document.getElementById("indicador-de-color").style
    .backgroundColor;
  e.target.style.backgroundColor = colorSeleccionado;
};

var pintarGrillaHover = function(e) {
  if (mousePresionado) {
    pintarGrilla(e);
  }
};

$("#borrar").click(function() {
  $("#grilla-pixeles div").animate({ backgroundColor: "white" }, 2500);
});

$("img").click(function() {
  console.log(this.id);
  var elegido = this.id;
  switch (elegido) {
    case "batman":
      cargarSuperheroe(batman);
      break;
    case "flash":
      cargarSuperheroe(flash);
      break;
    case "wonder":
      cargarSuperheroe(wonder);
      break;
    case "invisible":
      cargarSuperheroe(invisible);
      break;
  }
});

$("#guardar").click(guardarPixelArt);

paleta.addEventListener("click", cambiarColorElegido);

grillaPixeles.addEventListener("mousedown", pintarGrilla);

grillaPixeles.addEventListener("mousedown", function() {
  mousePresionado = true;
});
window.addEventListener("mouseup", function() {
  mousePresionado = false;
});
grillaPixeles.addEventListener("mouseover", pintarGrillaHover);
