/* Write a program to build a `Pyramid of stars` of given height */

function buildPyramid(num) {


        for(let i=1; i<= num; i++){
      
          let str = ' '.repeat(num-i);
          let str2 = '*'. repeat(i*2 -1)
          console.log(str + str2 + str);
          
        }
      
}

buildPyramid(6);



//module.exports = buildPyramid;
