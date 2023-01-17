var allPanels = [];
allPanels.push(document.getElementById("ps1"));
allPanels.push(document.getElementById("ps2"));
allPanels.push(document.getElementById("ps3"));
allPanels.push(document.getElementById("ps4"));

var allButtons = [];
allButtons.push(document.getElementById("bs1"));
allButtons.push(document.getElementById("bs2"));
allButtons.push(document.getElementById("bs3"));
allButtons.push(document.getElementById("bs4"));

function showSkillId(id) {
    for(let i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.toggle("selected", false);
    };

    setTimeout(() => {
        allPanels[id - 1].classList.toggle("selected", true);
    }, 500);

    for(let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.toggle("selected", false);
    };

    allButtons[id - 1].classList.toggle("selected", true);
}