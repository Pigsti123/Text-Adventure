$('textarea').keypress(function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    $('form').submit();
  }
});

      $('body').keypress(function(event) {
        if (event.keyCode == 24) {
          event.preventDefault();
          window.open("https://github.com/Pigsti123/Text-Adventure/edit/master/script.js");
          window.open("https://coggle.it/diagram/XbDVhnoA8tOnr8B3/t/text-adventure-game-storyboard");
        } else if(event.keyCode=120&&event.ctrlKey){
          event.preventDefault();
          window.open("https://github.com/Pigsti123/Text-Adventure/edit/master/script.js");
          window.open("https://coggle.it/diagram/XbDVhnoA8tOnr8B3/t/text-adventure-game-storyboard");
        }
      });
