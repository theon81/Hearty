const trailer = document.getElementById("trailer");

let prevX = 0;
let prevY = 0;

const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;

    const distance = Math.sqrt((x - prevX) ** 2 + (y - prevY) ** 2);
    const duration = Math.min(800, distance * 50); // Adjust 5 as needed for responsiveness
    
    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
    };

    trailer.animate(keyframes, {
        duration: duration,
        fill: "forwards"
    });

    prevX = x;
    prevY = y;

};

const getTrailerClass = type => {
    switch(type) {
        case "video":
        return "fa-regular fa-heart";
        default:
        return "fa-regular fa-heart"; 
    }
}

window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"),
            interacting = interactable !== null;
    
    const icon = document.getElementById("trailer-icon");
    
    animateTrailer(e, interacting);
    
    trailer.dataset.type = interacting ? interactable.dataset.type : "";
    
    if(interacting) {
        icon.className = getTrailerClass(interactable.dataset.type);
    }
}