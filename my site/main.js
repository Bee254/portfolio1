//porfolio filter start here
const filtercontainer = document.querySelector(".portfolio-flt"),
filterBtns=filtercontainer.children,
totalflbtn=filterBtns.length,
porfolioItem = document.querySelectorAll(".porfolio-item"),
totalPortfolioItem=portfolioItems.length;

for(let i=0; i<totalflbtn; i++){
  filterBtns[i].addEventListener("click",function(){
    filtercontainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");


    const filterValue=this.getAttribute("data-filter");
    for(let k=0; k<totalPortfolioItem;k++){
      if(filterValue===portfolioItems[k].getAttribute("data-category")){
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
      else{
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }
      if(filterValue==="all"){
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
  })
}

//portfolio settings amd lightbox
const lightbox=document.querySelector('.lightbox'),
lightboxImg = lightbox.querySelector('.lightbox-img'),
lightboxClose = lightbox.querySelector('lightbox-close'),
lightboxText=lightbox.querySelector('.caption-text'),
lightboxCounter=lightbox.querySelector('.caption-counter');
let itemIndex=0;


for (let i=0; i <totalPortfolioItem; i=++){
  porfolioItems[i].addEventListener("click",function(){
    itemIndex=i;
    changeItem();
    toggleLightbox();
    })
}
function nextItem(){
  if (itemIndex==totalPortfolioItem-1){
    itemIndex=0;
  }
  else {
    itemIndex++
  }
  changeItem();
}
function prevItem(){
  if (itemIndex==0) {
    itemIndex=totalPortfolioItem-1;
  }
  else {
    itemIndex--
  }
  changeItem();
}
function toggleLightbox(){
  lightbox.classList.toggle("open");
}
function changeItem(){
  imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
  lightboximg.src=imgSrc;
  lightboxText.innerHTML=porfolioTtems[itemIndex].querySelector("h4").innerHTML;
  lightboxCounter.innerHTML=(itemIndex+i)+" of "+totalPortfolioItem;
}
//close lightbox
lightbox.addEventListener("click",function(event){
  if(event.target===lightboxClose || event.target===lightbox){

  }
  })
 
























//ends
