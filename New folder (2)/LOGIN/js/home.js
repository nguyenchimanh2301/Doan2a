
var list = document.getElementsByClassName("quangcao");
var index=0;

for(x of list)
{
    x.style.display='none';
}
list[index].style.display='block';


$(document).ready(function(){
    $("#trai").click(function()
    {
    for(x of list)
    {
        x.style.display='none';
    }
    if(index==0)index=list.length-1;
    
    else index=index-1;
    list[index].style.display ='block';
});
$("#phai").click(function()
{
    for(x of list)
    {
        x.style.display='none';
    }
    if(index==list.length-1)index=0;
    
    else index=index+1;
    list[index].style.display ='block';
});
});


// function add(item)
// {
//    var Ls=[item]
//     localStorage.setItem('web6',JSON.stringify(Ls));
// };

function add(item)
{
    var list;
    if (localStorage.getItem("web6") == null) {
        list = [item];
    } else {
        list = JSON.parse(localStorage.getItem("web6")) || [];
    let ok = true;
    for (let x of list) {
        if (x.id == item.id) {
        ok = false;
        break;
        }
    }
    if(ok){
        list.push(item); 
    } 
    }
    localStorage.setItem("web6", JSON.stringify(list));
};

var indx = 0;
slideshow();
function slideshow()
{
    var i;
    var slides = document.getElementsByClassName("quangcao");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display='none';
    }
    indx++;
    if(indx>slides.length){indx=1}
    slides[indx-1].style.display = "block";
    setTimeout(slideshow,1500);
};





















// $(".box").click(function (){
//     var lw='{"content":"Danh sách những đội tuyển chính thức góp mặt tại MSI 2021 tại ICELAND vào tháng tới",
//     "/LOGIN/IMAGE/t1.jpg"}';

// });
// $(".box").click(function (){
// bannerImage =document.getElementById('t1f');
// imgData = getBase64Image(bannerImage);
// localStorage.setItem("imgData",imgData);


// });
// function getBase64Image(img)
// {
//     var img1=document.createElement("img1");
//     img1.width=img.width;
//     img1.height=img.height;
//     var ctx= img1.getContext("2d");
//     ctx.drawImage(img,200,200);
//     var url = img1.toDataURL("/LOGIN/IMAGE/t1.jpg");
//     return url.replace(/^data:image\/(png|jpg);base64,/,"");
// }

// $(".box").click(function (){
// const imgPath = document.querySelector('input[type=file]').files[0];
// const read = new FileReader();

// read.addEventListener("load",function(){
//     localStorage.setItem("image",read.result);},false);
//     if(imgPath){
//         read.readAsDataURL(imgPath);
//     }
// });
