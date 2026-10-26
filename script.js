// Student-level Comlab Activities Data
const defaultComlabData = {
    midterm: [
        {
            id: 101,
            title: "Activity 1: HTML Structure & Tags",
            date: "Feb 05, 2026",
            tools: "HTML5, VS Code",
            icon: "code",
            img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
            code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Profile</title>\n</head>\n<body>\n  <h1>Pangalan Ko</h1>\n  <p>BSIT Student ako.</p>\n</body>\n</html>"
        },
        {
            id: 102,
            title: "Activity 2: CSS Layouts & Styling",
            date: "Feb 12, 2026",
            tools: "CSS3, Flexbox",
            icon: "layout",
            img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
            code: "body {\n  background-color: pink;\n  font-family: Arial, sans-serif;\n  text-align: center;\n}\nh1 {\n  color: white;\n}"
        },
        {
            id: 103,
            title: "Activity 3: Form Elements",
            date: "Feb 19, 2026",
            tools: "HTML Forms",
            icon: "file-input",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
            code: "<form>\n  <label>Pangalan:</label>\n  <input type=\"text\" name=\"name\">\n  <br>\n  <input type=\"submit\" value=\"I-submit\">\n</form>"
        },
        {
            id: 104,
            title: "Activity 4: Responsive Web Design",
            date: "Feb 26, 2026",
            tools: "Responsive CSS",
            icon: "smartphone",
            img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
            code: "@media screen and (max-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}"
        },
        {
            id: 105,
            title: "Activity 5: Basic JS DOM Manipulation",
            date: "Mar 05, 2026",
            tools: "JavaScript",
            icon: "mouse-pointer",
            img: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&q=80",
            code: "function myMessage() {\n  alert('Hello! Salamat sa pag-click.');\n}\n\n// <button onclick=\"myMessage()\">Click Me</button>"
        },
        {
            id: 106,
            title: "Activity 6: Grade Checker",
            date: "Mar 12, 2026",
            tools: "JS Logic",
            icon: "calculator",
            img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
            code: "let grade = 85;\nif (grade >= 75) {\n  console.log('Passed ka na!');\n} else {\n  console.log('Bawi next time.');\n}"
        },
        {
            id: 107,
            title: "Activity 7: Midterm Lab Examination",
            date: "Mar 19, 2026",
            tools: "HTML, CSS, JS",
            icon: "award",
            img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
            code: "// Midterm Exam Project\n// Personal Webpage ni Student\nconsole.log('Natapos ko na po ang Midterm Exam!');"
        }
    ],
    finals: [
        {
            id: 201,
            title: "Activity 1: Simple Background Changer",
            date: "Apr 02, 2026",
            tools: "HTML & JS",
            icon: "palette",
            img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
            code: "function changeColor() {\n  document.body.style.backgroundColor = 'pink';\n}"
        },
        {
            id: 202,
            title: "Activity 2: Simple List of Activities",
            date: "Apr 09, 2026",
            tools: "JavaScript",
            icon: "database",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            code: "let activities = ['Act 1', 'Act 2', 'Act 3'];\nfor(let i = 0; i < activities.length; i++) {\n  console.log(activities[i]);\n}"
        },
        {
            id: 203,
            title: "Activity 3: Show/Hide Text",
            date: "Apr 16, 2026",
            tools: "JS, HTML",
            icon: "layers",
            img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
            code: "function toggleText() {\n  let x = document.getElementById('myText');\n  if (x.style.display === 'none') {\n    x.style.display = 'block';\n  } else {\n    x.style.display = 'none';\n  }\n}"
        },
        {
            id: 204,
            title: "Activity 4: Simple Calculator",
            date: "Apr 23, 2026",
            tools: "JavaScript",
            icon: "hard-drive",
            img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
            code: "function addNumbers(num1, num2) {\n  let sum = num1 + num2;\n  alert('Ang total ay: ' + sum);\n}"
        },
        {
            id: 205,
            title: "Activity 5: Simple Image Viewer",
            date: "Apr 30, 2026",
            tools: "JavaScript",
            icon: "globe",
            img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
            code: "function showNewImage() {\n  document.getElementById('myImg').src = 'photo2.jpg';\n}"
        },
        {
            id: 206,
            title: "Activity 6: Login Form Validation",
            date: "May 07, 2026",
            tools: "HTML & JS",
            icon: "monitor",
            img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
            code: "let user = document.getElementById('username').value;\nif(user == '') {\n  alert('Kailangan pong i-fill out ang username!');\n}"
        },
        {
            id: 207,
            title: "Activity 7: Final Capstone Project",
            date: "May 14, 2026",
            tools: "HTML, CSS, JS",
            icon: "sparkles",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            code: "// Final Portfolio Output\n// Maraming salamat po sa pagtuturo Sir/Ma'am!\nalert('Welcome to my Final Portfolio!');"
        }
    ]
};

// Load saved data from localStorage or use defaults
let comlabData = JSON.parse(localStorage.getItem('comlabActivitiesData')) || defaultComlabData;
let currentTerm = 'midterm';

function saveData() {
    localStorage.setItem('comlabActivitiesData', JSON.stringify(comlabData));
    updateTotalStats();
}

function updateTotalStats() {
    const total = comlabData.midterm.length + comlabData.finals.length;
    const statEl = document.getElementById('statTotal');
    if (statEl) statEl.innerText = total;
}

// Theme Switcher
function toggleTheme() {
    const htmlEl = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        themeIcon.setAttribute('data-lucide', 'sun');
    } else {
        htmlEl.classList.add('dark');
        themeIcon.setAttribute('data-lucide', 'moon');
    }
    lucide.createIcons();
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('hidden');
}

// Switch Term (Midterm / Finals)
function switchTerm(term) {
    currentTerm = term;
    const midtermBtn = document.getElementById('midtermBtn');
    const finalsBtn = document.getElementById('finalsBtn');

    if (term === 'midterm') {
        midtermBtn.className = "px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 active-tab shadow-md";
        finalsBtn.className = "px-7 py-3 rounded-xl font-semibold text-sm bg-white dark:bg-darkcard text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-darkborder hover:border-brand-500 transition-all duration-200";
    } else {
        finalsBtn.className = "px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 active-tab shadow-md";
        midtermBtn.className = "px-7 py-3 rounded-xl font-semibold text-sm bg-white dark:bg-darkcard text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-darkborder hover:border-brand-500 transition-all duration-200";
    }
    renderActivities();
}

// Render Activities Grid
function renderActivities() {
    const grid = document.getElementById('activitiesGrid');
    grid.innerHTML = '';
    const items = comlabData[currentTerm];

    if (items.length === 0) {
        grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        <i data-lucide="folder-open" class="w-12 h-12 mx-auto mb-3 opacity-50"></i>
        <p>Wala pang activities dito. I-click ang "+ Add Activity" sa itaas para magdagdag!</p>
      </div>
    `;
        lucide.createIcons();
        return;
    }

    items.forEach(act => {
        const card = document.createElement('div');
        card.className = "bg-white dark:bg-darkcard border border-slate-200 dark:border-darkborder rounded-3xl p-6 shadow-sm activity-card flex flex-col justify-between group relative";

        card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-500 flex items-center justify-center">
            <i data-lucide="${act.icon || 'code'}" class="w-6 h-6"></i>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
              Completed
            </span>
            <button onclick="deleteActivity(event, '${currentTerm}', ${act.id})" title="Delete Activity" class="p-1.5 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
        <h4 onclick="openModal('${currentTerm}', ${act.id})" class="font-bold text-slate-900 dark:text-white text-base group-hover:text-brand-500 transition-colors cursor-pointer mb-2">${act.title}</h4>
      </div>

      <div class="mt-6 pt-4 border-t border-slate-100 dark:border-darkborder flex items-center justify-between cursor-pointer" onclick="openModal('${currentTerm}', ${act.id})">
        <span class="text-xs text-slate-400 font-medium">${act.date}</span>
        <span class="text-xs font-semibold text-brand-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          View Work <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </span>
      </div>
    `;
        grid.appendChild(card);
    });

    lucide.createIcons();
}

// Delete Activity
function deleteActivity(event, term, id) {
    event.stopPropagation();
    if (confirm("Gusto mo bang burahin ang activity na ito?")) {
        comlabData[term] = comlabData[term].filter(a => a.id !== id);
        saveData();
        renderActivities();
    }
}

// Open / Close View Modal
function openModal(term, id) {
    const item = comlabData[term].find(a => a.id === id);
    if (!item) return;

    document.getElementById('modalTermBadge').innerText = term.toUpperCase() + " TERM";
    document.getElementById('modalTitle').innerText = item.title;
    document.getElementById('modalDate').innerText = item.date;
    document.getElementById('modalTools').innerText = item.tools;
    document.getElementById('modalImg').src = item.img || "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80";
    document.getElementById('modalCodeSnippet').innerText = item.code || "// Walang code na nailagay.";

    switchModalTab('preview');
    document.getElementById('activityModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('activityModal').classList.add('hidden');
}

// Open / Close Add Modal
function openAddModal() {
    document.getElementById('addActivityModal').classList.remove('hidden');
}

function closeAddModal() {
    document.getElementById('addActivityModal').classList.add('hidden');
    document.getElementById('addActivityForm').reset();
}

// Handle Add New Activity Submit with File Upload
function handleAddNewActivity(event) {
    event.preventDefault();

    const term = document.getElementById('newTerm').value;
    const title = document.getElementById('newTitle').value;
    const date = document.getElementById('newDate').value;
    const tools = document.getElementById('newTools').value;
    const code = document.getElementById('newCode').value;
    const fileInput = document.getElementById('newImgFile');

    const file = fileInput.files[0];
    if (!file) return;

    // Convert uploaded image file to Base64 data URL
    const reader = new FileReader();
    reader.onload = function (e) {
        const imageDataUrl = e.target.result;

        const newActivity = {
            id: Date.now(),
            title,
            date,
            tools,
            img: imageDataUrl,
            code,
            icon: "code"
        };

        comlabData[term].push(newActivity);
        saveData();
        closeAddModal();
        switchTerm(term);
    };

    reader.readAsDataURL(file);
}

// Modal Internal Tab Switcher (Preview vs Code)
function switchModalTab(tab) {
    const previewBtn = document.getElementById('tabPreviewBtn');
    const codeBtn = document.getElementById('tabCodeBtn');
    const previewContent = document.getElementById('modalPreviewContent');
    const codeContent = document.getElementById('modalCodeContent');

    if (tab === 'preview') {
        previewBtn.className = "px-4 py-2 rounded-xl text-xs font-semibold bg-brand-600 text-white transition-all shadow-sm";
        codeBtn.className = "px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-darkcard text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all";
        previewContent.classList.remove('hidden');
        codeContent.classList.add('hidden');
    } else {
        codeBtn.className = "px-4 py-2 rounded-xl text-xs font-semibold bg-brand-600 text-white transition-all shadow-sm";
        previewBtn.className = "px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-darkcard text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all";
        codeContent.classList.remove('hidden');
        previewContent.classList.add('hidden');
    }
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    updateTotalStats();
    renderActivities();
});







const canvas = document.getElementById("mouse-trail");
const ctx = canvas.getContext("2d");

let particles = [];
let hue = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

document.addEventListener("mousemove", (e) => {
    for (let i = 0; i < 3; i++) {
        particles.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 6 + 2,
            life: 1,
            hue: hue + Math.random() * 40 - 20,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3
        });
    }

    hue = (hue + 5) % 360;
});

function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.018;
        p.size *= 0.985;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 65%, ${p.life})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsl(${p.hue}, 100%, 60%)`;
        ctx.fill();
    });

    particles = particles.filter(p => p.life > 0);

    ctx.shadowBlur = 0;
    requestAnimationFrame(animate);
}

animate();
