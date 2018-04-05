function shoppingTime(memberId, money) {
  // you can only write your code here!
  /*
    
    Sepatu brand Stacattu seharga 1500000
    Baju brand Zoro seharga 500000
    Baju brand H&N seharga 250000
    Sweater brand Uniklooh seharga 175000
    Casing Handphone seharga 50000

  */
  let temp1;
  let cart;
  let change = money;
  let listPurchased = [];
  let result = {};
  let product = [
      {
        title:"Sepatu brand Stacattu",
        price: 1500000
      },
      {
        title:"Baju brand Zoro",
        price:500000
      },
      {
        title:"Baju brand H&N",
        price:250000
      },
      {
        title:"Sweater brand Uniklooh",
        price:175000
      },
      {
        title:"Casing Handphone",
        price:50000
      }
  ];
  
  /*for(i=0;i<=product.length-1;i++)
  {
      for(j=0;j<=product.length-1;j++)
      {
        if(product[i].price > product[j].price)
        {
            temp1 = product[i];
            product[i] = product[j];
            product[j] = temp1;
        }
      }
  }*/
  
  if(memberId == "" || memberId === undefined)
  {
      console.log("Mohon maaf, toko X hanya berlaku untuk member saja");
  }
  else if(money < 50000 || money == undefined)
  {
      console.log("Mohon maaf, uang tidak cukup");
  }
  else
  {
      /*console.log(change);
      switch(change)
      {
          case change >= 1500000 :

            listPurchased.push(product[0].title);
            change = change - 1500000;
            console.log("product1 = "+change);
          
          case change >= 500000 && change <= 1499999 :

            listPurchased.push(product[1].title);
            change = change - 500000;
            console.log("product2 = "+change);

          case change >= 250000 && change <= 499999 :

            listPurchased.push(product[2].title);
            change = change - 250000;

          case change > 50000 :

            listPurchased.push(product[3].title);
            change = change - 50000;
      }*/

      /**/
    if(change >= 1500000)
    {
        listPurchased.push(product[0].title);
        change = change - 1500000;
        
    }
    
    if(change >= 500000 && change <= 1499999)
    {
        listPurchased.push(product[1].title);
        change = change - 500000;
        
    }
    if(change >= 250000 && change <= 499999)
    {
        listPurchased.push(product[2].title);
        change = change - 250000;
    }
    if(change >= 175000 && change <= 249999 )
    {
        listPurchased.push(product[3].title);
        change = change - 175000
    }
    if(change >= 50000 && change <= 249999)
    {
        listPurchased.push(product[4].title);
        change = change - 50000;
    }
    
    result.memberId =  memberId;
    result.money = money;
    result.listPurchased = listPurchased;
    result.changeMoney = change;

    console.log(result);
  }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
//changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja