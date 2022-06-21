// react moment
const PFP_SIZE = 100
const GRID_SIZE = Math.floor(window.innerWidth * (98/100)  / PFP_SIZE) // 7;

function makeImageGrid() {
    // Assuming we start on the same date
    const bigDiv = document.createElement("div");
    let games = Math.max(skyler.labels.length, thuy.labels.length);
    for (let i = 0; i < games;) {
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("name", `row_${i / GRID_SIZE}`);
        // corresponding values pls
        for (let j = 0; i < games && j < GRID_SIZE; i++, j++) {
            let skyler_score = skyler.data[i];
            let thuy_score = thuy.data[i];
            let image_str = "tie";
            if (skyler_score != thuy_score) {
                if (skyler_score == null || skyler_score > thuy_score) {
                    image_str = "twee"; // WHY AM I TWEE T.T
                } else {
                    image_str = "skyler";
                }
            }
            const image_div = document.createElement("div")
            image_div.setAttribute("class", "tooltip");
            const image = document.createElement("img");
            const hover_text = document.createElement("span");
            hover_text.setAttribute("class", "tooltiptext");
            hover_text.textContent = skyler.labels[i];
            image.setAttribute("src", `./data/images/${image_str}.png`);
            image_div.appendChild(image);
            image_div.appendChild(hover_text);
            image.width = PFP_SIZE.toString();
            image.height = PFP_SIZE.toString();
            rowDiv.appendChild(image_div);
        }
        bigDiv.appendChild(rowDiv);
    }
    document.getElementById("streak_grid").appendChild(bigDiv);
}

makeImageGrid();