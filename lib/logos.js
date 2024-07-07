const { Triangle, Square, Circle } = require("./shapes.js");


function newShape(data) {
    let svg;

    if (data.shape === 'circle') {
        data.shape = new Circle(data.text, data.textColor, data.shapeColor);
        svg = (data.shape).render();
       } else if (data.shape === 'square') {
        data.shape = new Square(data.text, data.textColor, data.shapeColor);
        svg = (data.shape).render(); 
       } else if (data.shape === 'triangle') {
        data.shape = new Triangle(data.text, data.textColor, data.shapeColor);
        svg = (data.shape).render();
       }
       
       return svg;
    }
   
   function newLogo(data) {
       const svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
       let text;
       if (data.shape === 'triangle') {
           text = `<text x="145" y="155" text-anchor="middle" fill="${data.textColor}" font-size="64"> ${data.text} </text>`;
       } else if (data.shape === 'square') {
           text = `<text x="140" y="125" text-anchor="middle" fill="${data.textColor}" font-size="64"> ${data.text} </text>`;
       } else if (data.shape === 'circle') {
           text = `<text x="145" y="125" text-anchor="middle" fill="${data.textColor}" font-size="64"> ${data.text} </text>`;
       }
       return `${svgString} ${newShape(data)} ${text}  </svg>`
    }
   
    module.exports = {newShape, newLogo};