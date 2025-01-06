
let products = []
async function getApi(){
    let api = await fetch('https://fakestoreapi.com/products')
    let data = await api.json()
    products = data
    displayData();
    console.log(products);
    
}
getApi()

let box = document.getElementById("row")
function displayData() {
    let base = ''
    for (let i = 0; i < products.length; i++) {
        base +=`
                    <div class="col-lg-3 my-3">
                        <div class="card card-first">
                            <div class="boxImg">
                            <img src="${products[i].image}" class="getImgApi" alt="img-api">
                            </div>
                            <div class="card-body card-shop">
                                <h5>${products[i].category}</h5>
                                <p>${products[i].title}</p>
                                <span>Price: <h6 class="d-inline-block">${products[i].price}</h6></span>
                                <button id="addToCart" onclick="add(${products[i].id})" class="btn btn-info d-block">Add To Cart</button>
                            </div>
                        </div>
                    </div>
        `
    }
    box.innerHTML = base
    JSON.parse(localStorage.getItem("selectProduct"))
}


let cart = []
function add(id) {
    products.filter((item)=>{
        item.id == id ? cart.push(item) : console.log("nothing");
        localStorage.setItem("selectProduct",JSON.stringify(cart))
    })
}
// localStorage.getItem(JSON.parse("selectProduct"))
console.log(cart);

