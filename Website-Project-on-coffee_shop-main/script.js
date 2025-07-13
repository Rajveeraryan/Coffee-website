/* ADD CELL AFTER PRESSING ADD TO CART */
function addToCart(productName, productPrice) {
    console.log(productName + ', ' + productPrice);
    // Get the table body where cart items will be added
    var cartTableBody = document.querySelector('.shopping-cart');
    console.log(cartTableBody)

    // Create a new row for the cart item
    var newRow = cartTableBody.insertRow();
    console.log(newRow)
    
    // Create cells for product name and price
    var productNameCell = newRow.insertCell(0);
    var productPriceCell = newRow.insertCell(1);
    
    // Set the content of the cells
    productNameCell.textContent = productName;
    productPriceCell.textContent = '$' + productPrice.toFixed(2);
}
<table class="shopping-cart">
                <tbody>
                    <tr>
                        <th style="width: 40px;"></th>
                        <th style="width: 90px;"></th>
                        <th style="width: 500px;">Product</th>
                        <th style="width: 90px;">Price</th>
                        <th style="width: 160px;">Quantity</th>
                        <th style="width: 90px;">Subtotal</th>
                    </tr>
                    <tr>
                        <td class="cross-symbol">
                            <div class="circle"  onclick="deleteRow(this)">&times;</div>
                        </td>
                        <td class="image-cell">
                            <img src="Americano"></img>
                        </td>
                        <td>Watermelon</td>
                        <td>$2.50</td>
                        <td>
                            <div class="quantity">
                                <button class="minus">-</button><input type="text" class="number" value="1" min="1"></input><button class="plus">+</button>
                            </div>
                        
                        </td>
                        
                    </tr>
                    
            </tbody>
            </table> 