var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]; 

function dataHandling2(arr)
{
    var result = [];

    for(var i=0;i<=arr.length-1;i++)
    {
        if(i==1)
        {
            /* output = ["0001", "Roman Alamsyah Elsharawy", 
            "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  */
            arr1 = arr[1].split(" ");
            arr1.push("Elsharawy");
            arr1.join(" ");
            result.push(arr1);
            
        }
        else if(i==2)
        {
            arr2 = arr[2].split(" ");
            arr2.splice(0,0,"Provinsi");
            arr2.join(" ");
            console.log(arr2);
            result.push(arr2);
        
        }
        else
        {
            result.push(arr[i]);
        }
        
    }
 
    result.splice(4,1,"Pria","SMA Internasional Metro");

    return result;
}

console.log(dataHandling2(arr));




