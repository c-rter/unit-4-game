$(document).ready(function() {

  var win = 0, loss = 0, 
  crystalValue1 = 0, crystalValue2 = 0, 
  crystalValue3 = 0, crystalValue4 = 0,
  goalNumber = 0, runningTotal = 0,
  indefinite = "yes", gameValue = 0;

  $("#runningTotalScore").text(runningTotal);
  $("#lossCount").text(loss);
  $("#winCount").text(win);
  resetGame();
  
  function resetGame() {
        goalNumber = Math.floor(Math.random() * 120) + 18;
        $("#mainNumberToMatch").text(goalNumber);
        crystalValue1 = Math.floor(Math.random() * 12) + 1;
        crystalValue2 = Math.floor(Math.random() * 12) + 1;
        crystalValue3 = Math.floor(Math.random() * 12) + 1;
        crystalValue4 = Math.floor(Math.random() * 12) + 1;
        runningTotal = 0;
        $("#runningTotalScore").text(runningTotal);
      }

  function testFunction () {

        if (runningTotal === goalNumber) {
          win++;
          $("#winCount").text(win);
          resetGame();
        }
        if (runningTotal > goalNumber) {
          loss++;
          $("#lossCount").text(loss);
          resetGame();
        }               
}

      $("#crystal1").on("click", function() {
        runningTotal += crystalValue1;
        $("#runningTotalScore").text(runningTotal);
      }).on("click", testFunction);

      $("#crystal2").on("click", function() {
        runningTotal += crystalValue2;
        $("#runningTotalScore").text(runningTotal);
      }).on("click", testFunction);

      $("#crystal3").on("click", function() {
        runningTotal += crystalValue3;
        $("#runningTotalScore").text(runningTotal);
      }).on("click", testFunction);

      $("#crystal4").on("click", function() {
        runningTotal += crystalValue4;
        $("#runningTotalScore").text(runningTotal);
      }).on("click", testFunction);

      

});