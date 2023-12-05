function goBackHome() {
    window.location.href = "./index.html";
}

function incrementDonated() {
    number=document.getElementById("donated");
    number=parseInt(number.innerHTML) + 1;
}