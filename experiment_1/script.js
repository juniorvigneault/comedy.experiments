"use strict";

const audio = new Audio("assets/sounds/man_moan_1.wav")
audio.volume = 0.1;
let sounds = [];
// no autocomplete in the form
$("form").attr('autocomplete', 'off');

const sources = ['assets/sounds/man_moan_4.wav', 'assets/sounds/man_moan_7.wav', 'assets/sounds/man_moan_8.wav', 'assets/sounds/man_moan_10.wav', 'assets/sounds/man_moan_11.wav', 'assets/sounds/man_moan_12.wav', 'assets/sounds/man_moan_13.wav', 'assets/sounds/man_moan_14.wav'];
// const sources = ['assets/sounds/man_moan_1.wav', 'assets/sounds/man_moan_2.wav', 'assets/sounds/man_moan_3.wav', 'assets/sounds/man_moan_4.wav', 'assets/sounds/man_moan_5.wav', 'assets/sounds/man_moan_6.wav', 'assets/sounds/man_moan_7.wav', 'assets/sounds/man_moan_8.wav', 'assets/sounds/man_moan_9.wav', 'assets/sounds/man_moan_10.wav', 'assets/sounds/man_moan_11.wav', 'assets/sounds/man_moan_12.wav', 'assets/sounds/man_moan_13.wav', 'assets/sounds/man_moan_14.wav'];

// load all the audio samples in the array
for (let i = 0; i < sources.length; i++) {
  sounds[i] = new Audio(sources[i]);
}

// randomize a number and play the sound in the array associated with the number
function playRandomSound() {
  const randomNumber = Math.floor(Math.random() * 8);

  sounds[randomNumber].play();
  sounds[randomNumber].volume = 0.1;
}

$("#iconButton").click(function(){
  $("#dialog-form").dialog("open");
})

$("#dialog-form").dialog({
  modal: false,
  autoOpen: true,
  minWidth: 600,
  maxWidth: 900,
  minHeight: 750,
  buttons: {
    "Log in": function() {
      // $(this).dialog("close");
      $(this).toggle("explose");
      // console.log('close')
    }
  }
});

$("#radio-1").checkboxradio({

});

let checkBox1 = document.getElementById('radio-1').addEventListener('click', event => {
	if(event.target.checked) {
    console.log('checked')
	}
});

let checkBox2 = document.getElementById('radio-2').addEventListener('click', event => {
	if(event.target.checked) {
    console.log('checked')
	}
});

let checkBox3 = document.getElementById('radio-3').addEventListener('click', event => {
	if(event.target.checked) {
    console.log('checked')
	}
});

$("#radio-2").checkboxradio({

});

$("#radio-3").checkboxradio({

});

$( "#datepicker" ).datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "1940:2020"
  });

$("#speed").selectmenu();

$("#spinner").spinner({
  min: 0,
});

$("#name").keypress(function() {
  // console.log('input')
  $("#dialog-form").effect("bounce", {
    times: 3,
    distance: 10,
    times: 3
  }, 200);
  $("body").effect('highlight', {
    color: 'pink'
  }, 200);
  // audio.play();
  playRandomSound();
});

$("#email").keypress(function() {
  // console.log('input')
  $("#dialog-form").effect("bounce", {
    times: 3,
    distance: 10,
    times: 3
  }, 200);
  $("body").effect('highlight', {
    color: 'pink'
  }, 200);
  // audio.play();
  playRandomSound();
});

$("#password").keypress(function() {
  // console.log('input')
  $("#dialog-form").effect("bounce", {
    times: 3,
    distance: 10,
    times: 3
  }, 200);
  $("body").effect('highlight', {
    color: 'pink'
  }, 200);
  // audio.play();
  playRandomSound();
});
