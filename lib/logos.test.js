const { newShape, newLogo } = require("./logos.js")
const { Triangle, Square, Circle } = require("./shapes.js");

describe('Generate Logo', () => {
    describe('Shape Test', () => {
        it('should create svg string based on user responses', () => {
            const triangle = new Triangle('tri', 'black', 'yellow');
            let svg = triangle.render();
            expect(svg).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="yellow" />`)
        })
    });

    describe('Logo Test', () => {
        it('should return all selections as an svg file', () => {
            const circle = new Circle('svg', 'blue', 'red')
            const svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
            const text = `<text x="140" y="125" text-anchor="middle" fill="blue" font-size="64"> cat </text>`;
            let svg = circle.render();
            const newLogo = `${svgString} ${svg} ${text} </svg>`;
            expect(newLogo).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="115" r="80" fill="red" /> <text x="140" y="125" text-anchor="middle" fill="blue" font-size="64"> cat </text> </svg>`)
        })
    })
});