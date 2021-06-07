
var list = JSON.parse(localStorage.getItem("web6"));

// document.getElementById('haha').innerHTML=lst;

function fun(){
    var str="";
    for(x of list)
    {
        str+=`
        <tr>
        <td>
        <div style="color:blue;line-height-3;font-size:60">`+x.ct+`</div>
        <div><img style="width: 100%; height: 400px;" src="`+x.anh+`"></div>
        <div><button onclick=" Xoa(`+x.id+`) ">XOA</button></div>
        </td>
        </tr>
        `;
    }
    document.getElementById("abcd").innerHTML= str;
}
function Xoa(id)
{ 
   var index = list.IndexOf(id);
   if (index >= 0) {
    list = list.splice(index,1);
    }  
   fun();
   debugger;
}
fun();
// function xoa(id)
// {
//     var i = lst.findIndex((x)=>x.id==id);
//         if(i>=0)
//         {
//             lst=lst.splice(i,1);
//         }
//     fun();
// }
// $(document).ready(function(){

//     // dataImage = localStorage.getItem('imgData');
    
//     // bannerImg = document.getElementById('imglocal');
//     // bannerImg.src = "data:image/jpg;base64,"+dataImage;
//     // var img = document.getElementById('imglocal');
//     // img.src = localStorage.getItem('img');
    
    
//     $('button').click(function()
//     {
//     localStorage.setItem('web6',"")
//     location.reload();
//     })
    
//     });