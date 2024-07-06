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


});

// describe('Validate', () => {
//     // TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
  
//     describe('invalid', () => {
//       it('should return false for empty password', () => {
//         const str = '';
  
//         const result = new Validate().isPassword(str);
  
//         expect(result).toEqual(false);
//       });
//     });
//   });