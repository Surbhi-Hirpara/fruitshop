//Available Stock Information
var availableCabbage = 6, availableLettuce = 12, availablePumpkin = 7, availableWatermelon = 8, availablePapaya = 4, availablePineapple = 18;
var priceCabbage = 4.99, priceLettuce = 2.99, pricePumpkin = 3.99, priceWatermelon = 7.99, pricePapaya = 4.99, pricePineapple = 3.96;
var totalCabbage = 0, totalLettuce = 0, totalPumpkin = 0, totalWatermelon = 0, totalPapaya = 0, totalPineapple = 0;
var cabbageOrder = 0, lettuceOrder = 0, pumpkinOrder = 0, watermelonOrder = 0, papayaOrder = 0, pineappleOrder = 0;
var lastOrderCabbage = 0,lastOrderLettuce = 0 ,lastOrderPumpkin = 0, lastOrderWatermelon = 0 ,lastOrderPapaya = 0,lastOrderPineapple = 0;
var totalSum = 0;
var orderBegun = false;

function updateQuantity(){
    document.getElementById("availableQuantityCabbage").innerHTML = availableCabbage;
    document.getElementById("availableQuantityLettuce").innerHTML = availableLettuce;
    document.getElementById("availableQuantityPumpkin").innerHTML = availablePumpkin;
    document.getElementById("availableQuantityWatermelon").innerHTML = availableWatermelon;
    document.getElementById("availableQuantityPapaya").innerHTML = availablePapaya;
    document.getElementById("availableQuantityPineapple").innerHTML = availablePineapple;
}

//check for the quantity 
function checkQuantity(quantity){
    if(isNaN(quantity) || quantity <= 0 || !Number.isSafeInteger(quantity)){
       return false;
    }
    return true;
}

//check for the special characters in the name of the user
function specialCharacter(name){
    var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if(name.match(format)){
        return true;
    }
}

function checkStringForNumbers(name){
    var lettersExpression = /^[A-Za-z]+$/;
    if(name.match(lettersExpression))
    {
        return true;
    }
    else
    {
        return false;
    }
}

//calculates total sum of the order
function total_Sum(){
    var totalSum = totalCabbage + totalLettuce + totalPumpkin + totalWatermelon + totalPapaya + totalWatermelon;
    return totalSum;
}

//check for the right order for the billing
function check_Order(){
    if(cabbageOrder > 0 || lettuceOrder > 0 || pumpkinOrder > 0 || watermelonOrder > 0 || pineappleOrder > 0 || papayaOrder > 0){
        return true;
    }
}

function getCustomerName(){
    customerName = prompt("Enter Your Name For The Billing ");
    if(customerName.length == 0 || checkStringForNumbers(customerName) == false || specialCharacter(customerName) == true){
        getCustomerName();
        return customerName;
    }
    else{
        return customerName;
    }
}

function btnCabbageClick(){
    if(availableCabbage >= 1){
        if(availableCabbage==1){
            cabbageOrder = Number(prompt("There is only 1 quantity Available?(1)", "1"));
    // lastOrder = cabbageOrder + lastOrder;
        }else{
            cabbageOrder = Number(prompt("How much quantity do you need?(1 - "+ availableCabbage +")"));
        }
        if(checkQuantity(cabbageOrder) && (cabbageOrder <= availableCabbage)){
            //If quantity input is valid
            availableCabbage = availableCabbage - cabbageOrder;
            totalCabbage = totalCabbage + (priceCabbage * cabbageOrder);
            lastOrderCabbage = lastOrderCabbage + cabbageOrder;
            document.getElementById("availableQuantityCabbage").innerHTML = availableCabbage;
            //alert(totalCabbage);
        }else{
            alert("Invalid Input For Cabbage Quantity!");
        }
    }else{
        //If product available quantity is less than 1
        alert("Cabbage is out of stock!");
    }
}

function btnLettuceClick(){
    if(availableLettuce >= 1){
        if(availableLettuce==1){
            lettuceOrder = Number(prompt("There is only 1 quantity Available?(1)", "1"));
        }else{
            lettuceOrder = Number(prompt("How much quantity do you need?(1 - "+ availableLettuce +")"));
        }
        if(checkQuantity(lettuceOrder) && (lettuceOrder <= availableLettuce)){
            //If quantity input is valid
            availableLettuce = availableLettuce - lettuceOrder;
            totalLettuce = totalLettuce + (priceLettuce * lettuceOrder);
            lastOrderLettuce = lastOrderLettuce + lettuceOrder;
            document.getElementById("availableQuantityLettuce").innerHTML = availableLettuce;
            //alert(totalLettuce);
        }else{
            alert("Invalid Input For Lettuce Quantity!");
        }
    }else{
        //If product available quantity is less than 1
        alert("Lettuce is out of stock!");
    }
}

function btnPumpkinClick(){
    if(availablePumpkin >= 1){
        if(availablePumpkin==1){
            pumpkinOrder = Number(prompt("There is only 1 quantity Available?(1)", "1"));
        }else{
            pumpkinOrder = Number(prompt("How much quantity do you need?(1 - "+ availablePumpkin +")"));
        }
        if(checkQuantity(pumpkinOrder) && (pumpkinOrder <= availablePumpkin)){
            //If quantity input is valid
            availablePumpkin = availablePumpkin - pumpkinOrder;
            totalPumpkin = totalPumpkin + (pricePumpkin * pumpkinOrder);
            lastOrderPumpkin = lastOrderPumpkin + pumpkinOrder;
            document.getElementById("availableQuantityPumpkin").innerHTML = availablePumpkin;
            //alert(totalPumpkin);
        }else{
            alert("Invalid Input For Pumpkin Quantity!");
        }
    }else{
        //If product available quantity is less than 1
        alert("Pumpkin is out of stock!");
    }
}

function btnWatermelonClick(){
    if(availableWatermelon >= 1){
        if(availableWatermelon==1){
            watermelonOrder = Number(prompt("There is only 1 quantity Available?(1)", "1"));
        }else{
            watermelonOrder = Number(prompt("How much quantity do you need?(1 - "+ availableWatermelon +")"));
        }
        if(checkQuantity(watermelonOrder) && (watermelonOrder<=availableWatermelon)){
            //If quantity input is valid
            availableWatermelon = availableWatermelon - watermelonOrder;
            totalWatermelon = totalWatermelon + (priceWatermelon * watermelonOrder);
            lastOrderWatermelon = lastOrderWatermelon + watermelonOrder;
            document.getElementById("availableQuantityWatermelon").innerHTML = availableWatermelon;
           // alert(totalWatermelon);
        }else{
            alert("Invalid Input For Watermelon Quantity!");
        }
    }else{
        //If product available quantity is less than 1
        alert("Watermelon is out of stock!");
    }
}

function btnPapayaClick(){
    if(availablePapaya >= 1){
        if(availablePapaya==1){
            papayaOrder = Number(prompt("There is only 1 quantity Available?(1)", "1"));
        }else{
            papayaOrder = Number(prompt("How much quantity do you need?(1 - "+ availablePapaya +")"));
        }
        if(checkQuantity(papayaOrder) && (papayaOrder <= availablePapaya)){
            //If quantity input is valid
            availablePapaya = availablePapaya - papayaOrder;
            totalPapaya = totalPapaya + (pricePapaya * papayaOrder);
            lastOrderPapaya = papayaOrder + lastOrderPapaya;
            document.getElementById("availableQuantityPapaya").innerHTML = availablePapaya;
           // alert(totalPapaya);
        }else{
            alert("Invalid Input For Papaya Quantity!");
        }
    }else{
        //If product available quantity is less than 1
        alert("Papaya is out of stock!");
    }
}

function btnPineappleClick(){
    if(availablePineapple >= 1){
        if(availablePineapple==1){
            pineappleOrder = Number(prompt("There is only 1 quantity Available?(1)", "1"));
        }else{
            pineappleOrder = Number(prompt("How much quantity do you need?(1 - "+ availablePineapple +")"));
        }
        if(checkQuantity(pineappleOrder) && (pineappleOrder <= availablePineapple)){
            //If quantity input is valid
            availablePineapple = availablePineapple - pineappleOrder;
            totalPineapple = totalPineapple + (pricePineapple * pineappleOrder);
            lastOrderPineapple = lastOrderPineapple + pineappleOrder;
            document.getElementById("availableQuantityPineapple").innerHTML = availablePineapple;
           // alert(totalPineapple);
        }else{
            alert("Invalid Input For Pineapple Quantity!");
        }
    }else{
        //If product available quantity is less than 1
        alert("Cabbage is out of stock!");
    }
}


function btnCheckOut(){
    customerName = getCustomerName();
    
    document.getElementById("name").innerHTML = "Hello ";
    document.getElementById("customerName").innerHTML = customerName;
    document.getElementById("dashed1").innerHTML = "----------------------------------------------------------";
    document.getElementById("productName").innerHTML = "Product Name";
    document.getElementById("productQuantity").innerHTML = "Product Quantity";
    document.getElementById("totalPrice").innerHTML = "Total Price";
    if(cabbageOrder > 0){
        document.getElementById("productCabbage").innerHTML = "Cabbage";
        document.getElementById("totalCabbageQuantity").innerHTML = lastOrderCabbage;
        document.getElementById("totalCabbagePrice").innerHTML = parseFloat(totalCabbage).toFixed(2);
    }
    if(lettuceOrder > 0){
        document.getElementById("productLettuce").innerHTML = "Lettuce";
        document.getElementById("totalLettuceQuantity").innerHTML = lastOrderLettuce;
        document.getElementById("totalLettucePrice").innerHTML = parseFloat(totalLettuce).toFixed(2);
    }
    if(pumpkinOrder > 0){
        document.getElementById("productPumpkin").innerHTML = "Pumpkin";
        document.getElementById("totalPumpkinQuantity").innerHTML = lastOrderPumpkin;
        document.getElementById("totalPumpkinPrice").innerHTML = parseFloat(totalPumpkin).toFixed(2);
    }
    if(watermelonOrder > 0){
        document.getElementById("productWatermelon").innerHTML = "Watermelon";
        document.getElementById("totalWatermelonQuantity").innerHTML = lastOrderWatermelon;
        document.getElementById("totalWatermelonPrice").innerHTML = parseFloat(totalWatermelon).toFixed(2);
    }
    if(papayaOrder > 0){
        document.getElementById("productPapaya").innerHTML = "Papaya";
        document.getElementById("totalPapayaQuantity").innerHTML = lastOrderPapaya;
        document.getElementById("totalPapayaPrice").innerHTML = parseFloat(totalPapaya).toFixed(2);
    }
    if(pineappleOrder > 0){
        document.getElementById("productPineapple").innerHTML = "Pineapple";
        document.getElementById("totalPineappleQuantity").innerHTML = lastOrderPineapple;
        document.getElementById("totalPineapplePrice").innerHTML = parseFloat(totalPineapple).toFixed(2);
    }
    totalSum = total_Sum();
    if(totalSum > 0 ){
        document.getElementById("orderSection").style.padding = "25px";
        document.getElementById("orderSection").style.visibility = "visible";
        document.getElementById("dashed").innerHTML = "----------------------------------------------------------";
        tax = (totalSum * 5 )/ 100;
        document.getElementById("Taxes").innerHTML = "Other Taxes: 5%";
        document.getElementById("totalTaxes").innerHTML = parseFloat(tax).toFixed(2);
        gst = (totalSum * 13)/ 100;
        document.getElementById("gst").innerHTML = "Total Gst 13% ";
        document.getElementById("totalGst").innerHTML = parseFloat(gst).toFixed(2);
        totalBillValue = totalSum + gst + tax;
        document.getElementById("totalBill").innerHTML = "Total Bill in $$";
        document.getElementById("totalBillSummary").innerHTML = parseFloat(totalBillValue).toFixed(2) ;
        updateQuantity(); 
    }
}