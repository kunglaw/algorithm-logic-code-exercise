var gg = "";
for(var i = 1; i <= 100; i++)
{ 
    // genap
     if((i % 2) == 0)
     {
        gg = "GENAP";
     }
     else if(i % 2 != 0)
     {
         gg = "GANJIL";
     }

     document.writeln(i+" . "+gg+" <br> ");
}

var msg = "";
for(var i = 1; i <= 100; i++)
{ 
    // genap
     if((i % 3) == 0)
     {
        msg = "Kelipatan 3";
     }
     else
     {
         msg = "";
     }

     document.writeln(i+" "+msg+" <br> ");
}

var msg = "";
for(var i = 1; i <= 100; i++)
{ 
    // genap
     if((i % 5) == 0)
     {
        msg = "Kelipatan 5";
     }
     else
     {
         msg = "";
     }

     document.writeln(i+" "+msg+" <br> ");
}

var msg = "";
for(var i = 1; i <= 100; i++)
{ 
    // genap
     if((i % 9) == 0)
     {
        msg = "Kelipatan 9";
     }
     else
     {
         msg = "";
     }

     document.writeln(i+" "+msg+" <br> ");
}