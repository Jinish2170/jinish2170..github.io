document.addEventListener('DOMContentLoaded', () => {
    // Define project data array
    const projects = [
        {
            name: "♟️ Chess Bot",
            description: "AI-powered chess engine using minimax with alpha-beta pruning and heuristic evaluation to create a challenging and fun chess experience.",
            tech: "Python",
            features: "Intelligent AI · Strategic Gameplay"
        },
        {
            name: "🛡️ Cyber Security AI File Scanner",
            description: "AI-driven tool to scan files (PDF, PPT, TXT) for potential threats. Trained on a cybersecurity dataset to ensure comprehensive analysis.",
            tech: "Python",
            features: "Threat Detection · Wide File Format Support"
        },
        {
            name: "🔍 Web Assistant AI",
            description: "Voice-controlled assistant with speech recognition and web search integration, improving browsing and workflow efficiency.",
            tech: "Python",
            features: "Voice Navigation · Automation"
        },
        {
            name: "📈 BizzPortal",
            description: "A business management platform with modern React.js architecture, responsive design, and features like authentication and data visualization.",
            tech: "React",
            features: "User Authentication · Data Visualization · Responsive Design"
        }
    ];

    // Get the projects container
    const projectsContainer = document.getElementById("projectsContainer");

    if (projectsContainer) {
        projects.forEach(project => {
            const card = document.createElement("div");
            card.className = "project-card";
            
            card.innerHTML = `
                <div class="project-content">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        <span class="project-tag">${project.tech}</span>
                        ${project.features.split('·').map(feature => 
                            `<span class="project-tag">${feature.trim()}</span>`
                        ).join('')}
                    </div>
                    <div class="project-links">
                        <a href="#contact" class="project-btn">Learn More</a>
                    </div>
                </div>
            `;
            
            projectsContainer.appendChild(card);
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