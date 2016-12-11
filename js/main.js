$(function () {
    
    var slideCount= $('.single-slide').length;
    var slideWidth= 100 /slideCount; //zmienna oblicza wielkość obrazka
    var slideShow= $('.slide-show');
    var slideIndex= 0;
    
    
    console.log(slideCount);
    
    /*nadaje szerokość kontenerowi slideshow mam 500%szer*/
    slideShow.css('width', slideCount * 100 +"%");  
    
    /*interacja po wszystkich slajdach i nadanie im marginesów i szerokości*/
    slideShow.find('.single-slide').each(function(index) {
        $(this).css({"width":slideWidth + "%", "left": index * slideWidth + "%"}); 
    });
        
        
    /*Wywołaie funkcji slide*/ 
    //przycisk poprzedni-wywołanie funkcji slide()    
    $(".prev-slide").click(function(){
        slide(slideIndex -1); //jako paramter przekazuje nowy index slajdu  
    });
    
    //przycisk następny - wywołanie funkcji    
    $(".next-slide").click(function(){
        slide(slideIndex +1);// jako parametr przekuzjemy nowy index slajd
    });
        
        
    function slide(newSlideIndex) {
        console.log(newSlideIndex);
        if(newSlideIndex < 0 || newSlideIndex >= slideCount ){
            return;
        }
        var marginLeft = (newSlideIndex * (-100)) + "%";
        
         /*wywołanie animacji na elemencie slideShow, która przesunie go w lewy magines równy zmiennej marginLeft*/
         slideShow.animate({"marginLeft" : marginLeft}, 800,function () {
             slideIndex = newSlideIndex;
         });
    }
});
        


        
     
  
        



    


        
    
      
   
 