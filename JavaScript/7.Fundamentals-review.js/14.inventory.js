let inventory = [

];

function findProductIndex(productName) {
  let i = -1
  for (let item of inventory) {
    i++
    if (item["name"] === productName.toLowerCase()) {
      return i}
  }
  return -1
}

function addProduct(product) {
  let name = product.name.toLowerCase();
  let productIndex = findProductIndex(product["name"]);
 if (productIndex !== -1) {
   inventory[productIndex]["quantity"] += product["quantity"]
   console.log(`${product["name"].toLowerCase()} quantity updated`)
 } else {
   inventory.push({
     name: name,
     quantity: product.quantity,
   });
   console.log(`${product["name"].toLowerCase()} added to inventory`)
 }
}


function removeProduct(name, quantity) {
  name = name.toLowerCase();

  let productIndex = findProductIndex(name);

  if (productIndex === -1) {
    console.log(`${name} not found`);
    return;
  }

  let currentQty = inventory[productIndex].quantity;
  let newQty = currentQty - quantity;

  if (newQty > 0) {
    inventory[productIndex].quantity = newQty;
    console.log(`Remaining ${name} pieces: ${newQty}`);
  }
  else if (newQty === 0) {
    inventory.splice(productIndex, 1);
  }
  else {
    console.log(`Not enough ${name} available, remaining pieces: ${currentQty}`);
  }
}
