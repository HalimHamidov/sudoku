module.exports = function solveSudoku(matrix) {
  const matrixCopy = JSON.parse(JSON.stringify(matrix));
  for(let row=0;row<9;row++)
  for(let col=0;col<9;col++){
      if(matrixCopy[row][col]===0){
          let solScope = findSol(row,col,matrixCopy);
          if(solScope.length==0){
            return false;
          }
          for(let sol of solScope){
            matrixCopy[row][col] = sol;
              var result = solveSudoku(matrixCopy);
              if(result!=false){
                return solveSudoku(result);
              }
          }
          return false;
      }
  }
  return  matrixCopy;
}

function findSol(row,col,matrix){
  const scope = [];
  label: for(let i=1;i<10;i++){
      for(let j=0;j<9;j++){
          if(matrix[row][j]==i || matrix[j][col]==i || matrix[Math.floor(row/3)*3+j%3][Math.floor(col/3)*3+Math.floor(j/3)]==i){
              continue label;
          }
      }
      scope.push(i);
  }
return scope;
}