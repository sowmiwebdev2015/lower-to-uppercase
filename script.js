function toUpperCase() {
    let str = document.getElementById("string").value;
    document.getElementById("result").value=str.toUpperCase();

}
function copy(){
    var copytext = document.getElementById("result").value;

    navigator.clipboard.writeText(copytext);
}

