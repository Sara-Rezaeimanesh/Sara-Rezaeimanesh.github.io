const numberOfButtons = 60;
const buttonGrid = document.getElementById('buttonGrid');

let arrows = ["→", "←", "↑", "↓"];
let btn_names = new Map();
btn_names.set(59, "Click on the Path. Go ↑");
btn_names.set(49, "↑");
btn_names.set(39, "↑");
btn_names.set(29, "↑");
btn_names.set(19, "↑");
btn_names.set(9, "←");
btn_names.set(8, "←");
btn_names.set(7, "←");
btn_names.set(6, "←");
btn_names.set(5, "↓");
btn_names.set(15, "↓");
btn_names.set(25, "↓");
btn_names.set(35, "←");
btn_names.set(34, "←");
btn_names.set(33, "←");
btn_names.set(32, "←");
btn_names.set(31, "↓");
btn_names.set(41, "↓");
btn_names.set(51, "→");
btn_names.set(52, "→");
btn_names.set(53, "→");
btn_names.set(54, "↑");
// btn_names.set(44, "Click!");
let clicks = 0;


for (let i = 1; i <= numberOfButtons; i++) {
    let inner_class = 'btn__inner'
    if(i == 59) {
        inner_class = 'btn__inner_2'
    }
    let btn_arrow = Math.floor(Math.random() * 4);
    btn_label = arrows[btn_arrow]
    if(btn_names.has(i)) {
        btn_label = btn_names.get(i)
    }
    const buttonDiv = document.createElement('div');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn--light');
    const btnInner = document.createElement('span');
    btnInner.classList.add(inner_class);
    const btnSlide = document.createElement('span');
    btnSlide.classList.add('btn__slide');
    const btnContent = document.createElement('span');
    btnContent.classList.add('btn__content');
    btnContent.textContent = btn_label;
    if(i == 44) {
        button.id = "final"
        btnContent.id = "final_button";
    }
    if(i == 59) {
        button.addEventListener('click', function() {
            clicks = 0;
        });
    }
    if(i != 44 && btn_names.has(i)) {
        button.addEventListener('click', function() {
            clicks = clicks + 1;
            if(clicks == 21) {
                var element = document.getElementById('final_button');
                element.textContent = "Click!";
                // element.classList.add('btn__final');
                var element2 = document.getElementById('final');
                element2.addEventListener('click', function() {
                    window.location.href = 'GBP_3.html';
                });
            }
        });
    }
    // if(i == 44) {
    //     button.addEventListener('click', function() {
    //         window.location.href = 'GBP_3.html';
    //     });
    // }

    btnInner.appendChild(btnSlide);
    btnInner.appendChild(btnContent);
    button.appendChild(btnInner);
    buttonDiv.appendChild(button);
    buttonGrid.appendChild(buttonDiv);
}
