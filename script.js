

//console.log('hello poop');
//for( let line = ''; line.length< 8; line+= '#')
//console.log(line)

//fiz buzz problem

// for(let number = 0; number < 101; number+=1)
// if(number%3 === 0 && number%5 === 0){
//     console.log('fizzBuzz')
// }else if( number%3 === 0){
//     console.log('buzz')
// }else if(number%5===0){
//     console.log('fizz')
// }else{console.log(number)}

let chessboard = (row, column) => {
  
    for(let i = 0; i < row; i++){
      //If odd then start with ' '
      //Else start with '#'
      let start = i % 2 === 1 ? ' ' : '#';
      
      //Temp str to stor the pattern of the column
      let str = '';
      for(let j = 0; j < column; j++){
        //Swap current pattern with another one in each iteration
        start = start == '#' ? ' ' : '#';
        str += start;
      }
      
      //Print the pattern for the current row
      console.log(str);
    }
  }

  chessboard(10,10)