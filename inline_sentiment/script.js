let text = "";

document.addEventListener("mouseup", (event) => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
        showIcon(event.pageX, event.pageY);
        text = selectedText;
    }
});

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

    icon.addEventListener("click", () => {
        alert(text);
    });
}

document.addEventListener("mousedown", () => {
    const icon = document.getElementById("sentiment-icon");
    if (icon && event.target !== icon) {
        icon.remove();
    }
});

const creditBar = document.querySelector('div[slot="credit-bar"]');

if (creditBar) {
    const button = document.createElement("button");
    button.textContent = "Analyze Post";
    button.type = "button";
    button.classList.add("analyze-button");
    creditBar.insertAdjacentElement('afterend', button);
}
