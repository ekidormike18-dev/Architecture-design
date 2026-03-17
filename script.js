// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search functionality
const searchInput = document.getElementById('search');
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    if (searchInput.value.trim()) {
        alert('Searching for: ' + searchInput.value);
        searchInput.value = '';
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim()) {
        alert('Searching for: ' + searchInput.value);
        searchInput.value = '';
    }
});

// Add to cart functionality
document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        this.textContent = 'Added!';
        this.style.backgroundColor = '#4CAF50';
        this.style.color = 'white';
        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.style.backgroundColor = '#f0f0f0';
            this.style.color = '#0066cc';
        }, 2000);
    });
});

// Explore button functionality
document.querySelector('.btn-primary').addEventListener('click', () => {
    document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
});

// Project Data
const projectsData = {
    'modern-office': {
        title: 'Modern Office',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
        duration: '6 months',
        budget: '$150,000 - $250,000',
        status: 'Completed',
        description: 'Contemporary workspace design with natural lighting, open floor plan, and sustainable materials. This modern office features collaborative spaces, private meeting rooms, and state-of-the-art technology infrastructure suitable for tech companies and startups.'
    },
    'luxury-residence': {
        title: 'Luxury Residence',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
        duration: '8 months',
        budget: '$300,000 - $500,000',
        status: 'Completed',
        description: 'Elegant home design with premium finishes, panoramic windows, and smart home integration. This luxury residence features a spa, theater room, wine cellar, and panoramic views of the landscape with sustainable architecture principles.'
    },
    'commercial-complex': {
        title: 'Commercial Complex',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop',
        duration: '12 months',
        budget: '$1,000,000 - $2,000,000',
        status: 'In Progress',
        description: 'Multi-purpose building with innovative architecture featuring retail spaces, office suites, and residential apartments. The complex includes parking facilities, landscaped courtyards, and community spaces designed for mixed-use development.'
    },
    'resort-spa': {
        title: 'Resort & Spa',
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop',
        duration: '10 months',
        budget: '$800,000 - $1,500,000',
        status: 'Completed',
        description: 'Luxury resort with stunning landscape integration, featuring infinity pools, spa facilities, and waterfront cottages. The design incorporates natural elements, sustainable practices, and offers seamless indoor-outdoor living spaces for ultimate relaxation.'
    },
    'retail-space': {
        title: 'Retail Space',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
        duration: '7 months',
        budget: '$500,000 - $800,000',
        status: 'Completed',
        description: 'Modern shopping mall with interactive design and cutting-edge retail environment. Features premium brand boutiques, entertainment zones, dining areas, and interactive digital displays to create an engaging shopping experience for customers.'
    },
    'educational-hub': {
        title: 'Educational Hub',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        duration: '9 months',
        budget: '$600,000 - $1,000,000',
        status: 'Completed',
        description: 'State-of-the-art learning facility with modern classrooms, research laboratories, and student amenities. The campus design promotes collaboration and innovation with green spaces, multipurpose halls, and technology-enabled learning environments.'
    }
};

// Modal Functions
function openModal(projectId) {
    const project = projectsData[projectId];
    if (project) {
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalDuration').textContent = project.duration;
        document.getElementById('modalBudget').textContent = project.budget;
        document.getElementById('modalStatus').textContent = project.status;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalFullDescription').textContent = project.description;
        document.getElementById('projectModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function contactProject() {
    const projectTitle = document.getElementById('modalTitle').textContent;
    alert(`Thank you for your interest in: ${projectTitle}\n\nPlease contact us at:\nEmail: ekidormike18@gmail.com\nPhone: +254 713 533 740`);
    closeModal();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal();
    }
}