document.addEventListener('DOMContentLoaded', () => {
    const scrollLeftButton = document.getElementById('scrollLeft');
    const scrollRightButton = document.getElementById('scrollRight');
    const projectsCards = document.getElementById('projectsCards');

    console.log('scrollLeftButton:', scrollLeftButton);
    console.log('scrollRightButton:', scrollRightButton);
    console.log('projectsCards:', projectsCards);

    if (scrollLeftButton && scrollRightButton && projectsCards) {
        scrollLeftButton.addEventListener('click', () => {
            projectsCards.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });

        scrollRightButton.addEventListener('click', () => {
            projectsCards.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    } else {
        console.error('One or more elements not found.');
    }
});
