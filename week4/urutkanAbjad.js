function urutkanAbjad(str) {
  // you can only write your code here!
  let temp;
  let strArr = str.split("");
  let result = "";

  for(i=0;i<=strArr.length;i++)
  {
    for(j=0;j<=strArr.length;j++)
    {
        if(strArr[i] < strArr[j])
        {
            temp = strArr[i];
            strArr[i] = strArr[j];
            strArr[j] = temp;
        }
    }
  }

  for(k=0;k<=strArr.length-1;k++)
  {
    result += strArr[k];
  }

  return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'