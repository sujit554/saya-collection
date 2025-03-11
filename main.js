const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) => {
navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");
menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line" : "ri-menu-line"); 
});

navLinks.addEventListener("click" , (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class" , "ri-menu-line");
});

const scrollRevealOption = {
    origin : "bottom",
    distance : "50px",
    duration : 1000,
};

scrollReveal().reveal(".header_image img" ,{
  ...scrollRevealOption,
  origin: "right",
});

scrollReveal().reveal(".header_content h1" ,{
  ...scrollRevealOption,
  delay: 500,
});
scrollReveal().reveal(".header_content p" ,{
  ...scrollRevealOption,
  delay: 1000,
});
scrollReveal().reveal(".header_btns" ,{
  ...scrollRevealOption,
  delay: 1500,
});

const banner = document.querySelector(".banner_container");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
const duplicateNode = item.cloneNode(true);
duplicateNode.setAttribute("aria-hidden", true)
banner.appendChild(duplicateNode);
});

ScrollReveal().reveal(".arrival_card", {
  ...scrollRevealOption,
  interval: 500,
});
  

scrollReveal().reveal(".sale_image img" ,{
  ...scrollRevealOption,
  origin: "left",
});

scrollReveal().reveal(".sale_content h2" ,{
  ...scrollRevealOption,
  delay: 500,
});
scrollReveal().reveal(".sale_content p" ,{
  ...scrollRevealOption,
  delay: 1000,
});
scrollReveal().reveal(".sale_content h4" ,{
  ...scrollRevealOption,
  delay: 1000,
});
scrollReveal().reveal(".sale_btn" ,{
  ...scrollRevealOption,
  delay: 1500,
});

scrollReveal() .reveal("favourite_card",{
   ...scrollRevealOption,
   interval: 500,
});

// add to cart 
/*const product = [
  {
      id:0,
      image: 'assets/arrival1.png',
      title: 'Z Flip Foldable Mobile',
      price: 1200,
  },
  {
      id = 1,
      image: 'image/hh-2.jpg',
      title: 'Air pods pro',
      price: 600,
  },
  {
      id: 2,
      image: 'images//ee-3.jpg',
      title: '250D DSLR Camera',
      price: 2300,
  
  },
  {
      id = 3,
      image: 'image//aa-1.jpg',
      title: 'Head Phones',
      price: 100,
  }
];
const categories = [...new set(product.map((item)=>{return item
}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>{
  var {image, title, price} = item;
  return(
      <div class='box'>
          <div class='img-box'>
              <img class='assets' src=${image}></img>
              </div>
              <div class='bottom'>
                  <p>${title}</p>
                  <h2>${price}</h2> +
                  "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                  </div>
                  </div>

  )
}).join('')*/
