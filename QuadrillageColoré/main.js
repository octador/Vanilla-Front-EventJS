

const boxs = document.querySelectorAll(".box");
const tlb = ["bleu", "red", "green", "yellow", "gray"]
let colorIndex = 0;


boxs.forEach(box => {
    box.addEventListener('click', (event) => {
        if (colorIndex === 5) {
            colorIndex = 0;
        }
        colorIndex = (colorIndex + 1);
        console.log(tlb[colorIndex]);
        box.style.background = tlb[colorIndex];

    })
});

