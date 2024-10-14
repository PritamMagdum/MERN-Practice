console.log("Testing");
let CardContainer = document.getElementById("section");

let fetchAPI = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let finalData = await data.json();
    console.log(finalData.products);
    finalData.products.map((product) => {
        CardContainer.innerHTML += `
        <div class="cardContainer">
            <div class="imgContainer">
                <img src="${product.thumbnail}"
                    alt="">
            </div>
            <div class="productInfo">
                <span for="name" class="title"> ${product.title}</span>
                <br>
                <span for="name"><b>price:</b> ${product.price}</span>
                <span for="name"><b>discount:</b> <span class="dis">${product.discountPercentage}</span></span>

                <span for="name"><b>rating:</b> ${product.rating}</span>
                <span for="name"><b>stock:</b> ${product.stock}</span>
            </div>
        </div>
        `
    })

}
fetchAPI();