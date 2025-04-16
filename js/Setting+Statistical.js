document.addEventListener('DOMContentLoaded', function () {
    /** ===================== COMMON FUNCTION ===================== **/
    function toggleBodyScroll(enable) {
        if (enable) {
            document.body.style.overflow = 'auto';
            document.body.classList.remove('no-scroll');
        } else {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('no-scroll');
        }
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.classList.remove('active');
        toggleBodyScroll(true);
        if (modal.id === 'titleModal') {
            var titleError = document.getElementById('titleError');
            if (titleError) {
                titleError.style.display = 'none';
            }
        }
    }

    /** ===================== TITLE MODAL ===================== **/
    var titleSetting = document.querySelector('.title-setting');
    var titleText = document.querySelector('.title-text');
    var titleModal = document.getElementById('titleModal');
    var titleInput = document.getElementById('titleInput');
    var saveTitleBtn = document.getElementById('saveBtn');
    var cancelTitleBtn = document.getElementById('cancelBtn');
    var titleError = document.getElementById('titleError');

    if (titleSetting) {
        titleSetting.addEventListener('click', function (e) {
            e.stopPropagation();
            titleInput.value = titleText.textContent;
            titleModal.classList.add('active');
            toggleBodyScroll(false);
            titleError.style.display = 'none';
        });
    }

    if (saveTitleBtn) {
        saveTitleBtn.addEventListener('click', function () {
            var newTitle = titleInput.value.trim();
            if (newTitle === '') {
                titleError.style.display = 'block';
                return;
            }
            titleText.textContent = newTitle;
            closeModal(titleModal);
        });
    }

    if (cancelTitleBtn) {
        cancelTitleBtn.addEventListener('click', function () {
            closeModal(titleModal);
        });
    }

    /** ===================== DESCRIPTION MODAL ===================== **/
    var descSetting = document.querySelector('.description-setting');
    var descText = document.querySelector('.description-text');
    var descModal = document.getElementById('descriptionModal');
    var descInput = document.getElementById('descriptionInput');
    var saveDescBtn = document.getElementById('saveDescBtn');
    var cancelDescBtn = document.getElementById('cancelDescBtn');

    if (descSetting) {
        descSetting.addEventListener('click', function (e) {
            e.stopPropagation();
            descInput.value = descText.textContent;
            descModal.classList.add('active');
            toggleBodyScroll(false);
        });
    }

    if (saveDescBtn) {
        saveDescBtn.addEventListener('click', function () {
            descText.textContent = descInput.value;
            closeModal(descModal);
        });
    }

    if (cancelDescBtn) {
        cancelDescBtn.addEventListener('click', function () {
            closeModal(descModal);
        });
    }

    /** ===================== LANGUAGE MODAL ===================== **/
    var languageSetting = document.querySelector('.language-setting');
    var languageText = document.querySelector('.language-text');
    var languageModal = document.getElementById('languageModal');
    var saveLanguageBtn = document.getElementById('saveLanguageBtn');
    var cancelLanguageBtn = document.getElementById('cancelLanguageBtn');
    var languageRadios = document.querySelectorAll('input[name="language"]');

    var languageMap = {
        v: 'Vietnamese - Tiếng Việt',
        e: 'English - Tiếng Anh',
        c: 'Chinese - Tiếng Trung',
        g: 'Germany - Tiếng Đức',
        k: 'Korea - Tiếng Hàn',
        r: 'Russia - Tiếng Nga',
        j: 'Japanese - Tiếng Nhật',
        f: 'France - Tiếng Pháp',
        i: 'Italia - Tiếng Ý',
        p: 'Portugal - Tiếng Bồ Đào Nha'
    };

    if (languageSetting) {
        languageSetting.addEventListener('click', function (e) {
            e.stopPropagation();
            languageModal.classList.add('active');
            toggleBodyScroll(false);
        });
    }

    if (saveLanguageBtn) {
        saveLanguageBtn.addEventListener('click', function () {
            var selected = 'v';
            for (var i = 0; i < languageRadios.length; i++) {
                if (languageRadios[i].checked) {
                    selected = languageRadios[i].value;
                }
            }
            languageText.textContent = languageMap[selected] || '';
            closeModal(languageModal);
        });
    }

    if (cancelLanguageBtn) {
        cancelLanguageBtn.addEventListener('click', function () {
            closeModal(languageModal);
        });
    }

    /** ===================== FAVICON MODAL ===================== **/
    var faviconSetting = document.querySelector('.favicon-setting');
    var faviconModal = document.getElementById('faviconModal');
    var faviconInput = document.getElementById('faviconInput');
    var chooseFileBtn = document.getElementById('chooseFileBtn');
    var imagePreview = document.getElementById('imagePreview');
    var saveFaviconBtn = document.getElementById('saveFaviconBtn');
    var cancelFaviconBtn = document.getElementById('cancelFaviconBtn');

    var faviconPreviewContainer = document.createElement('div');
    faviconPreviewContainer.className = 'favicon-preview-container';
    var faviconPreview = document.createElement('img');
    faviconPreview.className = 'favicon-preview';
    faviconPreview.style.display = 'none';
    faviconPreviewContainer.appendChild(faviconPreview);

    if (faviconSetting) {
        faviconSetting.appendChild(faviconPreviewContainer);

        faviconSetting.addEventListener('click', function (e) {
            e.stopPropagation();
            faviconModal.classList.add('active');
            toggleBodyScroll(false);
        });
    }

    if (chooseFileBtn) {
        chooseFileBtn.addEventListener('click', function () {
            faviconInput.click();
        });
    }

    if (faviconInput) {
        faviconInput.addEventListener('change', function () {
            var file = this.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var previewImg = imagePreview.querySelector('img');
                    if (!previewImg) {
                        previewImg = document.createElement('img');
                        imagePreview.innerHTML = '';
                        imagePreview.appendChild(previewImg);
                    }
                    previewImg.src = e.target.result;
                    var p = imagePreview.querySelector('p');
                    if (p) {
                        p.style.display = 'none';
                    }
                    previewImg.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (saveFaviconBtn) {
        saveFaviconBtn.addEventListener('click', function () {
            var file = faviconInput.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    faviconPreview.src = e.target.result;
                    faviconPreview.style.display = 'inline-block';
                    closeModal(faviconModal);
                };
                reader.readAsDataURL(file);
            } else {
                closeModal(faviconModal);
            }
        });
    }

    if (cancelFaviconBtn) {
        cancelFaviconBtn.addEventListener('click', function () {
            closeModal(faviconModal);
            imagePreview.innerHTML = '<p>Không có ảnh nào được chọn</p>';
            faviconInput.value = '';
        });
    }

    /** ===================== AVATAR MODAL ===================== **/
    var avatarButton = document.querySelector('.avatar');
    var avatarModal = document.getElementById('avatarModal');
    var avatarInput = document.getElementById('avatarInput');
    var saveAvatarBtn = document.getElementById('saveAvatarBtn');
    var cancelAvatarBtn = document.getElementById('cancelAvatarBtn');
    var avatarError = document.getElementById('avatarError');

    if (avatarButton) {
        avatarButton.addEventListener('click', function (e) {
            e.stopPropagation();
            avatarModal.classList.add('active');
            toggleBodyScroll(false);
            avatarError.style.display = 'none';
        });
    }

    if (saveAvatarBtn) {
        saveAvatarBtn.addEventListener('click', function () {
            var newName = avatarInput.value.trim();
            if (newName === '') {
                avatarError.style.display = 'block';
                return;
            }

            var words = newName.split(' ');
            var lastName = words[words.length - 1];
            var firstLetter = lastName.charAt(0).toUpperCase();
            var span = avatarButton.querySelector('span');
            if (span) {
                span.textContent = firstLetter;
            }

            closeModal(avatarModal);
            avatarInput.value = '';
        });
    }

    if (cancelAvatarBtn) {
        cancelAvatarBtn.addEventListener('click', function () {
            closeModal(avatarModal);
            avatarInput.value = '';
            avatarError.style.display = 'none';
        });
    }

    /** ===================== DOTS GRID NOTIFICATION ===================== **/
    var dotsGrid = document.querySelector('.dots-grid');
    var dotsNotificationBox = document.getElementById('dotsNotificationBox');
    var backToMainBtn = document.getElementById('backToMainBtn');
    var helpBox = document.getElementById('helpBox');

    if (dotsGrid) {
        dotsGrid.addEventListener('click', function (e) {
            e.stopPropagation();
            if (dotsNotificationBox.style.display === 'block') {
                dotsNotificationBox.style.display = 'none';
            } else {
                dotsNotificationBox.style.display = 'block';
            }
            helpBox.style.display = 'none';
        });
    }

    if (backToMainBtn) {
        backToMainBtn.addEventListener('click', function () {
            dotsNotificationBox.style.display = 'none';
        });
    }

    /** ===================== CLOSE MODALS WITH BUTTON/ESC ===================== **/
    var closeButtons = document.querySelectorAll('.close-modal');
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', function () {
            var modal = this.closest('.modal-overlay');
            closeModal(modal);
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            var modals = document.querySelectorAll('.modal-overlay.active');
            for (var i = 0; i < modals.length; i++) {
                closeModal(modals[i]);
            }
        }
    });

    /** ===================== HELP BOX ===================== **/
    var helpIcon = document.querySelector('.fa-question-circle');

    if (helpIcon) {
        helpIcon.addEventListener('click', function (e) {
            e.stopPropagation();
            if (helpBox.style.display === 'block') {
                helpBox.style.display = 'none';
            } else {
                helpBox.style.display = 'block';
            }
            dotsNotificationBox.style.display = 'none';
        });
    }

    document.addEventListener('click', function (e) {
        if (helpBox && !helpBox.contains(e.target) && e.target !== helpIcon) {
            helpBox.style.display = 'none';
        }
    });

    var helpItems = [];
    if (helpBox) {
        helpItems = helpBox.querySelectorAll('.help-item');
    }
    for (var i = 0; i < helpItems.length; i++) {
        helpItems[i].addEventListener('click', function () {
            if (this.textContent === 'Trợ giúp') {
                alert('Mở trang trợ giúp');
            } else if (this.textContent === 'Gửi phản hồi') {
                alert('Mở form phản hồi');
            }
            helpBox.style.display = 'none';
        });
    }

    /** ===================== CUSTOMIZE DROPDOWN ===================== **/
    function toggleDropdown() {
        var dropdown = document.getElementById("customizeDropdown");
        if (dropdown) {
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            } else {
                dropdown.style.display = "block";
            }
        }
    }

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.customize-container')) {
            var dropdowns = document.querySelectorAll('.customize-dropdown');
            for (var i = 0; i < dropdowns.length; i++) {
                dropdowns[i].style.display = "none";
            }
        }
    });

    /** ===================== FOOTER EVENT ===================== **/
    var footerText = document.querySelector('.footer-text');
    if (footerText) {
        footerText.addEventListener('click', function () {
            alert('Trang của bạn hiện không có người theo dõi');
        });
    }
});

// Lấy phần tử cần sử dụng
const menuToggle = document.querySelector(".menu-toggle");
const sideMenu = document.querySelector(".side-menu");
const closeMenu = document.querySelector(".close-menu");

// Khi ấn vào nút 3 gạch
menuToggle.addEventListener("click", (event) => {
    sideMenu.classList.add("open");
    event.stopPropagation(); // Ngăn chặn sự kiện click lan ra document
});

// Khi ấn vào nút đóng (×)
closeMenu.addEventListener("click", () => {
    sideMenu.classList.remove("open");
});

// Khi ấn ra ngoài menu
document.addEventListener("click", (event) => {
    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        sideMenu.classList.remove("open");
    }
});