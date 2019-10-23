window.onerror = function(msg, url, linenumber) { alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber); return true; }


function readnWrite(){
  var text =  document.getElementById('input').value;
  document.getElementById('input').value='';
  var p = document.createElement('span');p.innerHTML='>'+text;
  document.body.appendChild(p);
  respond();
  var br = document.createElement('br');
  document.body.appendChild(br);
  window.scrollTo(window.innerHeight, 0);
  return false;
}
function respond(){
  //say(rooms.room.[text]);
}
function say(messgae){
  var t = document.createElement('span');t.innerHTML=messgae;
  document.body.appendChild(t);
  var br = document.createElement('br');
  document.body.appendChild(br);
}
var room=0;
var items=0;

var rooms={
  one:{
    "look":"It is a cold, miserable night with thunder pounding outside and rain drilling the houses derelict, run down scaly roof. You are afraid.\nVery afraid. Your room is empty, your window shattered, the front door creaking open and shut. You would do anything, anything, to be\nable to leave. But you know you must wait. You must wait and wait. And just as your about to burst in to tears, losing control of everything,\nyou hear the footsteps. The footsteps of the man. It's time.\nWhat do you do?"
  }
}
function delay(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
