var tanggal = 1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 5; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var bulanStr = "";

switch(bulan)
{
    case 1:
        bulanStr = "Januari";
    break;
    case 2:
        bulanStr = "Februari";
    break;
    case 3:
        bulanStr = "Maret";
    break;
    case 4:
        bulanStr = "April";
    break;
    case 5:
        bulanStr = "Mei";
    break;
    case 6:
        bulanStr = "Juni";
    break;
    case 7:
        bulanStr = "Juli";
    break;
    case 8:
        bulanStr = "Agustus";
    break;
    case 9:
        bulanStr = "September";
    break;
    case 10:
        bulanStr = "Oktober";
    break;
    case 11:
        bulanStr = "November";
    break;
    case 12:
        bulanStr = "Desember";
    break;
    
}

console.log("Tanggal : "+tanggal+" "+bulanStr+" "+tahun);