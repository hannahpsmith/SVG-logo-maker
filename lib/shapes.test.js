const { Triangle, Square, Circle } = require("./shapes.js");

describe('Shapes', () => {
    describe('Triangle Test', () => {
        it('should test for a triangle with a red background', () => {
            const shape = new Triangle()
            shape.setColor('red');
            expect(shape.render()).toEqual(
                '<polygon points="150, 18 244, 182 56, 182" fill="red" />'  
              );
        })
    });

    describe('Circle Test', () => {
        it('should test for a circle with a blue background', () => {
            const shape = new Circle()
            shape.setColor('blue');
            expect(shape.render()).toEqual(
                '<circle cx="150" cy="115" r="80" fill="blue" />'  
              );
        })
    });

    describe('Square Test', () => {
        it('should test for a triangle with a yellow background', () => {
            const shape = new Square()
            shape.setColor('yellow');
            expect(shape.render()).toEqual(
                '<rect x="73" y="40" width="160" height="160" fill="yellow" />'
              );
        })
    });
});