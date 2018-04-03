function angkaPalindrome(num) {

    var result;
    var isPalindrome = false;

    while(!isPalindrome)
    {
        num++;

        nums = num.toString();
        
        var pal = ""; 
        for(var j=nums.length-1;j>=0;j--)
        {
            //console.log();
            pal += nums[j];
        }
        //console.log(pal);

        var pal2 = parseInt(pal);
        var num2 = parseInt(nums);
        
        if(pal2 == num2)
        {
            isPalindrome = true;
            result = num2;
            return result;
        }
    }



}
  
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(2000)); // 1001