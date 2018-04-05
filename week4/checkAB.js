function checkAB(statement) {
  let positionA = 0;
  let positionB = 0;
  let result = false;

  let statementArr = [];
  // you can only write your code here!
  
  //replacing space
  for(i=0;i<=statement.length-1;i++)
  {
      if(statement[i] != " ")
      {
          statementArr.push(statement[i]);
      }
  }
 
  
  statement = "";
  for(i=0;i<=statementArr.length-1;i++)
  {
     statement += statementArr[i];
  }
  
  for(i=0;i<=statement.length - 1;i++)
  {
     
      if(statement[i].toLowerCase() == "a")
      {
        positionA = i;
      }

      if(statement[i].toLowerCase() == "b")
      {
        positionB = i;
      }

  }
  
  if(positionA > positionB)
  {

    if((positionA - positionB) == 3)
    {
        result = true;
    }
  }else{
    if((positionB - positionA) == 3)
    {
        result = true;
    }
  }

  return result;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false