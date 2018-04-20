//aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.

Java script var data;


var w = 450;
var h = 450;

  var ciudades = [
    {name:'Argentina',export:5631839},
    {name:'Francia',population:848023},
    {name:'España',population:824006},
    {name:'Italia',population:296253}
  ];
  //seleccionar todos los "circle" en el documento  
  d3.selectAll('circle')
    .data(ciudades)
    .attr('fill','#B8F18B')
    .attr('r', function(d) {
      return d.population / 57000;
    })
  //seleccionar todos los "text" en el documento      
  d3.selectAll('text')
    .data(ciudades)
    .attr('fill','#948BF1')                      
    .text(function(d) {
      return ". " + d.name;
      
    });