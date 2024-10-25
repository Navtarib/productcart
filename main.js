    // JavaScript for handling cart operations
    var totalPrice = 0;

    // Function to add product price to the total
    function addToCart(price) {
        totalPrice += price;
        document.getElementById("total-price").innerText = totalPrice;
    }

    // Function to clear the cart
    function clearCart() {
        totalPrice = 0;
        document.getElementById("total-price").innerText = totalPrice;
    }
