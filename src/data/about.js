// Data for the Dhamma school page
export const schoolData = {
    history: [
        { year: 1985, event: 'Establishment of the first Sunday Dhamma classes' },
        { year: 1992, event: 'Construction of our dedicated education building' },
        { year: 2000, event: 'Introduction of the Youth Leadership Program' },
        { year: 2010, event: 'Development of our innovative mindfulness curriculum' },
        { year: 2018, event: 'Opening of our new meditation garden and library' }
    ],
    staff: {
        teaching: [
            {
                name: 'Venerable Chandima',
                role: 'Principal',
                description: 'Leading our school since 2015, brings 25 years of Buddhist education experience'
            },
            {
                name: 'Venerable Sumedha',
                role: 'Senior Dhamma Teacher',
                description: 'Specializing in Buddhist Scripture and meditation instruction'
            }
        ],
        administrative: [
            {
                name: 'Mrs. Lisa Thompson',
                role: 'Administrative Director',
                description: 'Managing school operations and parent communications'
            },
            {
                name: 'Mr. James Wilson',
                role: 'Resources Coordinator',
                description: 'Overseeing educational materials and facility maintenance'
            }
        ]
    },
    prefects: [
        {
            name: 'Anjali Kumar',
            role: 'Head Prefect',
            description: 'Leading the student body and coordinating prefect activities'
        },
        {
            name: 'Michael Chang',
            role: 'Deputy Head Prefect',
            description: 'Assisting in student activities and maintaining school discipline'
        }
    ]
};

// Create and return timeline items
export function createTimelineItems(container) {
    schoolData.history.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-event">${item.event}</div>
        `;
        container.appendChild(timelineItem);
        
        setTimeout(() => {
            timelineItem.style.animation = 'fadeUp 0.5s forwards';
        }, index * 200);
    });
}

// Create and return staff cards
export function createStaffCards(container) {
    [...schoolData.staff.teaching, ...schoolData.staff.administrative].forEach(member => {
        const staffCard = document.createElement('div');
        staffCard.className = 'staff-card';
        staffCard.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.role}</p>
            <div class="staff-details">
                <p>${member.description}</p>
            </div>
        `;
        container.appendChild(staffCard);

        staffCard.addEventListener('click', () => {
            const details = staffCard.querySelector('.staff-details');
            details.classList.toggle('expanded');
        });
    });
}

// Create and return prefect cards
export function createPrefectCards(container) {
    schoolData.prefects.forEach((prefect, index) => {
        const prefectCard = document.createElement('div');
        prefectCard.className = 'prefect-card';
        prefectCard.innerHTML = `
            <h3>${prefect.name}</h3>
            <p>${prefect.role}</p>
            <p>${prefect.description}</p>
        `;
        container.appendChild(prefectCard);
        
        setTimeout(() => {
            prefectCard.style.animation = 'fadeUp 0.5s forwards';
        }, index * 200);
    });
}

// Initialize tab functionality
export function initializeTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const sectionId = tab.dataset.section;
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(sectionId).classList.add('active');
        });
    });
}

// Initialize prefect toggle functionality
export function initializePrefectToggle(toggle, container) {
    let prefectsShown = false;

    toggle.addEventListener('click', () => {
        prefectsShown = !prefectsShown;
        container.style.display = prefectsShown ? 'block' : 'none';
        toggle.textContent = prefectsShown ? 'Hide Prefect Details' : 'Show Prefect Details';

        if (prefectsShown) {
            container.innerHTML = '';
            createPrefectCards(container);
        }
    });
}

// Main initialization function
export function initializeAboutPage() {
    // Initialize tabs
    initializeTabs();

    // Initialize timeline
    const timelineContainer = document.querySelector('.timeline');
    if (timelineContainer) {
        createTimelineItems(timelineContainer);
    }

    // Initialize staff section
    const staffContainer = document.querySelector('.staff-grid');
    if (staffContainer) {
        createStaffCards(staffContainer);
    }

    // Initialize prefects section
    const prefectToggle = document.querySelector('.prefect-toggle');
    const prefectContainer = document.querySelector('.prefect-list');
    if (prefectToggle && prefectContainer) {
        initializePrefectToggle(prefectToggle, prefectContainer);
    }
}