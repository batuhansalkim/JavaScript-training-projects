/*
Standart vergi miktarı otomobil için minimum 200 Tl dir.
Standart vergi miktarı motors için minimum 100 Tl dir.
Motor gücü yükseldikçe 50 Tl artar.
Eğer araç 15 yaşından küçükse 20 TL indirim uygulanır.
*/
function yillar() {
    var tarih = new Date();
    var yil = tarih.getFullYear();

    for (var i = yil; i >= 2000; i--) {
        var secenek = document.createElement("option");
        document.getElementById("aracModeli").options.add(secenek);
        secenek.text = i;
        secenek.value = i;
    }
}
function vergiHesapla() {
    //Gerekli değişkenler tanımlanır.
    var tasitSecimi, modelSecimi, gucSecimi;
    var odenecekVergi;
    var i;

    //1.döngü bloğu-Araç tipi listesini gezerek seçili olan value değerini alır.
    for (i = 0; i < document.getElementById("aracTipi").length; i++) {
        if (document.getElementById("aracTipi").options[i].selected) {
            tasitSecimi = document.getElementById("aracTipi").options[i].value;
        }
    }

    //2.döngü bloğu-Araç motor gücü listesini gezerek seçili olan value değerini alır.
    for (i = 0; i < document.getElementsByName("motorGucu").length; i++) {
        if (document.getElementsByName("motorGucu")[i].checked) {
            gucSecimi = document.getElementsByName("motorGucu")[i].value;
        }
    }

    //3.döngü bloğu-Araç modeli listesini gezerek seçili olan value değerini alır.
    for (i = 0; i < document.getElementById("aracModeli").length; i++) {
        if (document.getElementById("aracModeli").options[i].selected) {
            modelSecimi = document.getElementById("aracModeli").options[i].value;
        }
    }

    //1.şart kontrolü-Taşıt tipinin seçimine göre standart minimum vergi tutarı belirlenir.
    if (tasitSecimi == "motorsiklet") {
        odenecekVergi = 100;

    }
    else if (tasitSecimi == "otomobil") {
        odenecekVergi = 200;

    }

    //2.şart kontrolü-Motor gücü seçimine göre eklenecek artışlar hesaplanır.
    if (gucSecimi == "999cc") {
        odenecekVergi = 100;

    }
    else if (gucSecimi == "1000cc-1600cc") {
        odenecekVergi = odenecekVergi + 50;

    }
    else if (gucSecimi == "1601cc-2000cc") {
        odenecekVergi = odenecekVergi + 100;

    }
    else if (gucSecimi == "2001cc") {
        odenecekVergi = odenecekVergi + 150;

    }

    //3.şart kontrolü-Model yılı seçimine göre yapılacak indirimler hesaplanır.
    if (modelSecimi <= 2005) {
        odenecekVergi = odenecekVergi - 20;

    }

    //Sonuç olarak ödenmesi gereken net vergi tutarı yazdırılır.
    document.getElementById("sonuc").innerHTML = "Ödemeniz gereken net vergi tutarı: " + odenecekVergi;
    //alert(odenecekVergi);

}