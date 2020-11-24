function rolldice()
{
        // player1

       var randomNum1 = Math.floor(Math.random() * 6)+1;
       var randomImage1 ="img/dice"+ randomNum1 + ".png";

        var image1=document.querySelectorAll("img")[0];
        image1.setAttribute("src",randomImage1);



           // player 2

       var randomNum2 = Math.floor(Math.random() * 6)+1;
       var randomImage2 ="img/dice"+ randomNum2 + ".png";


       var image2=document.querySelectorAll("img")[1];
       image2.setAttribute("src",randomImage2);





        // player 3
       var randomNum3 = Math.floor(Math.random() * 6)+1;
       var randomImage3 ="img/dice"+ randomNum3 + ".png";

       var image3=document.querySelectorAll("img")[2];
       image3.setAttribute("src",randomImage3);


     if(randomImage3 >randomImage1)
       if(randomImage3 >randomImage2)
   {
       document.querySelector("h1").innerHTML= "player 3 wins!"
   }
   else
   {
       document.querySelector("h1").innerHTML= "draw match!"

   }

 
     if(randomNum1 > randomNum2)
       {
           if(randomNum1 > randomNum3)
           {
               document.querySelector("h1").innerHTML= "player 1 Wins !";
           }
           else
           {
            document.querySelector("h1").innerHTML=" draw match !"
           }
       }

        else if(randomImage2 > randomImage3)
       {
           if(randomImage2 > randomImage1)
           {
            
            document.querySelector("h1").innerHTML=  "player 2 wins !"
            }
          else
          {
            document.querySelector("h1").innerHTML= "draw match!"
          }
        }

               
      
    }
        
       
       
       




