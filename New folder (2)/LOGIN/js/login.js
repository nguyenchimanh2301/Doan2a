var i=0;
$(document).ready(function(){
    $('#butlogin').click(function(){
        if($('#user').val()==null || $('#pass').val()==null)
        {
            alert("tai khoan va mat khau khong duoc de trong");
        }
        if($('#user').val()=="abc" && $('#pass').val()=="123")
        {
           window.location.href =  'http://127.0.0.1:5500/LOGIN/DOAN2/web.html/login2.html';
        }
        else
        {
            alert("dang nhap that bai");
            return false;
        }
        });
        $('#butadmin').click(function(){
          if($('#user').val()==null || $('#pass').val()==null)
          {
              alert("tai khoan va mat khau khong duoc de trong");
          }
          if($('#user').val()=="admin" && $('#pass').val()=="admin")
          {
              window.location.href ='http://127.0.0.1:5500/LOGIN/admin/admin.html';
          }
          else
          {
            alert("dang nhap that bai");
            return false;
           }
            
});

});
    // function move() {
    //     var elem = document.getElementById("myBar");   
    //     var width = 0;
    //     var id = setInterval(frame, 10);
    //     function frame() {
    //       if (width == 100) {
    //         clearInterval(id);
    //       } else {
    //         width++; 
    //         elem.style.width = width + '%'; 
    //       }
    //     }
  //   $(document).ready(function(){
  //     $('#giamvc').click(function(){
  //        $('#slll').val((--i).toString());
  //     });
  // });