// "use strict";

// const audio = new Audio("assets/sounds/keyboard/_1.wav");
// audio.volume = 0.1;
const textarea = document.querySelector("textarea");

let moans = [];
let laugh1 = new Audio("assets/sounds/laugh1.wav");
let laugh2 = new Audio("assets/sounds/laugh2.wav");
let laugh3 = new Audio("assets/sounds/laugh3.wav");

let vocal1 = new Audio("assets/sounds/vocal1.wav");
let vocal2 = new Audio("assets/sounds/vocal2.wav");
let vocal3 = new Audio("assets/sounds/vocal3.wav");
let yes = new Audio("assets/sounds/yes.wav");
let orgasm = new Audio("assets/sounds/orgasm.wav");
let breath = new Audio("assets/sounds/breath.wav");

let isDragged = false;

laugh1.volume = 0.3;
laugh2.volume = 0.3;
laugh3.volume = 0.3;

breath.volume = 0.1;

yes.volume = 0.6;

orgasm.volume = 0.7;

// vocal1.volume = 1.5;
// vocal2.volume = 1.5;
// vocal3.volume = 1.5;

let sexyMusic = new Audio("assets/sounds/sexy-music.wav");
sexyMusic.volume = 0.2;
// no autocomplete in the form
$("form").attr('autocomplete', 'off');



const moan = ['assets/sounds/keyboard/1.wav', 'assets/sounds/keyboard/2.wav', 'assets/sounds/keyboard/3.wav', 'assets/sounds/keyboard/4.wav', 'assets/sounds/keyboard/5.wav', 'assets/sounds/keyboard/6.wav', 'assets/sounds/keyboard/7.wav', 'assets/sounds/keyboard/8.wav', 'assets/sounds/keyboard/9.wav', 'assets/sounds/keyboard/10.wav', 'assets/sounds/keyboard/11.wav', 'assets/sounds/keyboard/12.wav', 'assets/sounds/keyboard/13.wav', 'assets/sounds/keyboard/14.wav', 'assets/sounds/keyboard/15.wav', 'assets/sounds/keyboard/16.wav', 'assets/sounds/keyboard/17.wav', 'assets/sounds/keyboard/18.wav', 'assets/sounds/keyboard/19.wav', 'assets/sounds/keyboard/20.wav', 'assets/sounds/keyboard/21.wav', 'assets/sounds/keyboard/22.wav', 'assets/sounds/keyboard/23.wav', 'assets/sounds/keyboard/24.wav', 'assets/sounds/keyboard/25.wav'];
// const sources = ['assets/sounds/keyboard/_1.wav', 'assets/sounds/keyboard/_2.wav', 'assets/sounds/keyboard/_3.wav', 'assets/sounds/keyboard/_4.wav', 'assets/sounds/keyboard/_5.wav', 'assets/sounds/keyboard/_6.wav', 'assets/sounds/keyboard/_7.wav', 'assets/sounds/keyboard/_8.wav', 'assets/sounds/keyboard/_9.wav', 'assets/sounds/keyboard/_10.wav', 'assets/sounds/keyboard/_11.wav', 'assets/sounds/keyboard/_12.wav', 'assets/sounds/keyboard/_13.wav', 'assets/sounds/keyboard/_14.wav'];

// load all the audio samples in the array
for (let i = 0; i < moan.length; i++) {
  moans[i] = new Audio(moan[i]);
}

// randomize a number and play the sound in the array associated with the number
function playRandomSound() {
  const randomNumber = Math.floor(Math.random() * 25);

  moans[randomNumber].play();
  moans[randomNumber].volume = 0.7;
}

// open the dialog box with the input stuff
$("#iconButton").click(function() {
  $("#dialog-form").dialog("open");
  sexyMusic.loop = true;
  sexyMusic.play();
  breath.play();
  $("#iconButton").hide("slow");
  // $("body").effect('highlight', {
  //   color: '#fcf0f7',
  //   easing: 'swing'
  // }, 1500);
})


// create dialog box with hmtl info
$("#dialog-form").dialog({
  modal: false,
  autoOpen: false,
  minWidth: 600,
  maxWidth: 900,
  minHeight: 670,
  // buttons: {
  //   "OK": function() {
  //     // $(this).dialog("close");
  //     $(this).toggle("explose");
  //     // console.log('close')
  //   }
  // },
 hide: {
     effect: 'explode',
     duration: 3000
 }
});

$('#dialog-form').dialog({
  show: {
    effect: 'slide',
    duration: 4000,
    easing: 'swing'
  },
  drag: function() {
    // $('#dialog-form').effect("bounce", {
    //   times: 2,
    //   distance: 5
    // }, "slow");
console.log('yes')
},
  // hide: {effect: 'fade', duration: 2000}
});



// create checkbox 1

$("#radio-1").checkboxradio({

});

// create checkbox 2

$("#radio-2").checkboxradio({

});

// create checkbox 3

$("#radio-3").checkboxradio({

});

// check if checkbox are checked

let checkBox1 = document.getElementById('radio-1').addEventListener('click', event => {
  if (event.target.checked) {
    console.log('checked')
    laugh1.play();
    $("#dialog-form").effect("bounce", {
      times: 2,
      distance: 5
    }, "slow");
    // $("body").effect('highlight', {
    //   color: '#fcf0f7',
    //   easing: 'swing'
    // }, 1500);
  }
});

let checkBox2 = document.getElementById('radio-2').addEventListener('click', event => {
  if (event.target.checked) {
    console.log('checked')
    laugh2.play();
    $("#dialog-form").effect("bounce", {
      times: 2,
      distance: 5
    }, "slow");
    // $("body").effect('highlight', {
    //   color: '#fcf0f7',
    //   easing: 'swing'
    // }, 1500);
  }
});

let checkBox3 = document.getElementById('radio-3').addEventListener('click', event => {
  if (event.target.checked) {
    console.log('checked')
    laugh3.play();
    $("#dialog-form").effect("bounce", {
      times: 2,
      distance: 5
    }, "slow");
    // $("body").effect('highlight', {
    //   color: '#fcf0f7',
    //   easing: 'swing'
    // }, 1500);
  }
});

// let spinner = document.getElementById('spinner').addEventListener('click', event => {
// console.log('value changed')
// }
// )

// $('#dialog-form').resizable({
//   resize: function(){
//     console.log('resized')
//   }
// })

// $( "#dialog-form" ).on( "resize", function( event, ui ) {
//   console.log('ehll')
// } );
//

$("#speed").selectmenu({
  change: function(event, data) {
    $('#dialog-form').effect("bounce", {
      times: data.item.value,
      distance: data.item.value + 1
    }, "slow");
    $("fieldset").effect('highlight', {
      color: '#fcf0f7',
      easing: 'swing'
    }, 1000);
    if (data.item.value == 1){
      vocal1.play();
    }
    else if (data.item.value == 2){
      vocal2.play();
    }
    else if(data.item.value == 3){
      vocal3.play();
      console.log('3')
    }
  }
});

// create datepicker

$("#datepicker").datepicker({
  changeMonth: true,
  changeYear: true,
  yearRange: "1940:2020",
});

let datePicker = document.getElementById('datepicker').addEventListener('click', event => {

    $("#dialog-form").effect("bounce", {
      times: 2,
      distance: 20
    }, "slow");
    yes.play();
    $("fieldset").effect('highlight', {
      color: '#fcf0f7',
      easing: 'swing'
    }, 1000);
    // $("body").effect('highlight', {
    //   color: '#fcf0f7',
    //   easing: 'swing'
    // }, 1500);

});


// // create spinner menu
// $("#spinner").spinner({
//   min: 0,
// });

// if player inputs keyboard then play sexy sounds with wiggle and pink highlight
$("#inputBox").keypress(function() {
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


textarea.addEventListener("input", ({ currentTarget: target }) => {
  const maxLength = target.getAttribute("maxlength");
  const currentLength = target.value.length;

  if (currentLength >= maxLength) {
    $("#dialog-form").dialog('close')
    sexyMusic.pause();
    orgasm.play();
    $("body").effect('highlight', {
      color: '#fcf0f7'
    }, 3000);
  }

  // console.log(`${maxLength - currentLength} chars left`);
});

// $("#speed").selectmenu();
