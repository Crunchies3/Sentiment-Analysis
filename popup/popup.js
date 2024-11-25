document.addEventListener("mouseup", (event) => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
        showIcon(event.pageX, event.pageY);
    }
});

//if mag select tag text kay mo popup ning div nga gi create
function showIcon(x, y) {
    let icon = document.createElement("div");
    icon.id = "sentiment-icon";
    icon.style.position = "absolute";
    icon.style.top = `${y}px`;
    icon.style.left = `${x}px`;
    icon.style.width = "20px";
    icon.style.height = "20px";
    icon.style.backgroundImage = "url('icons/icon48.png')";
    icon.style.cursor = "pointer";
    document.body.appendChild(icon);

    //dli mo gana ambot
    icon.addEventListener("click", () => {
        alert("Analyzing sentiment...");

    });
}


document.addEventListener("mousedown", () => {
    const icon = document.getElementById("sentiment-icon");
    if (icon && event.target !== icon) {
        icon.remove();
    }
});
