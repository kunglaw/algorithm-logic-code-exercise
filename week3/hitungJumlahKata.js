function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  arrK = kalimat.split(" ");
  var result = 0;
  for(i=0;i <= arrK.length-1;i++ )
  {
    result ++;
  }

  return result;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5