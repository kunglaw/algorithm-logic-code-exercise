function shootOut()
{
    return "Halo Function!";
}

function calculateMultiply(num1, num2)
{
    return num1 * num2;
}

function processSentence(name,age,address,hobby)
{
    return "Nama saya"+name+", umur saya "+age+" tahun, alamat saya di Jln. "+address+" , dan saya punya hobby yaitu "+hobby;
}

/*
 BUATLAH KODE FUNCTION DISINI
*/

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

console.log(shootOut());