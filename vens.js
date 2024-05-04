
let FirstVendor = document.querySelector(".first-vendor");
let SecondVendor = document.querySelector(".second-vendor");

FirstVendor.addEventListener("click",(e)=>{
    showoption(e);
})

SecondVendor.addEventListener("click",(e)=>{
    showoption(e);
})


function showoption(e){
    if(e.target.innerHTML=="Official "){
    SecondVendor.style.backgroundColor="lightslategray";FirstVendor.style.borderRadius='15px';
    FirstVendor.style.backgroundColor="#000000";
    SecondVendor.style.opacity="0.7";
    FirstVendor.style.opacity="1";
    document.querySelector(".list-of-official").classList.remove("hide");
    document.querySelector(".list-of-thirdp").classList.add("hide");

}

    else{
        e.target.style.backgroundColor='#000000';
        FirstVendor.style.borderRadius='15px';
        SecondVendor.style.borderRadius="15px";
        FirstVendor.style.backgroundColor="lightslategray";
        FirstVendor.style.opacity="0.7";
        SecondVendor.style.opacity="1";
        document.querySelector(".list-of-thirdp").classList.remove("hide"); 
        document.querySelector(".list-of-official").classList.add("hide");               
    }

}

function direct(){
  window.location.href = "./tracking.html";
}
