        function updateImage() {

          var d = new Date();
          var h = d.getDate().toString();
            console.log(h);
          var m = d.getMinutes().toString();

          var img = h+'.jpg';
          var el = document.getElementById('image');
          var src = 'images/bg/' + img;
          el.setAttribute('src', src);

        }

        window.onload=function () {

            // we create a variable to hold a reference to the img element
            var img = document.getElementById('image');
            // we change the img properties (attributes) as requried
            img.width = 800;
            img.height = 400;
            img.alt = "Hello.";
            //updateImage();
            // we use the  setInterval method to call the updateImage() function every 60000millisceonds = 60 seconds = 1minute
            setInterval(updateImage(),10000);
        }