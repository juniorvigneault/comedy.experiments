"use strict";

const audio = new Audio("assets/sounds/man_moan_1.wav")
audio.volume = 0.1;
let sounds = [];
  const sources = ['assets/sounds/man_moan_1.wav', 'assets/sounds/man_moan_2.wav', 'assets/sounds/man_moan_3.wav'];
  for (let i = 0; i < sources.length; i++) {
      sounds[i] = new Audio(sources[i]);
  }


function playRandomSound() {
    const randomNumber = Math.floor(Math.random() * 3);

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
