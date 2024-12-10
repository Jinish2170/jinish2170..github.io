document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Project One',
            description: 'Description of Project One.',
            image: 'assets/images/project1.jpg',
            link: 'https://example.com/project-one'
        },
        {
            title: 'Project Two',
            description: 'Description of Project Two.',
            image: 'assets/images/project2.jpg',
            link: 'https://example.com/project-two'
        }
        // Add more projects as needed
    ];

    const projectsContainer = document.getElementById('projectsContainer');

    if (projects.length === 0) {
        projectsContainer.innerHTML = '<p>No projects to display at this time.</p>';
    } else {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;

            projectsContainer.appendChild(projectCard);
        });
    }

    /* Project Filtering */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* Initialize ScrollReveal */
    ScrollReveal().reveal('.project-card', {
        interval: 200,
        distance: '20px',
        origin: 'bottom'
    });

    /* Add hover effects to project cards */
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('hovered');
        });
        card.addEventListener('mouseout', () => {
            card.classList.remove('hovered');
        });
    });
});