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
var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById("color-personalizado");

colorPersonalizado.addEventListener("change", function() {
  // Se guarda el color de la rueda en colorActual
  colorActual = colorPersonalizado.value;
  // Completar para que cambie el indicador-de-color al colorActual
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
  var indicadorColor = document.getElementById("indicador-de-color");
  indicadorColor.style.backgroundColor = nuevoColor;
  console.log(nuevoColor);
};

var pintarGrilla = function(e) {
  var colorSeleccionado = document.getElementById("indicador-de-color").style
    .backgroundColor;
  e.target.style.backgroundColor = colorSeleccionado;
};

paleta.addEventListener("click", cambiarColorElegido);
grillaPixeles.addEventListener("click", pintarGrilla);
