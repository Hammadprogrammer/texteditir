function bold(){
    let area = document.getElementById("area")
    if (area.style.fontWeight==="bold") {
        area.style.fontWeight="normal"
    }
    else{
        area.style.fontWeight="bold"
    }
    }
    
    function underline() {
        let area=document.getElementById("area")
        if (area.style.textDecoration==="underline") {
    
            area.style.textDecoration="none"
        }
        else{
            area.style.textDecoration="underline"
        }
    }
    function italic() {
        let area=document.getElementById("area")
        if (area.style.fontStyle==="italic") {
            area.style.fontStyle="normal"
        }
        else{
            area.style.fontStyle="italic"
        }
    }
    
    function textright() {
        let area=document.getElementById("area")
        if(area.style.textAlign==="right"){
            area.style.textAlign="left"
        }
        else{
            area.style.textAlign="right"
        }
    }
    function center() {
        let area= document.getElementById("area");
        if (area.style.textAlign==="center") {
            area.style.textAlign="right"
        }
        else{
            area.style.textAlign="center"
        }
    }
    function left() {
        let area=document.getElementById("area")
        if(area.style.textAlign==="left"){
            area.style.textAlign="right"
        }
        else{
            area.style.textAlign="left"
        }
    }