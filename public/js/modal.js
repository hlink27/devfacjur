function openModal() {
    let modal = document.getElementById("myModal");
    var span = modal.getElementsByClassName("close")[0];
    if(modal.classList.contains('cont-modal')){
        modal.style.display = "flex"
    } else {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}