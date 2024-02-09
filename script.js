//your JS code here. If required.
 function setBackgroundImage() {
      if (window.innerHeight > window.innerWidth) {
        document.body.style.backgroundImage = "url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg')";
      } else {
        document.body.style.backgroundImage = "url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg')";
      }
    }

    // Set background image on page load
    setBackgroundImage();

    // Set background image on window resize
    window.onresize = function() {
      setBackgroundImage();
    };