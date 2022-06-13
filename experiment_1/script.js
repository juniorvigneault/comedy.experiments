"use strict";

const audio = new Audio("assets/sounds/man_moan_1.wav")
audio.volume = 0.1;
let sounds = [];
  const sources = ['assets/sounds/man_moan_4.wav', 'assets/sounds/man_moan_7.wav', 'assets/sounds/man_moan_8.wav', 'assets/sounds/man_moan_10.wav', 'assets/sounds/man_moan_11.wav', 'assets/sounds/man_moan_12.wav', 'assets/sounds/man_moan_13.wav', 'assets/sounds/man_moan_14.wav'];
  // const sources = ['assets/sounds/man_moan_1.wav', 'assets/sounds/man_moan_2.wav', 'assets/sounds/man_moan_3.wav', 'assets/sounds/man_moan_4.wav', 'assets/sounds/man_moan_5.wav', 'assets/sounds/man_moan_6.wav', 'assets/sounds/man_moan_7.wav', 'assets/sounds/man_moan_8.wav', 'assets/sounds/man_moan_9.wav', 'assets/sounds/man_moan_10.wav', 'assets/sounds/man_moan_11.wav', 'assets/sounds/man_moan_12.wav', 'assets/sounds/man_moan_13.wav', 'assets/sounds/man_moan_14.wav'];

  for (let i = 0; i < sources.length; i++) {
      sounds[i] = new Audio(sources[i]);
  }


function playRandomSound() {
    const randomNumber = Math.floor(Math.random() * 8);

    sounds[randomNumber].play();
    sounds[randomNumber].volume = 0.1;

}

$("form").attr('autocomplete', 'off');

$('document').ready(function() {
  });

$("#dialog-form").dialog({
modal: false,
buttons: {
  "Log in": function() {
    // $(this).dialog("close");
    $( this ).toggle("explose");

    // console.log('close')
  }
}
});

$( "#name" ).keypress(function() {
  // console.log('input')
  $( "#dialog-form" ).effect("bounce", {times:3, distance: 10, times: 3}, 200);
  $( "body" ).effect('highlight',{color: 'pink'}, 200);
  // audio.play();
playRandomSound();
});

$( "#email" ).keypress(function() {
  // console.log('input')
  $( "#dialog-form" ).effect("bounce", {times:3, distance: 10, times: 3}, 200);
  $( "body" ).effect('highlight',{color: 'pink'}, 200);
  // audio.play();
playRandomSound();
});

$( "#password" ).keypress(function() {
  // console.log('input')
  $( "#dialog-form" ).effect("bounce", {times:3, distance: 10, times: 3}, 200);
  $( "body" ).effect('highlight',{color: 'pink'}, 200);
  // audio.play();
playRandomSound();
});
