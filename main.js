(()=>{"use strict";var e,t,a="",r=[{name:"Chezu Sushi",image:a+"c660941aabd55ed54b68.svg",rating:4.7,price:"$16.00",category:"Sushi"},{name:"Originale Sushi",image:a+"cedc51c673479b62c37f.svg",rating:4.8,price:"$21.00",category:"Sushi"},{name:"Ramen Legendo",image:a+"a075ec22fd40d3dfec35.svg",rating:4.7,price:"$16.00",category:"Ramen"},{name:"Ramen with egg",image:a+"ea107505263eefe9a41c.svg",rating:4.8,price:"$18.00",category:"Ramen"},{name:"Sashimi Ramen",image:a+"6102c459040c28bb985e.svg",rating:5,price:"$21.00",category:"Ramen"},{name:"Naruto Ramen",image:a+"deb9786ca035c1e07bec.svg",rating:5,price:"$25.00",category:"Ramen"},{name:"Shrimp Sushi",image:a+"258847a9515746c1a87b.svg",rating:4.7,price:"$21.00",category:"Sushi"},{name:"Salmon Sushi",image:a+"7fd6c21a0b31e3d1c9fa.svg",rating:4.9,price:"$18.00",category:"Sushi"},{name:"Spicy Tofu",image:a+"5b1793c60e20679222d0.svg",rating:5,price:"$15.00",category:"Sushi"},{name:"Salmon Maki",image:a+"be369fb833f20d3e68a6.svg",rating:4.8,price:"$15.00",category:"Sushi"},{name:"Udon Classic",image:a+"75585293ee22c31dee94.svg",rating:4.5,price:"$20.00",category:"Udon"},{name:"Udon Spicy",image:a+"58d51aafa648e4eff261.svg",rating:4.6,price:"$21.00",category:"Udon"},{name:"Udon with Egg",image:a+"99a030de013c8dde4ed5.svg",rating:4.5,price:"$18.00",category:"Udon"},{name:"Salmon Steak",image:a+"db50e946d7fe19613f0d.svg",rating:4.9,price:"$20.00",category:"Others"},{name:"Kappa Maki",image:a+"02bcaca3c565d578c9a8.svg",rating:5,price:"$18.00",category:"Others"},{name:"Tekka Maki",image:a+"7585a1d037951c28eff3.svg",rating:4.8,price:"$19.00",category:"Others"},{name:"Botchan Danggo",image:a+"6807b78e54f67be7ab6c.svg",rating:4.8,price:"$14.00",category:"Danggo"},{name:"Original Danggo",image:a+"e66a41513b6c58e04328.svg",rating:4.9,price:"$13.00",category:"Danggo"},{name:"Spicy Danggo",image:a+"6efacfbe16c2295f2461.svg",rating:4.9,price:"$13.00",category:"Danggo"}],n=document.querySelector(".carousel"),c=n.querySelector(".carousel__items"),i=n.querySelector(".carousel__arrow_to_left"),o=n.querySelector(".carousel__arrow_to_right"),s=".carousel__item",l=1,g="carousel__item_checked",m=".carousel__item-header",d=".carousel__item-rating",u=".carousel__item-price",y=".carousel__item-image",f="carousel__item-header_checked",p="carousel__item-rating_checked",v="carousel__item-price_checked",_="carousel__item-image_checked",h=document.querySelector(".offers__form-button"),S=document.getElementById("modal"),b=document.getElementById("closeModal"),L=document.getElementsByName("contact_input")[0],k=document.getElementsByName("contact_button")[0],q=document.querySelector(".search"),E=q.querySelector(".search__input"),$=document.querySelector(".modal__header"),C=document.querySelector(".modal__description"),x=document.querySelector(".template").content,w=document.querySelector(".popular").querySelector(".popular__list-items").querySelectorAll(".popular__list-item"),T="popular__list-item_checked",D=document.getElementsByClassName("pnf_btn"),R=(e=B,200,function(){for(var a=this,r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];clearTimeout(t),t=setTimeout((function(){e.apply(a,n)}),200)});function B(){var e=c.querySelectorAll(s),t=l;e.forEach((function(e,a){a===t?e.classList.add(g):e.classList.remove(g);var r=e.querySelector(m),n=e.querySelector(d),c=e.querySelector(u),i=e.querySelector(y);r&&n&&c&&i&&(a===t?(r.classList.add(f),n.classList.add(p),c.classList.add(v),i.classList.add(_)):(r.classList.remove(f),n.classList.remove(p),c.classList.remove(v),i.classList.remove(_)))}))}function U(){S.style.display="flex"}window.addEventListener("resize",R),i.addEventListener("click",(function(){var e=c.lastElementChild;c.removeChild(e),c.prepend(e),c.style.transform="translateX(120px)",setTimeout((function(){c.style.transform="translateX(0)",B()}),0)})),o.addEventListener("click",(function(){var e=c.firstElementChild;c.removeChild(e),c.appendChild(e),c.style.transform="translateX(-120px)",setTimeout((function(){c.style.transform="translateX(0)",B()}),0)})),h.addEventListener("click",(function(){U(),$.textContent="Your data has been successfully sent",C.textContent="Thank you for subscribing to our news!"})),b.addEventListener("click",(function(){S.style.display="none"})),L.addEventListener("input",(function(){L.checkValidity()?k.disabled=!1:k.disabled=!0})),window.addEventListener("click",(function(e){e.target===S&&(S.style.display="none",E.value="",L.value="",k.disabled=!0)})),q.addEventListener("submit",(function(e){e.preventDefault(),U(),$.textContent="We are very sorry, search isn`t working",C.textContent="Hope to fix this soon!"}));function M(e){c.innerHTML="",("all"===e?r:r.filter((function(t){return t.category===e}))).forEach((function(e){var t,a;t=c,a=function(e){var t=x.cloneNode(!0);t.querySelector(m).textContent=e.name,t.querySelector(d).textContent=e.rating,t.querySelector(u).textContent=e.price;var a=t.querySelector(y);return a.src=e.image,a.alt=e.name,t}(e),t.append(a)})),B()}w.forEach((function(e){e.addEventListener("click",(function(){var t;t=e,w.forEach((function(e){e===t?e.classList.add(T):e.classList.remove(T)})),M(t.getAttribute("data-category"))}))})),M("all");for(var N=0;N<D.length;N++)D[N].addEventListener("click",(function(e){e.preventDefault(),U(),$.textContent="This section is still under development",C.textContent="We are very sorry!"}))})();