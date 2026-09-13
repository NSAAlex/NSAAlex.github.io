document.getElementById("speech-area").onclick = (e) => {
    document.getElementById("speech-bubble").classList.toggle("visible");
}

document.getElementById("select-beverage").onchange = (e) => {
    const beverage = e.target.value;
    document.getElementById("p-beverage-result").innerHTML = `${beverage}: Nice Choice!`;
}

document.getElementById("sticker-area").onclick = (e) => {
    const stickerArea = document.getElementById("sticker-area");
    const areaBounds = stickerArea.getBoundingClientRect();
    const xPosition = e.clientX - areaBounds.left;
    const yPosition = e.clientY - areaBounds.top;

    const sticker = document.createElement("span");
    sticker.classList.add("sticker");
    sticker.innerHTML = "&#11088;";
    sticker.style.left = `${xPosition}px`;
    sticker.style.top = `${yPosition}px`;

    stickerArea.appendChild(sticker);
}