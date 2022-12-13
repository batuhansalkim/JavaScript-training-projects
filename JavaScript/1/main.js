function KrediHespla() {
    var cekilecekTutar, vadeSayisi;
    var aylikTaksit, odenecekToplamTutar;

    cekilecekTutar = document.getElementById("txtKrediTutari").value;

    var liste = document.getElementById("listeVade");

    vadeSayisi = liste.options[liste.selectedIndex].value;

    if(vadeSayisi==12){
        odenecekToplamTutar = cekilecekTutar * 1.1;
    }
    else if(vadeSayisi == 24){
        odenecekToplamTutar = cekilecekTutar * 1.2;
    }
    else if(vadeSayisi ==36){
        odenecekToplamTutar = cekilecekTutar * 1.3;
    }
    else if(vadeSayisi == 48){
        odenecekToplamTutar = cekilecekTutar * 1.4;
    }

    aylikTaksit = odenecekToplamTutar / vadeSayisi;

    document.querySelector("#sonuc").innerHTML = "Ödenecek Toplam Tutar : " + odenecekToplamTutar.toFixed(3) +" TL"+ "<br>" + " Aylık taksit tutarınız : "+aylikTaksit.toFixed(2)+ " TL";



}










