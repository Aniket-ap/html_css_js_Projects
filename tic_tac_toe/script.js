$(document).ready(function(){
            

    function insert(){

       for(let i=0;i<$("td").length;i++){

        //console.log(("td").length) o/p = 9

        var alternate = 0;

        $("td").eq(i).on("click", function(){

            if($("td").eq(i).html() == ""){
                
                    if(alternate % 2 == 0){

                        $("td").eq(i).html("X");

                        alternate++;

                        winner();
                        console.log(winner());

                        $("#demo").html("Now O chance");


                        if(winner() == "X"){
                            $("#xwin").css({"left" : "0"});
                            $("#xwin").html("X win");
                        }

                        
                    }else{

                        $("td").eq(i).html("O");

                        alternate++;

                        winner();
                        //console.log(winner());

                        $("#demo").html("Now X chance");

                        if(winner() == "O"){
                            $("#owin").css({"right" : "0"});
                            $("#owin").html("O win");
                        }
                        
                    }
                }else{
                    $("#demo").html("already avaliable");
                }

            });
       }
 
    }
    insert();


    function winner(){ // This function will pick winner 

        // Selecting 9 boxes 
       var b1 = $("#one").html();
       var b2 = $("#two").html();
       var b3 = $("#three").html();
       var b4 = $("#four").html();
       var b5 = $("#five").html();
       var b6 = $("#six").html();
       var b7 = $("#seven").html();
       var b8 = $("#eight").html();
       var b9 = $("#nine").html();
      
        // This function returns the Pop up Reset button after winning
       function reset(){ 

        setTimeout(function(){
            $("#overlay").css({"filter" : "blur(5px)"})
            $("#reset").css({"display" : "block"})
        },5000);

       }
            // This if statements will checks the possibility of winning in rows , columns and in diagonally
            if(b1 != "" && b1 == b2 && b2 == b3){
            reset();
            return b1;
            }

            if(b4 != "" && b4 == b5 && b5 == b6){
            reset();
            return b4;
            }

            if(b7 != "" && b7 == b8 && b8 == b9){
            reset();
            return b7;
            }

            if(b1 != "" && b1 == b4 && b4 == b7){
            reset();
            return b1;
            }

            if(b2 != "" && b2 == b5 && b5 == b8){
            reset();
            return b2;
            }

            if(b3 != "" && b3 == b6 && b6 == b9){
            reset();
            return b3;
            }

            if(b1 != "" && b1 == b5 && b5 == b9){ // checks the same elements Diagonally
            reset();
            return b1;
            }

            if(b3 != "" && b3 == b5 && b5 == b7){ // checks the same elements Diagonally                    
            reset();
            return b3;
            }

            if(b1 != "" && b2 != "" && b3 !="" && b4 != "" && b5 !="" && b6 !="" && b7 != "" && b8 != "" && b9 != ""){
                reset()
                $("#demo").html("Match Tie");
              }


    }


    // Resets the Game

    $("#button").on("click", function(){
        window.location.reload(true);
    })

});