let btngorevekle;


btngorevekle = document.querySelector(".btn-gorev-ekle");


 const  upul = document.querySelector(".gorev-listesi"); 





let gorevsıltamamla = (e) =>{
    
   const tklanılan =  e.target;
    
    if(tklanılan.classList.contains("gorev-btn-tamamlandi")){

  
      
        
      
        
        tklanılan.parentElement.classList.toggle("gorev-tamamlandi");
        
    } if(tklanılan.classList.contains("gorev-btn-sil")){
        
        if(confirm("Emin misiniz")){
            
        
        
          tklanılan.parentElement.classList.toggle("kaybol");
        const deletevalum = tklanılan.parentElement.children[0].innerText;
        
        localdelete(deletevalum);
    
        
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
    
       
        
      let memeoryarray;
        
        if(localStorage.getItem("görevlerlistesi") === null){
           memeoryarray = [];
           
           }else{
          
        memeoryarray =  JSON.parse(localStorage.getItem("görevlerlistesi"));
           
           }
       
         
            memeoryarray.push(newsgorev);   
               
             
        localStorage.setItem("görevlerlistesi",JSON.stringify(memeoryarray));  
    
}

   





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

   const gorelı = document.createElement("li");
    gorelı.classList.add("gorev-tanim");
    gorelı.innerText = gorev;
    
   yenıdıv.appendChild(gorelı);
  
   
      upul.appendChild(yenıdıv);

   
    
    const btn = document.createElement("button");
    btn.classList.add("gorev-btn");
    btn.classList.add("gorev-btn-tamamlandi"); 
    
    btn.innerHTML ="<i class='fas fa-check'></i>";  
    
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
      
           }
    
   
     
    
    const deletmindx = memeoryarray.indexOf(gorev);
    memeoryarray.splice(deletmindx,1);
    
    localStorage.setItem("görevlerlistesi",JSON.stringify(memeoryarray));
}




















