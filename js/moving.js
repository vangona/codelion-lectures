let bunkerContainerOffset = $('#bunker-container').offset();
let droneContainerOffset = $('#drone-container').offset();

// drone

$('body').keydown(function(event) { 
    if (event.keyCode == '87') { 
        event.preventDefault(); 
        $('#drone-container').animate({
            top: droneContainerOffset.top - 50,
        }, 50);
        droneContainerOffset.top = droneContainerOffset.top - 50;
    } else if (event.keyCode == '83') {
        event.preventDefault(); 
        $('#drone-container').animate({
            top: droneContainerOffset.top + 50,
        }, 50);
        droneContainerOffset.top = droneContainerOffset.top + 50;
    } else if (event.keyCode == '65') {
        event.preventDefault(); 
        $('#drone-container').animate({
            left: droneContainerOffset.left - 50,
        }, 50);
        droneContainerOffset.left = droneContainerOffset.left - 50;
    } else if (event.keyCode == '68') {
        event.preventDefault(); 
        $('#drone-container').animate({
            left: droneContainerOffset.left + 50,
        }, 50);
        droneContainerOffset.left = droneContainerOffset.left + 50;
    }
})

// bunker

$('body').keydown(function(event) { 
    if (event.keyCode == '38') { 
        event.preventDefault(); 
        $('#bunker-container').animate({
            top: bunkerContainerOffset.top - 50,
        }, 50);
        bunkerContainerOffset.top = bunkerContainerOffset.top - 50;
    } else if (event.keyCode == '40') {
        event.preventDefault(); 
        $('#bunker-container').animate({
            top: bunkerContainerOffset.top + 50,
        }, 50);
        bunkerContainerOffset.top = bunkerContainerOffset.top + 50;
    } else if (event.keyCode == '37') {
        event.preventDefault(); 
        $('#bunker-container').animate({
            left: bunkerContainerOffset.left - 50,
        }, 50);
        bunkerContainerOffset.left = bunkerContainerOffset.left - 50;
    } else if (event.keyCode == '39') {
        event.preventDefault(); 
        $('#bunker-container').animate({
            left: bunkerContainerOffset.left + 50,
        }, 50);
        bunkerContainerOffset.left = bunkerContainerOffset.left + 50;
    }
})
