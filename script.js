// Toggle Sidebar Menu (for mobile)
const menuToggle = document.querySelector('#menu-toggle');
const sidebar = document.querySelector('.sidebar');
menuToggle.onclick = () => {
    sidebar.classList.toggle('active');
};

// Highlight active nav item
const navLinks = document.querySelectorAll('.sidebar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Task Board: Add New Task
const addTaskBtn = document.querySelector('#add-task-btn');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('.task-list');

addTaskBtn.onclick = () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-task">×</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';

        // Delete functionality
        li.querySelector('.delete-task').onclick = () => {
            li.remove();
        };
    }
};

// Timer
let timerDisplay = document.querySelector('.timer-display');
let startBtn = document.querySelector('#start-timer');
let stopBtn = document.querySelector('#stop-timer');
let resetBtn = document.querySelector('#reset-timer');

let timer = null;
let seconds = 0;

function updateTimer() {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    timerDisplay.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

startBtn.onclick = () => {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            updateTimer();
        }, 1000);
    }
};

stopBtn.onclick = () => {
    clearInterval(timer);
    timer = null;
};

resetBtn.onclick = () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateTimer();
};

// Modal for Chat (Optional Future Feature)
const chatBtn = document.querySelector('#open-chat');
const chatModal = document.querySelector('.chat-modal');
const chatClose = document.querySelector('#close-chat');

if (chatBtn && chatModal && chatClose) {
    chatBtn.onclick = () => chatModal.classList.add('open');
    chatClose.onclick = () => chatModal.classList.remove('open');
    window.onclick = (e) => {
        if (e.target == chatModal) chatModal.classList.remove('open');
    };
}
