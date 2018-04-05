function changeMe(arr) {
    var result = {};
    var fullname = "";
    var objStr = "";
  // you can only write your code here!
  if(arr.length > 0)
  {
    for(i=0;i<=arr.length-1;i++)
    {
        result.firstName = arr[i][0];
        result.lastName = arr[i][1];
        result.gender = arr[i][2];
        result.age = arr[i][3];
        
        objStr = "{firstName:'"+result.firstName+"',lastName:'"+result.lastName+"',gender:'"+result.gender+"',age:'"+result.age+"' }";
        fullname = i+1+". "+ result.firstName+" "+result.lastName;
        console.log(fullname+":"+objStr);

    }
  }
  else
  {
      console.log("");
  }
  
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""