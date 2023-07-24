$(document).ready(function () {
    let result = $("#result");
    let isOn = true;
  
    function toggleCalculator(enable) {
      $(".btn:not(#btn-power)").prop("disabled", !enable);
      result.val("");
    }
  
    toggleCalculator(isOn);
  
    $(".btn").on("click", function () {
      if (!isOn) return;
  
      let buttonText = $(this).text();
      let currentResult = result.val();
  
      if (buttonText === "C") {
        result.val("");
      } else if (buttonText === "←") {
        result.val(currentResult.slice(0, -1));
      } else if (buttonText === "=") {
        try {
          result.val(eval(currentResult));
        } catch (e) {
          result.val("Error");
        }
      } else {
        result.val(currentResult + buttonText);
      }
    });
  
    $("#btn-power").on("click", function () {
      isOn = !isOn;
      toggleCalculator(isOn);
    });
  });
  