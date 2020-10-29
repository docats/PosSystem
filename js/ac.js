document.addEventListener("DOMContentLoaded",init);
function init(){
    var acc = document.getElementsByClassName("myCollapse");
    var i;
    
    for(i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click",function(){
            this.classList.toggle("active");
    
            var panel = this.nextElementSibling;
            if(panel.style.display === "block"){
                panel.style.display = "none";
            }else{
                panel.style.display = "block";
            }
        });
    }
}

