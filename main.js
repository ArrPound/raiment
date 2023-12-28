let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =() =>{ /* if you click search-icon */
        search.classList.toggle('active'); /* show search-box */
        cart.classList.remove('active'); /* hide cart when search-box open */
        user.classList.remove('active');/* hide user-box when cart open */

    }

let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick =() =>{ /* if you click cart-icon */
        cart.classList.toggle('active'); /* show cart-box */
        search.classList.remove('active');/* hide search-box when cart open */
        user.classList.remove('active');/* hide user-box when cart open */

}

let user = document.querySelector('.user');

document.querySelector('#user-icon').onclick =() =>{ /* if you click user-icon */
        user.classList.toggle('active'); /* show user-box */
        search.classList.remove('active');/* HIDE user-box when cart open */
        cart.classList.remove('active'); /* HIDE cart-box */

}




// swiper 

var swiper = new Swiper(".new-arrival", {
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
                0:{
                        slidesPerView: 0,
                },
                568: {
                        slidesPerView: 2,
                        
                },
                768: {
                        slidesPerView: 2,
                        
                },
                1020: {
                        slidesPerView: 3,
                        
                },
        },
       
      });



let list = document.querySelectorAll('.product-container .box');
list.forEach(item => {
        item.addEventListener('click', function(event){
                if(event.target.classList.contains('add')){
                        var itemNew = item.cloneNode(true)//copy item
                        let checkIsset = false;

                        let listCart = document.querySelectorAll('.cart .box');
                        listCart.forEach(cart => {
                                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                                        checkIsset = true;
                                        cart.classList.add('danger');
                                        setTimeout(function(){
                                                cart.classList.remove('danger');
                                        }, 1000)
                                }
                        })

                        if(checkIsset == false){
                                document.querySelector('.listCart').appendChild(itemNew);
                      }
                        
                }
        })
})



function Remove($key) {
        let listCart = document.querySelectorAll('.cart .box');
        listCart.forEach(item => {
                if(item.getAttribute('data-key') == $key){
                        item.remove();
                        return;
                }
        })
}

