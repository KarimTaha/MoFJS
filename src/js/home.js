export function askagree(){
    if(document.getElementById("dialog")!= null){
        document.getElementById("dialog").style.visibility = "visible";
        console.log("askagree works");
        if (document.getElementById("dialogText")!= null) {
        document.getElementById("dialogText").textContent = "Are you sure you want to submit?";
        }
    }
}
export function hideWindow(){
    if (document.getElementById("dialog") != null){
        console.log("Hide works");
        document.getElementById("dialog").style.visibility = "hidden";
        }
    }

