$(document).ready(function()
{
    $("form").submit(placeOrder);
    $("input[name=soap]").change(updateOrder);

    function updateOrder()
    {
        // when checkboxes change

        // find out how many checkboxes are checked

        // ask jquery for all the checked soap boxes
        var checkedBoxes = $("input[name=soap]:checked");

        // find out how many boxes that is
        var numSelected = checkedBoxes.length;


        // update the quantity span with the number
        $("#quantity").text(numSelected);

    }

    function placeOrder(event)
    {
        // stop form from submitting
        event.preventDefault();

        // when the form is submitted

        // calculate the cost of selected soaps
        var subtotal = 0;
        var productSummary = "";

        var checkedBoxes = $("input[name=soap]:checked");

        // loop over all checkboxes and add up their data-price value
        checkedBoxes.each(function() {
            // add the price to the total variable
            subtotal += $(this).data("price");
            // concatenate the value attribute to the string variable
            productSummary += $(this).val();
            productSummary += " ";
        });

        // get the selected radio button with name="shipping"
        var selectedButton = $("input[name=shipping]:checked");

        // get the data-shipping value from the selected radio button
        var shippingCost = selectedButton.data("shipping");

        // calc grand total
        var orderTotal = subtotal + shippingCost;

        // put output in <td> elements with dollar/cents
        $("#subtotal").text(subtotal.toFixed(2));
        $("#shippingCost").text(shippingCost.toFixed(2));
        $("#grandTotal").text(orderTotal.toFixed(2));
        $("#summary").text(productSummary);
    }
});