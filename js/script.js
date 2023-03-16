import items from './data.json' assert {type: 'json'};

const products = document.querySelector("#products .container");
for (let brand in items.phone) {
    for (let model in items.phone[brand]) {
      for (let variant of items.phone[brand][model]) {
        const product = document.createElement("div");
        product.classList.add("product");
        product.style.cssText = "  border: solid black 1px; margin-top: 30px; border-radius: 50px; width: 300px; height: 400px; padding: 20px;  display: flex; flex-direction: column;justify-content: space-between;align-items: center;";
    
        product.innerHTML = `
          <img src=${variant.img} />
          <h6>${variant.name}</h6>
          <div class="product-property" style = "display:flex; justify-content: space-between">
            <span class="product-color">Color: ${variant.color}</span>
            <span class="product-memory">Memory: ${variant.memory} GB</span>
          </div>
          <div class="buy-product">
            <span class="product-price">${variant.price}₼</span>
          </div>
        `;
        products.appendChild(product);
      }
    }
  }
for (let brand in items.Laptop) {
    for (let variant of items.Laptop[brand]) {
      
        const product = document.createElement("div");
        product.classList.add("product");
        product.style.cssText = "  border: solid black 1px; margin-top: 30px; border-radius: 50px; width: 300px; height: 400px; padding: 20px;  display: flex; flex-direction: column;justify-content: space-between;align-items: center;";
    
        product.innerHTML = `
          <img src=${variant.img} />
          <h6>${variant.name}</h6>
          <div class="product-property" style = "display:flex; justify-content: space-between">
            <span class="product-color">Color: ${variant.color}</span>
            <span class="product-memory">Ram: ${variant.ram}</span>
          </div>
          <div class="buy-product">
            <span class="product-price">${variant.price}₼</span>
          </div>
        `;
        products.appendChild(product);
      }
    }
  

  const minMaxForm = document.querySelector('.min-max-form');
  const minPrice = document.querySelector('.min-price');
  const maxPrice = document.querySelector('.max-price');
  minMaxForm.addEventListener('submit', (e) => {
    e.preventDefault();
    products.innerHTML = " ";
    for (let brand in items.phone) {
        for (let model in items.phone[brand]) {
          for (let variant of items.phone[brand][model]) {
            const product = document.createElement("div");
            product.classList.add("product");
            product.style.cssText = "  border: solid black 1px; margin-top: 30px; border-radius: 50px; width: 300px; height: 400px; padding: 20px;  display: flex; flex-direction: column;justify-content: space-between;align-items: center;";
            if(variant.price > minPrice.value && variant.price < maxPrice.value ){
                product.innerHTML = `
                <img src=${variant.img} />
                <h6>${variant.name}</h6>
                <div class="product-property" style = "display:flex; justify-content: space-between">
                  <span class="product-color">Color: ${variant.color}</span>
                  <span class="product-memory">Memory: ${variant.memory}</span>
                </div>
                <div class="buy-product">
                  <span class="product-price">${variant.price}₼</span>
                </div>
              `;
              products.appendChild(product);
            }
          }
        }
      }
      for (let brand in items.Laptop) {
        for (let variant of items.Laptop[brand]) {
          
            const product = document.createElement("div");
            product.classList.add("product");
            product.style.cssText = "  border: solid black 1px; margin-top: 30px; border-radius: 50px; width: 300px; height: 400px; padding: 20px;  display: flex; flex-direction: column;justify-content: space-between;align-items: center;";
            
            if(variant.price > minPrice.value && variant.price < maxPrice.value ){

            product.innerHTML = `
              <img src=${variant.img} />
              <h6>${variant.name}</h6>
              <div class="product-property" style = "display:flex; justify-content: space-between">
                <span class="product-color">Color: ${variant.color}</span>
                <span class="product-memory">Ram: ${variant.ram}</span>
              </div>
              <div class="buy-product">
                <span class="product-price">${variant.price}₼</span>
              </div>
            `;
            products.appendChild(product);
            }
          }
        }
    
  })


  const addProductSpan =document.querySelector(".add-to-cart");    
  const addProductForm = document.querySelector('.product-unvisible');
  addProductForm.style.display = "none";
  addProductSpan.addEventListener("click", function(e){
    if(addProductForm.style.display == "none"){
    addProductForm.style.display = "flex";
    }else{
        addProductForm.style.display = "none";
    }
  })

