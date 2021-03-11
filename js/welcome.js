"use strict"
let occupations = [];

$(function () {
    //onload- get occupation ddl options
    $.getJSON("data/occupations.json", function (results) {
        occupations = results;
        loadOccupations();
    });

    $("#submitBtn").on("submit", clearError);
});


function loadOccupations() {
    let length = occupations.length;
    for (let i = 0; i < length; i++) {
        let newOption = $("<option value='" + occupations[i].title + "'>" + occupations[i].title + "</option>")
        $("#occupationsDdl").append(newOption)
    }
}


function clearError() {
    $("#errorDiv").html("");
    validateAgeOccupation();
}


function validateAgeOccupation() {
    if (validateOccupation == false || validateAge == false) {
        displayError;
        return false;
    }
    else {
        return true;
    }
}


function validateOccupation() {
    //check occupations[i].vaild - if no then display message 
    let length = occupations.length;
    for (let i = 0; i < length; i++) {
        if ($("#occupationsDdl option:selected").val() == "-1") {
            $("#errorDiv").html("Please select an occupation");
        }
        else {
            let selection = $("#occupationsDdl option:selected").val();
            let length = occupations.length;
            for (let i = 0; i < length; i++) {
                if (selection == occupations[i].title && occupations[i].valid == true) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }
}


function validateAge() {
    if (age < 55 && $("#hasCondition").is(':checked')) {
        return true;
    }
    if (age > 55) {
        return true;
    }
    else {
        return false;
    }
}


function displayError() {
    $("#errorDiv").html("You are currently not eligible based off of age or occupation. Please check with your state for eligibility requirements.");
} 