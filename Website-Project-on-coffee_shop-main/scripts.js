function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
function validateForm() {
    let name = document.forms["Book your tabelForm"]["name"].value;
    let numberoftables = document.forms["Book your tabelForm"]["number"].value;
    let noofpeoplejoins = document.forms["Book your tabelForm"]["number"].value;
    let message= document.forms["Book your tabelForm"]["message"].value;
    
    if (name === "" || nooftabels === ""|| noofpeoplejoins==="" || message === "") {
        alert("All fields must be filled out");
        return false;
    }
    alert("Thank you for your Booking!");
    return true;
}

function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;
    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }
    alert("Thank you for your message!");
    return true;
}
// Initialize an empty cart
let cart = [];

// Function to update the cart count in the header
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}

// Function to add an item to the cart
function addToCart(name, price) {
    const item = { name: name, price: parseFloat(price) };
    cart.push(item);
    updateCartCount();

    // Optional: Show a notification when an item is added
    alert(`${name} has been added to your cart.`);
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function() {
        const name = this.getAttribute("data-name");
        const price = this.getAttribute("data-price");
        addToCart(name, price);
    });
});
