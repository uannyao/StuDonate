function redirectToHome() {
    window.location.href = "../frontend/index.html";
}

function checkInput_ItemDes () {
    var text_description = document.getElementById("item_descrip").value;
    var text_time = document.getElementById("Time").value;
    var text_location = document.getElementById("Location").value;
    var text_title = document.getElementById("item_title").value;
    if (text_description.trim().length==0 || text_time.trim().length==0 ||  text_location.trim().length==0 ||  text_title.trim().length==0) {
        return false
    }
    return true
 }
 
 
 
 function checkAndRedirect() {
    if (checkInput_ItemDes() == false ) {
        // alert("Please enter a description.")
        showWarning();
    } else {
        showPopup();
    }
 }
 

 
 // document.getElementById("item_descrip").addEventListener("input", function() {
     //   var text = this.value;
     //   if (text.length > 0) {
         //     if (document.getElementById("Post_Button").addEventListener("click", function()))
         //   } else {
             //     alert("Enter a Description.")
             //   }
             // });
function showPopup() {
    document.getElementById('postPopup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}


function showWarning() {
    document.getElementById("warningPopup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}
  
  function closePopup() {
    document.getElementById('warningPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }
