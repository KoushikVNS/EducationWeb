// IMU CET PrepHub - Dashboard Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize performance tabs
    const performanceTabs = document.querySelectorAll('#performanceTab button');
    performanceTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            performanceTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const target = this.getAttribute('data-bs-target').substring(1);
            document.querySelectorAll('#performanceTabContent .tab-pane').forEach(pane => {
                pane.classList.remove('show', 'active');
                if (pane.id === target) {
                    pane.classList.add('show', 'active');
                }
            });
        });
    });
    
    // Simulate progress update (in a real app, this would come from an API)
    function updateProgress() {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            const currentWidth = parseInt(bar.style.width);
            if (!isNaN(currentWidth) && Math.random() > 0.7) {
                // Randomly update some progress bars
                const newWidth = Math.min(currentWidth + 1, 100);
                bar.style.width = newWidth + '%';
                bar.setAttribute('aria-valuenow', newWidth);
                
                // Update percentage text if exists
                const parentDiv = bar.closest('.mb-3, .mb-4');
                if (parentDiv) {
                    const percentText = parentDiv.querySelector('.small.fw-medium:last-child');
                    if (percentText) {
                        percentText.textContent = newWidth + '%';
                    }
                }
            }
        });
    }
    
    // Update progress every 30 seconds (for demo purposes)
    setInterval(updateProgress, 30000);
    
    // Handle continue button clicks
    const continueButtons = document.querySelectorAll('.btn-primary');
    continueButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const courseCard = this.closest('.card');
            if (courseCard) {
                const courseTitle = courseCard.querySelector('.h6.fw-bold').textContent;
                console.log('Continuing course:', courseTitle);
                // In a real app, this would redirect to the last accessed lesson
            }
        });
    });
    
    // Simulate new activity notification
    setTimeout(function() {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'toast show';
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'assertive');
        notification.setAttribute('aria-atomic', 'true');
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.minWidth = '300px';
        notification.style.zIndex = '1050';
        
        notification.innerHTML = `
            <div class="toast-header bg-primary text-white">
                <strong class="me-auto">New Activity</strong>
                <small>Just now</small>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                <p class="mb-1">Your instructor has added a new lecture!</p>
                <div class="mt-2 pt-2 border-top">
                    <button type="button" class="btn btn-primary btn-sm">View Now</button>
                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Later</button>
                </div>
            </div>
        `;
        
        // Add to document
        document.body.appendChild(notification);
        
        // Add event listener to close button
        notification.querySelector('.btn-close').addEventListener('click', function() {
            notification.remove();
        });
        
        // Add event listener to "Later" button
        notification.querySelector('.btn-secondary').addEventListener('click', function() {
            notification.remove();
        });
        
        // Auto-remove after 5 seconds
        setTimeout(function() {
            if (document.body.contains(notification)) {
                notification.remove();
            }
        }, 5000);
    }, 10000);
});