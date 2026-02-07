setInterval(function(){
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 500);
