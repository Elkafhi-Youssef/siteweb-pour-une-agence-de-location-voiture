const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.gallery');
const search = document.getElementById("search");
const vihuculs = document.querySelectorAll(".gallery");
// const search = document.getElementById(search);

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        search.value="";
        // e.target.classList.add('active')
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};


search.addEventListener("keyup", filter);
function filter(e) {
    e.preventDefault();
    const text = e.target.value.toLowerCase();
   
   
    vihuculs.forEach(function(vihicule) {
        if(text===""){
            vihicule.style.display = "block"
        }
         else if (vihicule.classList.contains(text)) {
            vihicule.style.display = "block"
        } else {
            vihicule.style.display = "none"
        }
    })
}

