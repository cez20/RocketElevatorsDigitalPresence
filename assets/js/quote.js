// Jquery function : HideShow//
$(document).ready(function() {
    $('.questions').hide();
    
    $('#building-type').change(function() {
        $('.questions').hide();
        $('.'+$(this).val()).show();
    })
    
})  

//Function to evaluate number of elevators necessary //

function nbrElevators(){
    var numberOfApartments = document.getElementById("number-of-apartments1").value;
    var numberOfFloors = document.getElementById("number-of-floors1").value;
    var numberOfBasements = document.getElementById("number-of-basements1").value;
    var maximumOccupancy = document.getElementById("maximum-occupancy1").value;
    var buildingType = document.getElementById("building-type");
    var selectedIndex = buildingType.selectedIndex;
    var selectedValue = buildingType.options[selectedIndex].value;
    var x = document.getElementById("number-of-elevators1").value;

    if(selectedValue ==="residential" && numberOfFloors <= 20){ 
        var averagePerFloor = numberOfApartments/numberOfFloors;
        var result = Math.ceil(averagePerFloor/6);
        document.getElementById("totalElevators").value = result;
       
    }else if(selectedValue ==="residential" && numberOfFloors > 20){ 
        var averagePerFloor = numberOfApartments/numberOfFloors;
        var result = Math.ceil(averagePerFloor/6);
        var column = Math.ceil(numberOfFloors/20);
        document.getElementById("totalElevators").value = result * column;
    
    }else if(selectedValue ==="commercial"){
        document.getElementById("totalElevators").value = x;

    }else if(selectedValue ==="corporate" || selectedValue ==="hybrid"){ 
        var FloorWithBasements = +numberOfFloors + +numberOfBasements;
        var totalOccupancy = maximumOccupancy * FloorWithBasements;
        var nbrOfElevators = Math.ceil(totalOccupancy / 1000);
        var column = Math.ceil(FloorWithBasements / 20);
        var averageElevatorsPerColumn = Math.ceil(nbrOfElevators / column);
        document.getElementById("totalElevators").value = averageElevatorsPerColumn * column;   
    }
}

    // function to erase content of different values orf input when switching building-type //

function resetField(){
        document.getElementById("number-of-apartments1").value = 0;
        document.getElementById("number-of-floors1").value = 0;
        document.getElementById("number-of-basements1").value = 0;
        document.getElementById("number-of-companies1").value = 0;
        document.getElementById("number-of-parking-spots1").value = 0;
        document.getElementById("number-of-elevators1").value = 0;
        document.getElementById("number-of-corporations1").value = 0;
        document.getElementById("maximum-occupancy1").value = 0;
        document.getElementById("business-hours1").value = 0;
        document.getElementById("totalElevators").value = 0;
        document.getElementById("elevatorUnitPrice").value = 0;
        document.getElementById("totalElevatorAmount").value = 0;
        document.getElementById("installationFee").value = 0;
        document.getElementById("totalCost").value = 0;
        
}
    
// Function to show right unit amount based on radio button//

function rightAmount(){

    if(document.getElementById("standard").checked){

        var elevatorUnitPrice = 7565;
        var totalElevatorAmount = document.getElementById("totalElevators").value * elevatorUnitPrice;
        var installationFee = 0.10 * totalElevatorAmount;
        var totalCost = totalElevatorAmount + installationFee;


        document.getElementById("elevatorUnitPrice").value = changeCurrency(elevatorUnitPrice);
        document.getElementById("totalElevatorAmount").value = changeCurrency(totalElevatorAmount);
        document.getElementById("installationFee").value = changeCurrency(installationFee);
        document.getElementById("totalCost").value = changeCurrency(totalCost);


    }else if(document.getElementById("premium").checked){ 

        var elevatorUnitPrice = 12345;
        var totalElevatorAmount = document.getElementById("totalElevators").value * elevatorUnitPrice;
        var installationFee = 0.13 * totalElevatorAmount;
        var totalCost = totalElevatorAmount + installationFee;

        document.getElementById("elevatorUnitPrice").value = changeCurrency(elevatorUnitPrice);
        document.getElementById("totalElevatorAmount").value = changeCurrency(totalElevatorAmount);
        document.getElementById("installationFee").value = changeCurrency(installationFee);
        document.getElementById("totalCost").value = changeCurrency(totalCost);


    }else if(document.getElementById("excelium").checked){ 

        var elevatorUnitPrice = 15400;
        var totalElevatorAmount = document.getElementById("totalElevators").value * elevatorUnitPrice;
        var installationFee = 0.16 * totalElevatorAmount;
        var totalCost = totalElevatorAmount + installationFee;

        document.getElementById("elevatorUnitPrice").value = changeCurrency(elevatorUnitPrice);
        document.getElementById("totalElevatorAmount").value = changeCurrency(totalElevatorAmount);
        document.getElementById("installationFee").value = changeCurrency(installationFee);
        document.getElementById("totalCost").value = changeCurrency(totalCost);

    }
}

//function that send alerts when click on submit email

function sentValidation(){
    alert ("Your subscription has been successfully done");
}


//function that change text input into a USD dollar format//

function changeCurrency(inputText){
   
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputText);

}
