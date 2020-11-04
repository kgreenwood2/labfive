$(document).ready(function()
{
    $("form").submit(placeOrder);



    function placeOrder(event)
    {

        event.preventDefault();
        var checkedBoxes = $("input[name=rank]:checked");
        var corp = $("#rank-Major").css("color","red");
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
        var militaryRank = checkedBoxes.val();
        var selectedColor = checkedBoxes.data("color");

        $("p").text(militaryRank + firstName + lastName).css("color",selectedColor);
    }
});