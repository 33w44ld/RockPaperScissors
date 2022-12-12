let liczba_gier=0;
let komunikat="";
let kolor_komunikatu="";
let wybor_komputer=0, wybor_gracz=0;
let pkt_komputer=0, pkt_gracz=0;
let nazwy_wybor=["Nożyczki", "Kamień", "Papier"]
function akt(ktr_przycisk)
{
    if(ktr_przycisk==0)
    {
        liczba_gier=0, pkt_komputer=0, pkt_gracz=0;
        komunikat="Zaczynamy nowa grę. Powodzenia!!!";
        kolor_komunikatu="darkblue";
        document.getElementById("przy1").style.background="black";
        document.getElementById("przy2").style.background="black";
        document.getElementById("przy3").style.background="black";
    }
    else 
    {
        liczba_gier++;
        wybor_komputer=Math.floor(Math.random()*3)+1;
        wybor_gracz=ktr_przycisk;
        if(wybor_gracz==1) 
        {
            document.getElementById("przy1").style.background="green";
            document.getElementById("przy2").style.background="black";
            document.getElementById("przy3").style.background="black";
        }
        if(wybor_gracz==2) 
        {
            document.getElementById("przy1").style.background="black";
            document.getElementById("przy2").style.background="green";
            document.getElementById("przy3").style.background="black";
        }
        if(wybor_gracz==3) 
        {
            document.getElementById("przy1").style.background="black";
            document.getElementById("przy2").style.background="black";
            document.getElementById("przy3").style.background="green";
        }
        if(wybor_gracz==wybor_komputer)
        {
            komunikat="Remis! Wybraliście "+nazwy_wybor[wybor_gracz-1];
            kolor_komunikatu="orange"
            pkt_gracz++;
            pkt_komputer++;
        }
        //<=======================Nozyczki=======================>
        if(wybor_gracz==1 && wybor_komputer==1)
        {
            document.getElementById("nozyczki").src="images/nozyczkigk.png";
            document.getElementById("kamien").src="images/kamien.png";
            document.getElementById("papier").src="images/papier.png";
        }
        if(wybor_gracz==1 && wybor_komputer==2)
        {
            document.getElementById("nozyczki").src="images/nozyczkigracz.png";
            document.getElementById("kamien").src="images/kamienkomp.png";
            document.getElementById("papier").src="images/papier.png";
        }
        if(wybor_gracz==1 && wybor_komputer==3)
        {
            document.getElementById("nozyczki").src="images/nozyczkigracz.png";
            document.getElementById("kamien").src="images/kamien.png";
            document.getElementById("papier").src="images/papierkomp.png";
        }
        //<=======================Kamien=======================>
        if(wybor_gracz==2 && wybor_komputer==2)
        {
            document.getElementById("nozyczki").src="images/nozyczki.png";
            document.getElementById("kamien").src="images/kamiengk.png";
            document.getElementById("papier").src="images/papier.png";
        }
        if(wybor_gracz==2 && wybor_komputer==1)
        {
            document.getElementById("nozyczki").src="images/nozyczkikomp.png";
            document.getElementById("kamien").src="images/kamiengracz.png";
            document.getElementById("papier").src="images/papier.png";
        }
        if(wybor_gracz==2 && wybor_komputer==3)
        {
            document.getElementById("nozyczki").src="images/nozyczki.png";
            document.getElementById("kamien").src="images/kamiengracz.png";
            document.getElementById("papier").src="images/papierkomp.png";
        }
        //<=======================Papier=======================>
        if(wybor_gracz==3 && wybor_komputer==3)
        {
            document.getElementById("nozyczki").src="images/nozyczki.png";
            document.getElementById("kamien").src="images/kamien.png";
            document.getElementById("papier").src="images/papiergk.png";
        }
        if(wybor_gracz==3 && wybor_komputer==1)
        {
            document.getElementById("nozyczki").src="images/nozyczkikomp.png";
            document.getElementById("kamien").src="images/kamien.png";
            document.getElementById("papier").src="images/papiergracz.png";
        }
        if(wybor_gracz==3 && wybor_komputer==2)
        {
            document.getElementById("nozyczki").src="images/nozyczki.png";
            document.getElementById("kamien").src="images/kamienkomp.png";
            document.getElementById("papier").src="images/papiergracz.png";
        }
        else if(((wybor_gracz==1) && (wybor_komputer==3)) || 
        ((wybor_gracz==2) && (wybor_komputer==1)) || 
        ((wybor_gracz==3) && (wybor_komputer==2)))
        {
            pkt_gracz+=3;
            komunikat="Wygrałeś!!! Wybrałeś "+nazwy_wybor[wybor_gracz-1]+"a komputer wybrał "+nazwy_wybor[wybor_komputer-1];
            kolor_komunikatu="green";
        }
        else if(((wybor_gracz==1) && (wybor_komputer==2)) || 
        ((wybor_gracz==2) && (wybor_komputer==3)) || 
        ((wybor_gracz==3) && (wybor_komputer==1)))
        {
            pkt_komputer+=3;
            komunikat="Przegrałeś! :( Wybrałeś "+nazwy_wybor[wybor_gracz-1]+" a komputer wybrał "+nazwy_wybor[wybor_komputer-1];
            kolor_komunikatu="red";
        }
    }
    document.getElementById("k1").innerHTML=String(liczba_gier);
    document.getElementById("k2").innerHTML=String(pkt_gracz);
    document.getElementById("k3").innerHTML=String(pkt_komputer);
    document.getElementById("nag").innerHTML=komunikat;
    document.getElementById("nag").style.color=kolor_komunikatu;
}