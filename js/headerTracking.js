function addHeaderTracking(target, btnID) {
    // Create the observer, same as before:
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.getElementById(btnID).classList.toggle("selected", true);
                return;
            }
            document.getElementById(btnID).classList.toggle("selected", false);
        });
    });

    document.getElementById(btnID).onclick = function() {
        let yOffset = -180;
        let y = document.querySelector(target).getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    observer.observe(document.querySelector(target))
}
function scrollToTarget(target) {
    let yOffset = -180;
    let y = document.querySelector(target).getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

