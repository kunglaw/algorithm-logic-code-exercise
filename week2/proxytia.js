var nama = "Dimas";
var peran = "Ksatria";

if(nama != "" && peran != "")
{
    if(peran == "Ksatria")
    {
        console.log("Selamat datang di dunia Proxytia , "+nama);
        console.log("Halo "+peran+" "+nama+", Kamu Dapat menyerang dengan senjatamu ");
    }
    else if(peran == "Tabib")
    {
        console.log("Selamat datang di dunia proxytia, "+nama);
        console.log("Halo "+peran+" "+nama+", Kamu Dapat menyerang dengan senjatamu ");

    }else if(peran == "Penyihir")
    {
        console.log("Selamat datang di dunia proxytia, "+nama);
        console.log("Halo "+peran+" "+nama+", Kamu Dapat menyerang dengan senjatamu ");
        
    }

   
}
else
{
    if(nama == "")
    {
        
        console.log("Nama harus diisi");
    }else if(peran == "")
    {
        console.log("Halo "+nama+", pilih peranmu untuk memulai game");
       
    }
}