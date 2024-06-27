const { Triangle, Square, Circle } = require("./shapes.js");

describe('Triangle Test', () => {
    test('test a triangle with a red background', () => {
        const shape = new Triangle();
        shape.setColor('red');
        expect(shape.render()).toEqual(
          '<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />'  
        );
    });
});