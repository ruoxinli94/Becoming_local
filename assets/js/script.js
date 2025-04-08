// Main script for Becoming App

document.addEventListener('DOMContentLoaded', function() {
    // Initialize any components that need JavaScript functionality
    initSwipeCards();
    initTaskCheckboxes();
    initChatInteractions();
    
    // Handle page navigation
    const links = document.querySelectorAll('a[data-page]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            window.location.href = targetPage;
        });
    });

    // Handle back button
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.history.back();
        });
    });
});

// Swipe card functionality
function initSwipeCards() {
    const cards = document.querySelectorAll('.swipe-card');
    const actions = document.querySelectorAll('.swipe-btn');
    
    if (!cards.length || !actions.length) return;
    
    // Simulating swipe actions for demo
    actions.forEach(btn => {
        btn.addEventListener('click', function() {
            const topCard = document.querySelector('.swipe-card:first-child');
            
            if (this.classList.contains('bg-success')) {
                // Swipe right (agree)
                topCard.style.transform = 'translateX(150%) rotate(30deg)';
            } else if (this.classList.contains('bg-danger')) {
                // Swipe left (disagree)
                topCard.style.transform = 'translateX(-150%) rotate(-30deg)';
            } else {
                // Skip
                topCard.style.transform = 'translateY(-150px) scale(0.8)';
            }
            
            // Remove card after animation completes
            setTimeout(() => {
                topCard.remove();
                // If no more cards, redirect to next screen
                if (document.querySelectorAll('.swipe-card').length === 0) {
                    window.location.href = 'chatbot.html';
                }
            }, 300);
        });
    });
}

// Handle task checkboxes
function initTaskCheckboxes() {
    const checkboxes = document.querySelectorAll('.form-check-input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.nextElementSibling;
            
            if (this.checked) {
                label.classList.add('text-decoration-line-through');
            } else {
                label.classList.remove('text-decoration-line-through');
            }
            
            updateTaskProgress();
        });
    });
}

// Update task progress indicators
function updateTaskProgress() {
    const progressElements = document.querySelectorAll('.progress-bar');
    
    if (!progressElements.length) return;
    
    const totalTasks = document.querySelectorAll('.form-check-input[type="checkbox"]').length;
    const completedTasks = document.querySelectorAll('.form-check-input[type="checkbox"]:checked').length;
    const progressPercentage = (completedTasks / totalTasks) * 100;
    
    progressElements.forEach(el => {
        if (el.parentElement.closest('.plan-milestone')) {
            // Don't update milestone progress automatically
            return;
        }
        
        el.style.width = `${progressPercentage}%`;
        el.setAttribute('aria-valuenow', progressPercentage);
    });
    
    // Update counter elements if they exist
    const countElements = document.querySelectorAll('.task-count, .completed-count, .progress-percentage');
    
    if (countElements.length) {
        document.querySelector('.task-count').textContent = totalTasks;
        document.querySelector('.completed-count').textContent = completedTasks;
        document.querySelector('.progress-percentage').textContent = `${Math.round(progressPercentage)}%`;
    }
}

// Handle chat interactions
function initChatInteractions() {
    const chatInput = document.querySelector('.chat-input');
    const sendButton = document.querySelector('.chat-send-btn');
    const chatBody = document.querySelector('.chat-body');
    
    if (!chatInput || !sendButton || !chatBody) return;
    
    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    function sendMessage() {
        const message = chatInput.value.trim();
        
        if (!message) return;
        
        // Add user message
        const userMessageHTML = `
            <div class="message message-user">
                <p>${message}</p>
                <span class="message-time">Just now</span>
            </div>
        `;
        
        chatBody.insertAdjacentHTML('beforeend', userMessageHTML);
        chatInput.value = '';
        
        // Scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
        
        // Simulate AI response after a delay (for demo purposes)
        setTimeout(() => {
            // Check for specific keywords to simulate different app paths
            let response;
            
            if (message.toLowerCase().includes('simulation') || message.toLowerCase().includes('practice')) {
                response = "Let's try a simulation to practice this conversation. Click <a href='simulation.html' class='text-white fw-bold'>here</a> to begin.";
            } else if (message.toLowerCase().includes('letter') || message.toLowerCase().includes('future')) {
                response = "Writing a letter to your future self can be very insightful. Would you like to <a href='future-self.html' class='text-white fw-bold'>try it</a> now?";
            } else if (message.toLowerCase().includes('plan') || message.toLowerCase().includes('growth')) {
                response = "I think it would help to create a structured growth plan. Let's <a href='growth-plan.html' class='text-white fw-bold'>develop one</a> together.";
            } else {
                const botResponses = [
                    "That's a great point. Let's explore that further.",
                    "I understand how you feel. What do you think is the root cause?",
                    "Would you like to try a simulation to practice this scenario?",
                    "I've added this to your growth plan. You'll find tasks related to this in your weekly schedule.",
                    "This is excellent progress! How did it make you feel when you accomplished this?"
                ];
                
                response = botResponses[Math.floor(Math.random() * botResponses.length)];
            }
            
            const botMessageHTML = `
                <div class="message message-bot">
                    <p>${response}</p>
                    <span class="message-time">Just now</span>
                </div>
            `;
            
            chatBody.insertAdjacentHTML('beforeend', botMessageHTML);
            
            // Scroll to bottom again
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}