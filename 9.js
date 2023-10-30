      function displayJuiceDetails(juiceType) {
         document.getElementById("juiceType").innerHTML = juiceType;
         document.getElementById("juiceTypePurchase").innerHTML = juiceType;
         document.getElementById("juiceTypePayment").innerHTML = juiceType;
         document.getElementById("juiceDetailsContainer").style.display = "block";
      }

      function displayPurchase() {
         document.getElementById("purchaseContainer").style.display = "block";
         document.getElementById("juiceDetailsContainer").style.display = "none";
      }

      function displayPayment() {
         var customerName = document.getElementById("customerName").value;
         var juiceType = document.getElementById("juiceTypePurchase").innerHTML;
         var withExchange = document.getElementById("withExchange").checked ? "with exchange" : "without exchange";
         var price = withExchange === "with exchange" ? "Rs-9000\-" : "Rs-12000\-";
         document.getElementById("customerDetails").innerHTML = customerName + " (" + withExchange + ")";
         document.getElementById("price").innerHTML = price;
         document.getElementById("paymentContainer").style.display = "block";
         document.getElementById("purchaseContainer").style.display = "none";
      }

      function returnHome() {
         document.getElementById("paymentContainer").style.display = "none";
         document.getElementById("homeContainer").style.display = "block";
      }
   