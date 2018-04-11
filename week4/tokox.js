function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  let result = [];
  let obj = {}
  let shopper1 = [];
 
  let isPush = false; // masukan data baru ke array result
  let isChange = false; // change object result yg sudah ada 

  let leftOver = 0;
  let product1 = "";
  let totalProfit = 0;
  let amount1 = 0;
  
  if(shoppers.length > 0)
  {
    // shoppers
    for(i=0;i<=shoppers.length-1;i++)
    {
        //console.log(listBarang[j][0]+" -- "+shoppers[i].product);
    
            //console.log("change yang sudah ada ");
        // console.log(shoppers[i].name+" === "+shoppers[i].product);
        for(k=0;k <= result.length-1;k++)
        {
            //console.log(shoppers[i].product+" <==> "+result[k].product);
            if(shoppers[i].product == result[k].product)
            {
                isChange = true;
                result_idx = k;
                amount1 += shoppers[i].amount * listBarang[k][1];
                //result.leftOver = result.leftOver -  shoppers[i].amount;
                //result.totalProfit = result.totalProfit + amount1;
            }
            
        }
        

        for(j=0;j<=listBarang.length-1;j++)
        {
            if(listBarang[j][0] == shoppers[i].product)
            {
                listBarang[j][2]  = listBarang[j][2] - shoppers[i].amount;
                //console.log(amount1);
                product1 = listBarang[j][0];
                //obj.shoppers[].push(shoppers[i].name);
                leftOver    =  listBarang[j][2];
                amount1 += shoppers[i].amount * listBarang[j][1];
                
                // masukan data baru
                isPush = true;
            }
        }
    
        
    
        // ubah result yg sudah ada
        if(isChange)
        {
            //console.log(result[result_idx].leftOver);
            result[result_idx].leftOver = result[result_idx].leftOver -  shoppers[i].amount;
            result[result_idx].totalProfit = result[result_idx].totalProfit + amount1;
        }
        // masukkan result baru
        if(isPush)
        {
            obj.product = product1;
            obj.leftOver = leftOver;
            obj.totalProfit = amount1;

            result.push(obj);
            //console.log(obj);
            //console.log(result[i].product);
        }

        // balikkan semua ke default;
        isPush = false;
        isChange = false;
        amount1 = 0;    
            
    } 
  }
    
  
  //process.exit();
  return result;

  // you can only write your code here!
}

// TEST CASES
console.log(countProfit([
{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
{name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));

process.exit();

//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
