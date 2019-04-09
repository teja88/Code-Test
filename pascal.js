<script>
function pascalTriangle (numberOfRows) {
  var pTriangle = [];
  
  for (var x = 0; x < numberOfRows; x++) { 
    pTriangle[x] = new Array(x+1);
    
    for (var y = 0; y < x+1; y++) {            
      if (y == 0 || y == x) {
        pTriangle[x][y] = 1;
      } else {
        pTriangle[x][y] = pTriangle[x-1][y-1] + pTriangle[x-1][y];
      }
    }
  }
  
  return pTriangle;
}

console.log(pascalTriangle(6));
</script>