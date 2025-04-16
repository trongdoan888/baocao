document.addEventListener('DOMContentLoaded', () => {
    try {
        // Menu toggle logic
        const menuToggle = document.querySelector(".menu-toggle");
        const sideMenu = document.querySelector(".side-menu");
        const closeMenu = document.querySelector(".close-menu");

        if (!menuToggle || !sideMenu || !closeMenu) {
            console.error("Menu elements not found:", { menuToggle, sideMenu, closeMenu });
            return;
        }

        menuToggle.addEventListener("click", (e) => {
            console.log("Menu toggle clicked");
            sideMenu.classList.add("open");
            e.stopPropagation();
        });

        closeMenu.addEventListener("click", () => {
            console.log("Close menu clicked");
            sideMenu.classList.remove("open");
        });

        document.addEventListener("click", (e) => {
            if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                console.log("Clicked outside menu");
                sideMenu.classList.remove("open");
            }
        });

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

        if (editProfileBtn) {
            editProfileBtn.addEventListener('click', () => {
                editOptionsModal.style.display = 'block';
            });
        }
        if (editIntroBtn) {
            editIntroBtn.addEventListener('click', () => {
                editOptionsModal.style.display = 'block';
            });
        }
        if (closeEditOptionsModal) {
            closeEditOptionsModal.addEventListener('click', () => {
                editOptionsModal.style.display = 'none';
            });
        }

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

        if (closeCityModal) {
            closeCityModal.addEventListener('click', () => cityModal.style.display = 'none');
        }
        if (cancelCityModal) {
            cancelCityModal.addEventListener('click', () => cityModal.style.display = 'none');
        }
        if (saveCityBtn) {
            saveCityBtn.addEventListener('click', () => {
                const cityInput = document.getElementById('cityInput').value;
                if (!cityInput) {
                    alert('Vui lòng nhập tên thành phố');
                    return;
                }
                cityModal.style.display = 'none';
            });
        }

        // Modal Quê quán
        const hometownModal = document.getElementById('hometownModal');
        const closeHometownModal = document.getElementById('closeHometownModal');
        const cancelHometownModal = document.getElementById('cancelHometownModal');
        const saveHometownBtn = document.getElementById('saveHometown');

        if (closeHometownModal) {
            closeHometownModal.addEventListener('click', () => hometownModal.style.display = 'none');
        }
        if (cancelHometownModal) {
            cancelHometownModal.addEventListener('click', () => hometownModal.style.display = 'none');
        }
        if (saveHometownBtn) {
            saveHometownBtn.addEventListener('click', () => {
                const hometownInput = document.getElementById('hometownInput').value;
                if (!hometownInput) {
                    alert('Vui lòng nhập quê quán');
                    return;
                }
                hometownModal.style.display = 'none';
            });
        }

        // Modal Công việc
        const workModal = document.getElementById('workModal');
        const closeWorkModal = document.getElementById('closeWorkModal');
        const cancelWorkModal = document.getElementById('cancelWorkModal');
        const saveWorkBtn = document.getElementById('saveWork');

        if (closeWorkModal) {
            closeWorkModal.addEventListener('click', () => workModal.style.display = 'none');
        }
        if (cancelWorkModal) {
            cancelWorkModal.addEventListener('click', () => workModal.style.display = 'none');
        }
        if (saveWorkBtn) {
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
        }

        // Modal Trung học
        const highSchoolModal = document.getElementById('highSchoolModal');
        const closeHighSchoolModal = document.getElementById('closeHighSchoolModal');
        const cancelHighSchoolModal = document.getElementById('cancelHighSchoolModal');
        const saveHighSchoolBtn = document.getElementById('saveHighSchool');

        if (closeHighSchoolModal) {
            closeHighSchoolModal.addEventListener('click', () => highSchoolModal.style.display = 'none');
        }
        if (cancelHighSchoolModal) {
            cancelHighSchoolModal.addEventListener('click', () => highSchoolModal.style.display = 'none');
        }
        if (saveHighSchoolBtn) {
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
        }

        // Modal Đại học
        const collegeModal = document.getElementById('collegeModal');
        const closeCollegeModal = document.getElementById('closeCollegeModal');
        const cancelCollegeModal = document.getElementById('cancelCollegeModal');
        const saveCollegeBtn = document.getElementById('saveCollege');

        if (closeCollegeModal) {
            closeCollegeModal.addEventListener('click', () => collegeModal.style.display = 'none');
        }
        if (cancelCollegeModal) {
            cancelCollegeModal.addEventListener('click', () => collegeModal.style.display = 'none');
        }
        if (saveCollegeBtn) {
            saveCollegeBtn.addEventListener('click', () => {
                const collegeName = document.getElementById('collegeName').value;
                const startYear = document.getElementById('collegeStartYear').value;

                if (!collegeName || !startYear) {
                    alert('Vui lòng điền đầy đủ thông tin bắt buộc');
                    return;
                }

                collegeModal.style.display = 'none';
                document.getElementById('collegeForm').reset();
            });
        }

        // Modal Tình trạng quan hệ
        const relationshipModal = document.getElementById('relationshipModal');
        const closeRelationshipModal = document.getElementById('closeRelationshipModal');
        const cancelRelationshipModal = document.getElementById('cancelRelationshipModal');
        const saveRelationshipBtn = document.getElementById('saveRelationship');

        if (closeRelationshipModal) {
            closeRelationshipModal.addEventListener('click', () => relationshipModal.style.display = 'none');
        }
        if (cancelRelationshipModal) {
            cancelRelationshipModal.addEventListener('click', () => relationshipModal.style.display = 'none');
        }
        if (saveRelationshipBtn) {
            saveRelationshipBtn.addEventListener('click', () => {
                const relationship = document.getElementById('relationshipInput').value;
                if (!relationship) {
                    alert('Vui lòng chọn tình trạng quan hệ');
                    return;
                }

                relationshipModal.style.display = 'none';
            });
        }

        // Modal Số điện thoại
        const phoneModal = document.getElementById('phoneModal');
        const closePhoneModal = document.getElementById('closePhoneModal');
        const cancelPhoneModal = document.getElementById('cancelPhoneModal');
        const savePhoneBtn = document.getElementById('savePhone');
        const phoneInput = document.getElementById('phoneInput');
        const phoneError = document.getElementById('phoneError');

        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/\D/g, '');
            });
        }
        if (closePhoneModal) {
            closePhoneModal.addEventListener('click', () => phoneModal.style.display = 'none');
        }
        if (cancelPhoneModal) {
            cancelPhoneModal.addEventListener('click', () => phoneModal.style.display = 'none');
        }
        if (savePhoneBtn) {
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
        }

        // Đóng modal khi click ra ngoài
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.style.display = 'none';
                });
            }
        });

        // Khởi tạo các năm
        initializeYearSelects();

    } catch (error) {
        console.error("Error in script execution:", error);
    }
});