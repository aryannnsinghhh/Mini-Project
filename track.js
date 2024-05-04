$(document).ready(function() {
    // Define the order of status indicators
    var statuses = ["Order Processed", "Order Shipped", "Order En Route", "Order Arrived"];

    // Set initial status
    var currentStatus = 0;

    // Function to update progress bar
    function updateProgressBar() {
        // Remove active class from all steps
        $("#progressbar li").removeClass("active");

        // Add active class to current step
        $("#progressbar li:lt(" + (currentStatus + 1) + ")").addClass("active");

        // Move to next status (if not the last one)
        if (currentStatus < statuses.length - 1) {
            currentStatus++;
        } else {
            currentStatus = 0; // Reset to start
        }
    }

    // Initial call to start progress
    setInterval(updateProgressBar, 1000); // Change duration here (in milliseconds)
});
$(document).ready(function() {
    $("#updateAddr").click(function() {
        var newOrder = $("#addrInput").val();
        $("#order span").text("#" + newOrder);
    });
});
$(document).ready(function() {
    $("#updateAddr").click(function() {
        // Generate a random number between 100000000000000000000 and 999999999999999999999
        var newAddr = Math.floor(Math.random() * 999999999999999999999) + 100000000000000000000;
        $("#addrNumber").text(newAddr);
    });
});
