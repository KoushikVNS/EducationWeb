// IMU CET PrepHub - Course Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get course ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    
    // Course data (in a real application, this would come from an API)
    const courses = {
        '1': {
            title: 'Complete IMU-CET Preparation',
            price: '₹9,999',
            duration: '6 months',
            lessons: 120,
            students: 1500,
            rating: 4.8
        },
        '2': {
            title: 'Mathematics for IMU-CET',
            price: '₹3,999',
            duration: '3 months',
            lessons: 45,
            students: 850,
            rating: 4.7
        },
        '3': {
            title: 'Physics for IMU-CET',
            price: '₹3,999',
            duration: '3 months',
            lessons: 40,
            students: 780,
            rating: 4.6
        },
        '4': {
            title: 'Chemistry for IMU-CET',
            price: '₹3,999',
            duration: '3 months',
            lessons: 38,
            students: 720,
            rating: 4.5
        },
        '5': {
            title: 'General Knowledge for IMU-CET',
            price: '₹2,999',
            duration: '2 months',
            lessons: 30,
            students: 650,
            rating: 4.4
        },
        '6': {
            title: 'English for IMU-CET',
            price: '₹2,999',
            duration: '2 months',
            lessons: 25,
            students: 600,
            rating: 4.3
        }
    };
    
    // Update course details if course ID exists
    if (courseId && courses[courseId]) {
        const course = courses[courseId];
        
        // Update page title
        document.title = `${course.title} - IMU CET PrepHub`;
        
        // Update course title
        const titleElement = document.getElementById('course-title');
        if (titleElement) {
            titleElement.textContent = course.title;
        }
        
        // Update course banner image
        const bannerImage = document.querySelector('.position-relative img');
        if (bannerImage) {
            bannerImage.src = `https://placehold.co/1200x400/e9ecef/495057?text=${encodeURIComponent(course.title)}`;
            bannerImage.alt = course.title;
        }
        
        // Update course details
        document.querySelectorAll('.course-price').forEach(el => {
            el.textContent = course.price;
        });
        
        // Update course metadata
        const metadataElements = document.querySelectorAll('.d-flex.flex-wrap.gap-3 span');
        if (metadataElements.length >= 4) {
            metadataElements[0].textContent = course.duration;
            metadataElements[1].textContent = `${course.lessons} lessons`;
            metadataElements[2].textContent = `${course.students} students`;
            metadataElements[3].textContent = `${course.rating}/5 rating`;
        }
    }
    
    // Handle enrollment button click
    const enrollButton = document.querySelector('.btn-primary.btn-lg');
    if (enrollButton) {
        enrollButton.addEventListener('click', function() {
            // Check if user is logged in (in a real app, this would be a proper auth check)
            const isLoggedIn = false; // Change to true to simulate logged in state
            
            if (isLoggedIn) {
                // Show confirmation modal or redirect to payment page
                alert('Redirecting to payment page...');
                // window.location.href = 'payment.html?course=' + courseId;
            } else {
                // Redirect to login page
                window.location.href = 'login.html?redirect=course-detail.html?id=' + courseId;
            }
        });
    }
    
    // Handle tab switching
    const tabLinks = document.querySelectorAll('[data-bs-toggle="tab"]');
    tabLinks.forEach(tabLink => {
        tabLink.addEventListener('shown.bs.tab', function(event) {
            // Update URL hash based on active tab
            history.pushState(null, null, '#' + event.target.id.replace('-tab', ''));
        });
    });
    
    // Check if URL has a hash for tab selection
    const hash = window.location.hash.substring(1);
    if (hash) {
        const tab = document.getElementById(hash + '-tab');
        if (tab) {
            const bsTab = new bootstrap.Tab(tab);
            bsTab.show();
        }
    }
});