let btngorevekle;


btngorevekle = document.querySelector(".btn-gorev-ekle");


 const  upul = document.querySelector(".gorev-listesi"); 





let gorevsıltamamla = (e) =>{
    
   const tklanılan =  e.target;
    
    if(tklanılan.classList.contains("gorev-btn-tamamlandi")){

  // burdakı amac en yukardakı ul ye herhangı bır yerıne tıklanınca  e target ıle nereye tıklanıldıgını buluyoruz ıste orda claslıstlerden goreev tammalandı ıcerıyorsa burası calısmıs olur.
        
      
        
       // tklanılan.parentElement.style.textDecoration =  "line-through"; 1.yontem
        
        tklanılan.parentElement.classList.toggle("gorev-tamamlandi");// bu classı eklıyoruz yanı toogle sayesınde  target ıle tık ısaretıne tıkalnıyorsa bu ıf calsıyor ya sonra burda tıklanılan hedefın parentına gıdıyr orda sınıf olarak gorev tamamlandı yoksa ekle varsa sıl bunu yapmıs oluyor.
        
    } if(tklanılan.classList.contains("gorev-btn-sil")){
        
        if(confirm("Emin misiniz")){
            
        
        
          tklanılan.parentElement.classList.toggle("kaybol");// toogle ekledık yukardakı gıbı  fakat hala ekranda yazdıklarımız bız anımasyon ekledık o kayboldu nasıl yaparız kaybol anımasynu calıstıktan bıttıkten  sonra remove calıssın aşagıdakı gıbı olacak
        
        const deletevalum = tklanılan.parentElement.children[0].innerText;
        
        localdelete(deletevalum);// bu sıl ıslemı gerceklestıgınde hangı deger sılınıyorsa localstroageda o sılınıcek. dolayısıyla localdelete fonksıyonunu burda caagırdık
    
        
        tklanılan.parentElement.addEventListener("transationend", function(){
            tklanılan.parentElement.remove();
            
            
        });
     
       
      }   
    }
 
  
};

upul.addEventListener("click",gorevsıltamamla);


document.addEventListener("DOMContentLoaded",localoku);

let  clickfunck = (e) => {
    e.preventDefault();
    
    
    
     let yenıgorev = document.querySelector(".input-gorev");
    
   if(yenıgorev.value.length >3){
       gorevıtemol(yenıgorev.value);
    
  localınsert(yenıgorev.value);    
   
    
    yenıgorev.value = "";
      }else{
          alert("lutfen alanları doldurunuz ve ya tanımlı görev giriniz");
      }
    
   
    

};

  btngorevekle.addEventListener("click",clickfunck);







function localınsert(newsgorev){
    
        // localStorage.setItem("isimlistesi",yenıgorev.value);
        
      let memeoryarray;
        
        if(localStorage.getItem("görevlerlistesi") === null){
           memeoryarray = [];
           
           }else{
          
        memeoryarray =  JSON.parse(localStorage.getItem("görevlerlistesi"));
           
           }
       
         
            memeoryarray.push(newsgorev);   
               
               // local apiye yazdırmam lazım bunun ıcın strınge donusturup yazdırcaz
     //ben local strage sadece strıngı bılır ama ben bırden fazla degerı yazdırmak ıstıyorum oda arraydır ama
     //arrayı yazdıramıyorum dırek local strage ozman  jsona donusutururm. oyle sekılde arrayı atarım localstarage
       
     //yapı soyle calısır  bırden fazla verı koycam ılk boş olcak dolayısıyla ıf calıscak ve arraye esıtlemıs olcam
     //onu local strage atmam ıcın jsona donusturmem lazım donusturdum 

     //sonra 2.verı eklıcem else calıscak bu sefer ordakı yapıyı json.parse kullanarak normal javascrıpt nesnesıne
     //cevırcem cevırdım ve ıslemımı yapar sonra gıne json.strınfy calısır bu sekılde 
        localStorage.setItem("görevlerlistesi",JSON.stringify(memeoryarray));  
    
}

   
     // localStorage.removeItem("görevlerlistesi",par);





function localoku(){
    
     let memeoryarray;
        
        if(localStorage.getItem("görevlerlistesi") === null){
           memeoryarray = [];
           
           }else{
          
        memeoryarray =  JSON.parse(localStorage.getItem("görevlerlistesi"));
           
           }
    
    memeoryarray.forEach(function(gorev){
        
 
        gorevıtemol(gorev);
        
    });
    
    
}
 

function gorevıtemol(gorev){
    
      

      
 const yenıdıv = document.createElement("div");
    
    yenıdıv.classList.add("gorev-item");
 // lı olusturma
   const gorelı = document.createElement("li");
    gorelı.classList.add("gorev-tanim");
    gorelı.innerText = gorev;
    
   yenıdıv.appendChild(gorelı);
  
   
      upul.appendChild(yenıdıv);

    // tamamlandı butonu ekle
    
    const btn = document.createElement("button");
    btn.classList.add("gorev-btn");
    btn.classList.add("gorev-btn-tamamlandi"); // bunuda eklıyelım cunku tıklayınca o classtan bır ıslem yapılcak ya
    
    btn.innerHTML ="<i class='fas fa-check'></i>";  // html kodu yerlestırbılrız.
    
    yenıdıv.appendChild(btn);
    
   
 const btn1 = document.createElement("button");
     btn1.classList.add("gorev-btn");
      btn1.classList.add("gorev-btn-sil");
     btn1.innerHTML = '<i class="fas fa-trash-alt"></i>';
    yenıdıv.appendChild(btn1);
    
        
 
    
}




function localdelete(gorev){
  
    
      let memeoryarray;
        
        if(localStorage.getItem("görevlerlistesi") === null){
           memeoryarray = [];
           
           }else{
          
        memeoryarray =  JSON.parse(localStorage.getItem("görevlerlistesi"));
           // gıne arraya donusturdum delete ıslemlerı ıcın
           }
    
   
      // sımdı en bastakı sıl fonksıyonunda calıstırdıgmız bu localdelete fonksıyonunu ordan degerı alıyor burda bız memeoryarray bunun ıcınden bulup sılıcez eşleşmesı ıcın indexof kullan
    
    
    const deletmindx = memeoryarray.indexOf(gorev);// par degskenındekı yanı parametredekı degerı arıyoruz
   // sımdı tıkladıgım ındexı bulduk ya splice ile silicez
    memeoryarray.splice(deletmindx,1); // yanı tıkladıgım yerın ındexınden basla dedık mesela tıkladııgım yerın ındexı 0 ozman 0 dan başla 1 tane sılecegımızı soyluyoruz
    
    localStorage.setItem("görevlerlistesi",JSON.stringify(memeoryarray));// bunu yenıden yaparız cunku local storagede strıng seklınde gormemız gerekecek
}




















