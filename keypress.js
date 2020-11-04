$(document).ready(function()
    {
       $("#textBoxOne").change(textBoxHeardChange);
       $("#textBoxTwo").keypress(textBoxHadKeypress);

       function textBoxHeardChange() {

           // make a new random number
           var randomNumber = Math.random();

           // output number to the paragraph
           $("#output").text(randomNumber);
       }

        function textBoxHeardKeypress(event)
        {

            var character = event.key;




        }


       });