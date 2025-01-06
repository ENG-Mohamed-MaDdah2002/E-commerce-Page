let notPro = document.getElementById('notproduct')
let response = JSON.parse(localStorage.getItem("selectProduct"))
response == null ? notPro.style.display = 'block' : notPro.style.display = 'none'
let boxCart = document.getElementById("cartproduct")
function displayRes() {
    let base = ''
    for (let i = 0; i < response.length; i++) {
        base +=`
                    <div class="col-lg-3 my-3">
                        <div class="card card-first">
                            <div class="boxImg">
                            <img src="${response[i].image}" class="getImgApi" alt="img-api">
                            </div>
                            <div class="card-body card-shop">
                            <span>Price: <h6 class="d-inline-block">${response[i].price}</h6></span>
                                <h5>${response[i].category}</h5>
                                <p>${response[i].title}</p>
                                <p class="my-2">Descrepion: <b>${response[i].description}</b></p>
                            </div>
                        </div>
                    </div>
        `
    }
    boxCart.innerHTML = base
}
displayRes()