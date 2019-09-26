var numDumplings = 0;


function myFunction() {
  numDumplings += 1,
    document.getElementById("demo").innerHTML = numDumplings;
  switch (numDumplings) {
    case 10:
      textToPlayer = "You have bought 10+ dumplings!";
      break;
    case 30:
      textToPlayer = "Wow, 30!";
      break;
    case 40:
      textToPlayer = "You're starting to get good!";
      break;
    case 50:
      textToPlayer = "Halfway there!";
      break;
    case 100:
      textToPlayer = "Very nice.";
      break;
    default:
  }
  document.getElementById("messages").innerHTML = textToPlayer;
}
/* Et forsøg på at kunne ændre mængden af dumplings klikket.

function dumplingsEqual(){
  document.getElementById("demo").innerHTML = document.getElementById("textInput").innerHTML;
}*/
