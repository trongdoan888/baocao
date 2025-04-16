// Khởi tạo các select năm
function initializeYearSelects() {
    const currentYear = new Date().getFullYear();
    const yearSelects = [
        'workStartYear', 'workEndYear', 
        'highSchoolStartYear', 'highSchoolEndYear',
        'collegeStartYear', 'collegeEndYear'
    ];
    
    yearSelects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (!select) return;
        
        select.innerHTML = '<option value="">Chọn năm</option>';
        for (let year = currentYear; year >= 1950; year--) {
            select.innerHTML += `<option value="${year}">${year}</option>`;
        }
    });
}

// Modal chỉnh sửa thông tin
const editOptionsModal = document.getElementById('editOptionsModal');
const editProfileBtn = document.querySelector('.profile-actions button.edit');
const editIntroBtn = document.querySelector('.edit-intro');
const closeEditOptionsModal = document.getElementById('closeEditOptionsModal');

editProfileBtn.addEventListener('click', () => {
    editOptionsModal.style.display = 'block';
});

editIntroBtn.addEventListener('click', () => {
    editOptionsModal.style.display = 'block';
});

closeEditOptionsModal.addEventListener('click', () => {
    editOptionsModal.style.display = 'none';
});

// Liên kết các lựa chọn với modals
document.querySelectorAll('.edit-option').forEach(option => {
    option.addEventListener('click', () => {
        const modalId = option.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
        editOptionsModal.style.display = 'none';
    });
});

// Modal Thành phố
const cityModal = document.getElementById('cityModal');
const closeCityModal = document.getElementById('closeCityModal');
const cancelCityModal = document.getElementById('cancelCityModal');
const saveCityBtn = document.getElementById('saveCity');

closeCityModal.addEventListener('click', () => cityModal.style.display = 'none');
cancelCityModal.addEventListener('click', () => cityModal.style.display = 'none');

saveCityBtn.addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput').value;
    if (!cityInput) {
        alert('Vui lòng nhập tên thành phố');
        return;
    }
    cityModal.style.display = 'none';
});

// Modal Quê quán
const hometownModal = document.getElementById('hometownModal');
const closeHometownModal = document.getElementById('closeHometownModal');
const cancelHometownModal = document.getElementById('cancelHometownModal');
const saveHometownBtn = document.getElementById('saveHometown');

closeHometownModal.addEventListener('click', () => hometownModal.style.display = 'none');
cancelHometownModal.addEventListener('click', () => hometownModal.style.display = 'none');

saveHometownBtn.addEventListener('click', () => {
    const hometownInput = document.getElementById('hometownInput').value;
    if (!hometownInput) {
        alert('Vui lòng nhập quê quán');
        return;
    }
    hometownModal.style.display = 'none';
});

// Modal Công việc
const workModal = document.getElementById('workModal');
const closeWorkModal = document.getElementById('closeWorkModal');
const cancelWorkModal = document.getElementById('cancelWorkModal');
const saveWorkBtn = document.getElementById('saveWork');

closeWorkModal.addEventListener('click', () => workModal.style.display = 'none');
cancelWorkModal.addEventListener('click', () => workModal.style.display = 'none');

saveWorkBtn.addEventListener('click', () => {
    const company = document.getElementById('company').value;
    const position = document.getElementById('position').value;
    const city = document.getElementById('workCity').value;
    const startYear = document.getElementById('workStartYear').value;
    
    if (!company || !position || !city || !startYear) {
        alert('Vui lòng điền đầy đủ thông tin bắt buộc');
        return;
    }
    
    workModal.style.display = 'none';
    document.getElementById('workForm').reset();
});

// Modal Trung học
const highSchoolModal = document.getElementById('highSchoolModal');
const closeHighSchoolModal = document.getElementById('closeHighSchoolModal');
const cancelHighSchoolModal = document.getElementById('cancelHighSchoolModal');
const saveHighSchoolBtn = document.getElementById('saveHighSchool');

closeHighSchoolModal.addEventListener('click', () => highSchoolModal.style.display = 'none');
cancelHighSchoolModal.addEventListener('click', () => highSchoolModal.style.display = 'none');

saveHighSchoolBtn.addEventListener('click', () => {
    const schoolName = document.getElementById('highSchoolName').value;
    const startYear = document.getElementById('highSchoolStartYear').value;
    const endYear = document.getElementById('highSchoolEndYear').value;
    
    if (!schoolName || !startYear || !endYear) {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
    }
    
    highSchoolModal.style.display = 'none';
    document.getElementById('highSchoolForm').reset();
});

// Modal Đại học
const collegeModal = document.getElementById('collegeModal');
const closeCollegeModal = document.getElementById('closeCollegeModal');
const cancelCollegeModal = document.getElementById('cancelCollegeModal');
const saveCollegeBtn = document.getElementById('saveCollege');

closeCollegeModal.addEventListener('click', () => collegeModal.style.display = 'none');
cancelCollegeModal.addEventListener('click', () => collegeModal.style.display = 'none');

saveCollegeBtn.addEventListener('click', () => {
    const collegeName = document.getElementById('collegeName').value;
    const startYear = document.getElementById('collegeStartYear').value;
    const endYear = document.getElementById('collegeEndYear').value;
    
    if (!collegeName || !startYear) {
        alert('Vui lòng điền đầy đủ thông tin bắt buộc');
        return;
    }
    
    collegeModal.style.display = 'none';
    document.getElementById('collegeForm').reset();
});

// Modal Tình trạng quan hệ
const relationshipModal = document.getElementById('relationshipModal');
const closeRelationshipModal = document.getElementById('closeRelationshipModal');
const cancelRelationshipModal = document.getElementById('cancelRelationshipModal');
const saveRelationshipBtn = document.getElementById('saveRelationship');

closeRelationshipModal.addEventListener('click', () => relationshipModal.style.display = 'none');
cancelRelationshipModal.addEventListener('click', () => relationshipModal.style.display = 'none');

saveRelationshipBtn.addEventListener('click', () => {
    const relationship = document.getElementById('relationshipInput').value;
    if (!relationship) {
        alert('Vui lòng chọn tình trạng quan hệ');
        return;
    }
    
    relationshipModal.style.display = 'none';
});

// Modal Số điện thoại
const phoneModal = document.getElementById('phoneModal');
const closePhoneModal = document.getElementById('closePhoneModal');
const cancelPhoneModal = document.getElementById('cancelPhoneModal');
const savePhoneBtn = document.getElementById('savePhone');
const phoneInput = document.getElementById('phoneInput');
const phoneError = document.getElementById('phoneError');

closePhoneModal.addEventListener('click', () => phoneModal.style.display = 'none');
cancelPhoneModal.addEventListener('click', () => phoneModal.style.display = 'none');

phoneInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, ''); // Chỉ giữ lại số
});

savePhoneBtn.addEventListener('click', () => {
    const phoneNumber = phoneInput.value;
    if (!phoneNumber) {
        phoneError.textContent = 'Vui lòng nhập số điện thoại';
        phoneError.style.display = 'block';
        return;
    }
    
    if (phoneNumber.length !== 10) {
        phoneError.textContent = 'Số điện thoại phải có 10 chữ số';
        phoneError.style.display = 'block';
        return;
    }
    
    phoneModal.style.display = 'none';
    phoneError.style.display = 'none';
});

// Đóng modal khi click ra ngoài
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});

// Khởi tạo các năm cho các trường select
initializeYearSelects();

// Lấy phần tử cần sử dụng
const menuToggle = document.querySelector(".menu-toggle");
const sideMenu = document.querySelector(".side-menu");
const closeMenu = document.querySelector(".close-menu");

// Khi ấn vào nút 3 gạch
menuToggle.addEventListener("click", (event) => {
    sideMenu.classList.add("open");  // Thêm lớp 'open' cho menu
    event.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
});

// Khi ấn vào nút đóng (×)
closeMenu.addEventListener("click", () => {
    sideMenu.classList.remove("open");  // Loại bỏ lớp 'open' để ẩn menu
});

// Khi click ra ngoài menu
document.addEventListener("click", (event) => {
    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        sideMenu.classList.remove("open");  // Đóng menu nếu click ra ngoài
    }
});
