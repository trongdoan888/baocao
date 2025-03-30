// Xử lý modal thêm nơi làm việc
const addWorkBtn = document.getElementById('addWorkBtn');
const workModal = document.getElementById('workModal');
const closeModal = document.getElementById('closeModal');
const cancelModal = document.getElementById('cancelModal');

addWorkBtn.addEventListener('click', () => {
    workModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    workModal.style.display = 'none';
});
cancelModal.addEventListener('click', () => {
    workModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == workModal) {
        workModal.style.display = 'none';
    }
});

const saveWork = document.getElementById('saveWork');
saveWork.addEventListener('click', () => {
    const company = document.getElementById('company').value;
    const position = document.getElementById('position').value;
    const city = document.getElementById('city').value;
    const startYear = document.getElementById('startYear').value;
    const workDuration = document.getElementById('workDuration').value;
    const description = document.getElementById('description').value;

    if (!company || !position || !city || !startYear || !workDuration) {
        alert('Vui lòng điền đầy đủ thông tin vào tất cả các trường bắt buộc!');
        return;
    }

    alert(`Thông tin nơi làm việc đã được lưu! Khoảng thời gian: ${workDuration}`);
    workModal.style.display = 'none';
});

// Xử lý modal thêm trường trung học
const addHighSchoolBtn = document.getElementById('addHighSchoolBtn');
const highSchoolModal = document.getElementById('highSchoolModal');
const closeHighSchoolModal = document.getElementById('closeHighSchoolModal');
const cancelHighSchoolModal = document.getElementById('cancelHighSchoolModal');

addHighSchoolBtn.addEventListener('click', () => {
    highSchoolModal.style.display = 'block';
});

closeHighSchoolModal.addEventListener('click', () => {
    highSchoolModal.style.display = 'none';
});
cancelHighSchoolModal.addEventListener('click', () => {
    highSchoolModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == highSchoolModal) {
        highSchoolModal.style.display = 'none';
    }
});

const saveHighSchool = document.getElementById('saveHighSchool');
saveHighSchool.addEventListener('click', () => {
    const highSchoolName = document.getElementById('highSchoolName').value;
    const highSchoolStartYear = document.getElementById('highSchoolStartYear').value;
    const highSchoolEndYear = document.getElementById('highSchoolEndYear').value;

    if (!highSchoolName || !highSchoolStartYear || !highSchoolEndYear) {
        alert('Vui lòng điền đầy đủ thông tin vào tất cả các trường bắt buộc!');
        return;
    }

    const newHighSchoolItem = document.createElement('div');
    newHighSchoolItem.className = 'info-item default';
    newHighSchoolItem.innerHTML = `
        <i class="fas fa-graduation-cap"></i> 
        Học tại ${highSchoolName} (${highSchoolStartYear} - ${highSchoolEndYear})
    `;
    
    const mainContent = document.querySelector('.main-content');
    const defaultItems = document.querySelectorAll('.info-item.default');
    if(defaultItems.length > 0) {
        mainContent.insertBefore(newHighSchoolItem, defaultItems[0]);
    } else {
        mainContent.appendChild(newHighSchoolItem);
    }

    alert(`Thông tin trường trung học đã được lưu!`);
    highSchoolModal.style.display = 'none';
    document.getElementById('highSchoolForm').reset();
});

// Xử lý modal thêm trường cao đẳng/đại học
const addCollegeBtn = document.getElementById('addCollegeBtn');
const collegeModal = document.getElementById('collegeModal');
const closeCollegeModal = document.getElementById('closeCollegeModal');
const cancelCollegeModal = document.getElementById('cancelCollegeModal');

addCollegeBtn.addEventListener('click', () => {
    collegeModal.style.display = 'block';
});

closeCollegeModal.addEventListener('click', () => {
    collegeModal.style.display = 'none';
});
cancelCollegeModal.addEventListener('click', () => {
    collegeModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == collegeModal) {
        collegeModal.style.display = 'none';
    }
});

const saveCollege = document.getElementById('saveCollege');
saveCollege.addEventListener('click', () => {
    const collegeName = document.getElementById('collegeName').value;
    const collegeStartYear = document.getElementById('collegeStartYear').value;
    const collegeEndYear = document.getElementById('collegeEndYear').value;

    if (!collegeName || !collegeStartYear || !collegeEndYear) {
        alert('Vui lòng điền đầy đủ thông tin vào tất cả các trường bắt buộc!');
        return;
    }

    const newCollegeItem = document.createElement('div');
    newCollegeItem.className = 'info-item default';
    newCollegeItem.innerHTML = `
        <i class="fas fa-graduation-cap"></i> 
        Học tại ${collegeName} (${collegeStartYear} - ${collegeEndYear})
    `;

    const mainContent = document.querySelector('.main-content');
    const defaultItems = document.querySelectorAll('.info-item.default');
    if(defaultItems.length > 0) {
        mainContent.insertBefore(newCollegeItem, defaultItems[0]);
    } else {
        mainContent.appendChild(newCollegeItem);
    }

    alert(`Thông tin trường cao đẳng/đại học đã được lưu!`);
    collegeModal.style.display = 'none';
    document.getElementById('collegeForm').reset();
});

// Xử lý thu gọn sidebar
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarList = document.querySelector('.sidebar-list');
const toggleArrow = document.querySelector('.toggle-arrow');

sidebarToggle.addEventListener('click', () => {
    sidebarList.classList.toggle('collapsed');
    toggleArrow.classList.toggle('collapsed');
});