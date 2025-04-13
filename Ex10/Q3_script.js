document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let Firstname = document.getElementById("Firstname").value;
    let Lastname = document.getElementById("Lastname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let items = document.querySelectorAll(".item");
    let orderDetails = [];

    items.forEach(item => {
        if (item.checked) {
            let quantity = item.parentElement.querySelector(".qty").value || 1;
            let price = item.getAttribute("data-price");

            orderDetails.push({
                name: item.value,
                quantity: parseInt(quantity, 10),
                price: parseFloat(price)
            });
        }
    });

    let orderData = {
        name: `${Firstname} ${Lastname}`,
        phone: phone,
        email: email,
        items: orderDetails
    };

    localStorage.setItem("order", JSON.stringify(orderData));
    window.location.href = "Q3.html";
});
