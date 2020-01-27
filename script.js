//HESAP MAKİNESİ

// Arayüzde 0 1 2 3 4 5 6 7 8 9 C + -  * / = <- tuşları olucak
//input bölümü boş olacak
// rakamlara tıklanınca inputta tıklanan rakam gözükcek
// hangi işlem operatörü çağırılmışsa ona göre işlem yapacak = e basınca sonuç inputa yazdırılacak
// <- son rakamı ya da seçilen işlemi (+ - * %) siler
// C tüm işlemleri sıfırlayacak


// algoritma
// rakam{bir; iki; üc; dört; bes; alti; yedi; sekiz; dokuz; sifir;}; esittir() 
//toplama(); cikarma(); carpma(); bolme(); silme(); sifirla(); inputVal;  
//fonksiyonlar:
    // esittir()
        //eğer tıklanan toplama ise a ve b yi topla
        //eğer tıklanan cikarma ise a dan b yi cıkar
        //eğer tıklanan carpma ise a ve b yi çarp
        //eğer tıklanan bölme ise a yı b ye böl
    //toplama(a,b){
        //let topla=a+b;
        //return topla;
    //}

    //cikarma(a,b){
        //let cikar=a-b;
        //return cikar;
    //}

    //carpma(a,b){
        //let carp=a*b;
        //return carp;
    //}

    //bolme(a,b){
        //let bol=a/b;
        //return bol;
    //}

// uygulama açıldığında
    // rakamlara basabilir
        //izin ver
        //girilen rakam inputta gözüksün = inputVal
            

    //operatörlere basabilir
        //rakamdan önce
            //izin verme
        //rakamdan sonra
            //izin ver

    // = tuşuna basabilir
        //esittir()
            // girilen iki rakam arası operatöre göre işlem yapılır.
            // 2+2= e bastıysa inputa 4 yazdır
            // 5-3= e bastıysa inputa 2 yazdır.
            //10/2 = e bastıysa inputa 5 yazdır
            // 5*2 = e bastıysa inputa 10 yazdır.
            // 100  %  30 = e basarsa ekranda 30 yazdır.
            
        
    // c Tuşuna basabilir
        //sifirla()    
            //uygulamayı sıfırlar

    //<- tuşuna basabilir
        //silme()
            //tıklandığında inputttan son rakamı veya operatörü siler.


let rakam={bir, iki, üc, dört, bes, alti, yedi, sekiz, dokuz, sifir};
function toplama(a,b){
    let topla=a+b;
    return topla;
}

function cikarma(a,b){
    let cikar=a-b;
    return cikar;
}

function carpma(a,b){
    let carp=a*b;
    return carp;
}

function bolme(a,b){
    let bol=a/b;
    return bol;
}

            