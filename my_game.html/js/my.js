
var btnsubmit = document.forms["favourite-form"]["btn-submit"];
btnSubmit.onclick = function(){		
    var checkbox = document.getElementsByName('favourite[]')
    var result = "";      
    for (i = 0; i < checkbox.length; i++) {          
        if (checkbox[i].checked != true){continue;} 											
              result += checkbox[i].value + ',';	
         }
    }          	
    alert("Game bạn chọn là: " + result); 
}

