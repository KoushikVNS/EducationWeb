// IMU CET PrepHub - Login Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Check if URL has a hash for tab selection
    const hash = window.location.hash.substring(1);
    if (hash === 'signup') {
        const signupTab = document.getElementById('signup-tab');
        if (signupTab) {
            const tab = new bootstrap.Tab(signupTab);
            tab.show();
        }
    }
    
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const loginButton = document.getElementById('loginButton');
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Simple validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Show loading state
            loginButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Logging in...';
            loginButton.disabled = true;
            
            // Simulate API call (replace with actual API call in production)
            setTimeout(function() {
                // Redirect to dashboard
                window.location.href = 'dashboard.html';
            }, 1500);
        });
    }
    
    // Signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const signupButton = document.getElementById('signupButton');
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('signupEmail').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('signupPassword').value;
            const terms = document.getElementById('terms').checked;
            
            // Simple validation
            if (!firstName || !lastName || !email || !phone || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!terms) {
                alert('Please agree to the Terms of Service and Privacy Policy');
                return;
            }
            
            // Show loading state
            signupButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Creating account...';
            signupButton.disabled = true;
            
            // Simulate API call (replace with actual API call in production)
            setTimeout(function() {
                // Redirect to dashboard
                window.location.href = 'dashboard.html';
            }, 1500);
        });
    }
});