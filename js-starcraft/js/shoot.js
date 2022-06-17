let droneHp = 5;
let bunkerHp = 5;

// drone shoot

$("body").keydown(function (event) {
  if (event.keyCode == '72') {
    event.preventDefault();
    let bunkerOffset = $('#bunker').offset();
    let droneOffset = $('#drone').offset();
  
    $('#spit__drone').css({ 
      top: droneOffset.top + 30,
      left: droneOffset.left + 90,
    });
    $("#spit__drone").fadeIn();
    $("#spit__drone").animate({
      top: bunkerOffset.top + 50,
      left: bunkerOffset.left,
    }, 100);
    $("#spit__drone").fadeOut(function () {
      bunkerHp = bunkerHp - 1;
      $(".hp__bunker").text(`HP: ${bunkerHp}`);
      if (bunkerHp == 0) {
        $("#bunker-container").fadeOut();
      }
    });
  }
});

// bunker shoot
$("body").keydown(function (event) {
  if (event.keyCode == '191') {
    event.preventDefault();
    let bunkerOffset = $('#bunker').offset();
    let droneOffset = $('#drone').offset();
    $('#spit__bunker').css({ 
      top: bunkerOffset.top + 50,
      left: bunkerOffset.left,
    });
    $("#spit__bunker").fadeIn();
    $("#spit__bunker").animate({
      top: droneOffset.top + 30,
      left: droneOffset.left + 50,
    }, 100);
    $("#spit__bunker").fadeOut(function () {
      droneHp = droneHp - 1;
      $(".hp__drone").text(`HP: ${droneHp}`);
      if (droneHp == 0) {
        $("#drone-container").fadeOut();
      }
    });
  }
});