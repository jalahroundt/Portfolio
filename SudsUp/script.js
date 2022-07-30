$(document).ready(function(){
    $("#dropdown-icon").click(function(){
      $(".dropdown-menu").toggle("smooth");
    });

    var noInterior = $("<h4></h4>").text("No Interior Cleaning");
    var vaccuming = $("<h4></h4>").text("Carpet and Seat Vacuuming");
    var simpleWash = $("<h4></h4>").text("Simple Wash with our suds formula");
    var deluxeWash = $("<h4></h4>").text("Deluxe Wash with our premium suds formula");
    var extremeWash = $("<h4></h4>").text("Extreme wash with our bubble suds formula");
    var premiumWindows = $("<h4></h4>").text("Premium window washing");
    var extremeWindows = $("<h4></h4>").text("Extreme window washing");
    var fragrance = $("<h4></h4>").text("Fragrance added");
    var hotWax = $("<h4></h4>").text("Suds formula hot wax");
    var rimCleaning = $("<h4></h4>").text("Rim cleaning");
    var rainShield = $("<h4></h4>").text("Rain shield");
    var interiorWash = $("<h4></h4>").text("All interior surfaces cleaned");


    /* Desktop Tab Cards */
    $("#small-tab").click(function(){
        $("#desktop-interior-desc").empty();
        $("#desktop-exterior-desc").empty();

        $("#desktop-interior-desc").append(noInterior);
        $("#desktop-exterior-desc").append(simpleWash);
    });
    $("#premium-tab").click(function(){
        $("#desktop-interior-desc").empty();
        $("#desktop-exterior-desc").empty();

        $("#desktop-interior-desc").append(vaccuming);
        $("#desktop-exterior-desc").append(deluxeWash);
    });
    $("#members-tab").click(function(){
        $("#desktop-interior-desc").empty();
        $("#desktop-exterior-desc").empty();

        $("#desktop-interior-desc").append(vaccuming, fragrance);
        $("#desktop-exterior-desc").append(deluxeWash,premiumWindows);
    });
    $("#extreme-tab").click(function(){
        $("#desktop-interior-desc").empty();
        $("#desktop-exterior-desc").empty();

        $("#desktop-interior-desc").append(vaccuming, interiorWash, fragrance);
        $("#desktop-exterior-desc").append(extremeWash, extremeWindows, hotWax,rimCleaning,rainShield);
    });


    /* Mobile Select Menu */
    function smallSudsMobileDesc(){
        $("#mobile-interior-desc").empty();
        $("#mobile-exterior-desc").empty();

        $("#mobile-interior-desc").append(noInterior);
        $("#mobile-exterior-desc").append(simpleWash);
    }
    function premiumSudsMobileDesc(){
        $("#mobile-interior-desc").empty();
        $("#mobile-exterior-desc").empty();

        $("#mobile-interior-desc").append(vaccuming);
        $("#mobile-exterior-desc").append(deluxeWash);
    }
    function membersSudsMobileDesc(){
        $("#mobile-interior-desc").empty();
        $("#mobile-exterior-desc").empty();

        $("#mobile-interior-desc").append(vaccuming, fragrance);
        $("#mobile-exterior-desc").append(deluxeWash, premiumWindows);
    }
    function extremeSudsMobileDesc(){
        $("#mobile-interior-desc").empty();
        $("#mobile-exterior-desc").empty();
        
        $("#mobile-interior-desc").append(vaccuming, interiorWash, fragrance);
        $("#mobile-exterior-desc").append(extremeWash, extremeWindows, hotWax, rimCleaning, rainShield);
    }

    $("#mobile-menu").on('change',function(){
        if($("#mobile-menu").val() == "Small Suds") smallSudsMobileDesc();
            else if ($("#mobile-menu").val() == "Premium Suds") premiumSudsMobileDesc();
            else if ($("#mobile-menu").val() == "Members Only") membersSudsMobileDesc();
            else if ($("#mobile-menu").val() == "Extreme Suds") extremeSudsMobileDesc();
    });

    var validator = $( "#member-form" ).validate({
    });

    validator.form();

  });