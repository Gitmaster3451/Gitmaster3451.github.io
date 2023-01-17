class Anim {
    constructor(_id) {
        this.id = _id;
        this.transition = false;
    }

    getId() {
        return this.id;
    }
}
let animatons = [];

function addAnim(id, anim, loc, offset, keep) {
    let element;
    let found = false;
    for(let i = 0; i < animatons.length; i++) {
        if(animatons[i].getId() == id) {
            element = animatons[i];
            found = true;
        } 
    }

    if(!found) {
        element = animatons.push(new Anim(id));
    }

    // Remove the transition class
    const e = document.getElementById(id);
    e.classList.remove(anim);
    e.style.cssText += "animation-delay: " + offset + "s";

    e.classList.toggle("animate__animated", true)

    // Create the observer, same as before:
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                element.transition = true;
                e.style.cssText += "animation-delay: " + offset + "s";
                e.classList.add(anim);

                setTimeout(function() {
                    if(keep == null || keep == false) {
                        e.classList.remove(anim);
                        element.transition = false;
                    } 
                }, 1000 + (1000 * offset));

                return;
            }
            e.classList.remove(anim);
        });
    });

    observer.observe(document.querySelector(loc));
}

function addLetter(splitted, interval, text, e, step) {
    if(step > text.length - 1) {
        clearInterval(interval);
        return;
    }
    e.textContent = e.textContent + splitted[step];
}

function animateText(id, time) {
    var e = document.getElementById(id);
    var text = e.textContent;
    e.textContent = "";
    var splitted = text.split("");
    var step = 0;
    var interval = setInterval( function() {
        addLetter(splitted, interval, text, e, step);
        step++;
    }, time);
}
