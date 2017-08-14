
// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.

  $(document).ready(function(){
  var Random = Math.floor((Math.random() * 121) + 19);
  $('#compRandom').text(Random);
   wins=0;
   losses=0;
  $('#losses').text(losses);
  $('#wins').text(wins);
 ;

  var wins = 0;
  var losses = 0;
  var userTotal = 0;
 
  var gem1 = Math.floor((Math.random() *13) +1);
  var gem2 = Math.floor((Math.random() *13) +1);
  var gem3 = Math.floor((Math.random() *13) +1);
  var gem4 = Math.floor((Math.random() *13) +1);

function reset() {
  var Random = Math.floor((Math.random() * 121) +19);
  console.log(Random);
  $('#compRandom').text(Random);
  userTotal = 0;
  $('#totalScore').text(userTotal);
  gem1 = Math.floor((Math.random() *13) +1);
  gem2 = Math.floor((Math.random() *13) +1);
  gem3 = Math.floor((Math.random() *13) +1);
  gem4 = Math.floor((Math.random() *13) +1);
}

//Win function
function right() {
  alert("You win...such a winner!");
  wins++; 
  $('#wins').text(wins);
  reset();
}
//loss function
function wrong() {
  alert ("You fail - Try again?");
   wins++; 
  $('#losses').text(losses);
  reset();
}



  $('#gem1').on ('click', function() {
  userTotal = userTotal + gem1;
   
  $('#totalScore').text(userTotal); 
          //sets win/lose conditions
      if (userTotal === Random){
          right();
        }
      else if ( userTotal > Random){
          wrong();
        }   
    })

  $('#gem2').on ('click', function() {
    userTotal = userTotal + gem2;

    $('#totalScore').text(userTotal); 
          //sets win/lose conditions
      if (userTotal === Random){
          right();
        }
        else if ( userTotal > Random){
          wrong();
        } 
    })

  $('#gem3').on ('click', function() {
    userTotal = userTotal + gem3;
    
    $('#totalScore').text(userTotal); 
          //sets win/lose conditions
        if (userTotal === Random){
          right();
        }
        else if ( userTotal > Random){
          wrong();
        }    
    })

  $('#gem4').on ('click', function() {
    userTotal = userTotal + gem4;
    
    $('#totalScore').text(userTotal); 
     console.log(userTotal)   
        if (userTotal === Random){
          right();
        }else if
         ( userTotal > Random){
          wrong();
     }

    });
});

