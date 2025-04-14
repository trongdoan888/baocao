document.addEventListener('DOMContentLoaded', function () {
    /** ===================== COMMON FUNCTION ===================== **/
    const toggleBodyScroll = (enable) => {
        document.body.style.overflow = enable ? 'auto' : 'hidden';
        document.body.classList.toggle('no-scroll', !enable);
    };

    const closeModal = (modal) => {
        if (!modal) return;
        modal.classList.remove('active');
        toggleBodyScroll(true);
        if (modal.id === 'titleModal' && titleError) {
            titleError.style.display = 'none';
        }
    };

    /** ===================== TITLE MODAL ===================== **/
    const titleSetting = document.querySelector('.title-setting');
    const titleText = document.querySelector('.title-text');
    const titleModal = document.getElementById('titleModal');
    const titleInput = document.getElementById('titleInput');
    const saveTitleBtn = document.getElementById('saveBtn');
    const cancelTitleBtn = document.getElementById('cancelBtn');
    const titleError = document.getElementById('titleError');

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
            const newTitle = titleInput.value.trim();
            if (!newTitle) {
                titleError.style.display = 'block';
                return;
            }
            titleText.textContent = newTitle;
            closeModal(titleModal);
        });
    }

    if (cancelTitleBtn) {
        cancelTitleBtn.addEventListener('click', () => closeModal(titleModal));
    }

    /** ===================== DESCRIPTION MODAL ===================== **/
    const descSetting = document.querySelector('.description-setting');
    const descText = document.querySelector('.description-text');
    const descModal = document.getElementById('descriptionModal');
    const descInput = document.getElementById('descriptionInput');
    const saveDescBtn = document.getElementById('saveDescBtn');
    const cancelDescBtn = document.getElementById('cancelDescBtn');

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
        cancelDescBtn.addEventListener('click', () => closeModal(descModal));
    }

    /** ===================== LANGUAGE MODAL ===================== **/
    const languageSetting = document.querySelector('.language-setting');
    const languageText = document.querySelector('.language-text');
    const languageModal = document.getElementById('languageModal');
    const saveLanguageBtn = document.getElementById('saveLanguageBtn');
    const cancelLanguageBtn = document.getElementById('cancelLanguageBtn');
    const languageRadios = document.querySelectorAll('input[name="language"]');

    const languageMap = {
        v: 'Vietnamese - Tiếng Việt',
        e: 'English - Tiếng Anh',
        c: 'Chinese - Tiếng Trung',
        g: 'Germany - Tiếng Đức',
        k: 'Korea - Tiếng Hàn',
        r: 'Russia - Tiếng Nga',
        j: 'Japanese - Tiếng Nhật',
        f: 'France - Tiếng Pháp',
        i: 'Italia - Tiếng Ý',
        p: 'Portugal - Tiếng Bồ Đào Nha',
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
            let selected = 'v';
            languageRadios.forEach(r => { if (r.checked) selected = r.value; });
            languageText.textContent = languageMap[selected] || '';
            closeModal(languageModal);
        });
    }

    if (cancelLanguageBtn) {
        cancelLanguageBtn.addEventListener('click', () => closeModal(languageModal));
    }

    /** ===================== FAVICON MODAL ===================== **/
    const faviconSetting = document.querySelector('.favicon-setting');
    const faviconModal = document.getElementById('faviconModal');
    const faviconInput = document.getElementById('faviconInput');
    const chooseFileBtn = document.getElementById('chooseFileBtn');
    const imagePreview = document.getElementById('imagePreview');
    const saveFaviconBtn = document.getElementById('saveFaviconBtn');
    const cancelFaviconBtn = document.getElementById('cancelFaviconBtn');

    const faviconPreviewContainer = document.createElement('div');
    faviconPreviewContainer.className = 'favicon-preview-container';
    const faviconPreview = document.createElement('img');
    faviconPreview.className = 'favicon-preview';
    faviconPreview.style.display = 'none';
    faviconPreviewContainer.appendChild(faviconPreview);
    faviconSetting?.appendChild(faviconPreviewContainer);

    if (faviconSetting) {
        faviconSetting.addEventListener('click', function (e) {
            e.stopPropagation();
            faviconModal.classList.add('active');
            toggleBodyScroll(false);
        });
    }

    chooseFileBtn?.addEventListener('click', () => faviconInput.click());

    faviconInput?.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                let previewImg = imagePreview.querySelector('img');
                if (!previewImg) {
                    previewImg = document.createElement('img');
                    imagePreview.innerHTML = '';
                    imagePreview.appendChild(previewImg);
                }
                previewImg.src = e.target.result;
                imagePreview.querySelector('p')?.style?.setProperty('display', 'none');
                previewImg.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    saveFaviconBtn?.addEventListener('click', () => {
        const file = faviconInput.files[0];
        if (file) {
            const reader = new FileReader();
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

    cancelFaviconBtn?.addEventListener('click', () => {
        closeModal(faviconModal);
        imagePreview.innerHTML = '<p>Không có ảnh nào được chọn</p>';
        faviconInput.value = '';
    });

    /** ===================== AVATAR MODAL ===================== **/
    const avatarButton = document.querySelector('.avatar');
    const avatarModal = document.getElementById('avatarModal');
    const avatarInput = document.getElementById('avatarInput');
    const saveAvatarBtn = document.getElementById('saveAvatarBtn');
    const cancelAvatarBtn = document.getElementById('cancelAvatarBtn');
    const avatarError = document.getElementById('avatarError');

    avatarButton?.addEventListener('click', function (e) {
        e.stopPropagation();
        avatarModal.classList.add('active');
        toggleBodyScroll(false);
        avatarError.style.display = 'none';
    });

    saveAvatarBtn?.addEventListener('click', function () {
        const newName = avatarInput.value.trim();
        if (!newName) {
            avatarError.style.display = 'block';
            return;
        }

        const words = newName.split(' ');
        const lastName = words[words.length - 1];
        const firstLetter = lastName.charAt(0).toUpperCase();
        avatarButton.querySelector('span').textContent = firstLetter;

        closeModal(avatarModal);
        avatarInput.value = '';
    });

    cancelAvatarBtn?.addEventListener('click', function () {
        closeModal(avatarModal);
        avatarInput.value = '';
        avatarError.style.display = 'none';
    });

    /** ===================== DOTS GRID NOTIFICATION ===================== **/
    const dotsGrid = document.querySelector('.dots-grid');
    const dotsNotificationBox = document.getElementById('dotsNotificationBox');
    const backToMainBtn = document.getElementById('backToMainBtn');

    dotsGrid?.addEventListener('click', function (e) {
        e.stopPropagation();
        dotsNotificationBox.style.display = dotsNotificationBox.style.display === 'block' ? 'none' : 'block';
        helpBox.style.display = 'none';
    });

    backToMainBtn?.addEventListener('click', () => {
        dotsNotificationBox.style.display = 'none';
    });

    /** ===================== CLOSE MODALS WITH BUTTON/ESC ===================== **/
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const modal = this.closest('.modal-overlay');
            closeModal(modal);
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(modal => closeModal(modal));
        }
    });

    /** ===================== HELP BOX ===================== **/
    const helpIcon = document.querySelector('.fa-question-circle');
    const helpBox = document.getElementById('helpBox');

    helpIcon?.addEventListener('click', function (e) {
        e.stopPropagation();
        helpBox.style.display = helpBox.style.display === 'block' ? 'none' : 'block';
        dotsNotificationBox.style.display = 'none';
    });

    document.addEventListener('click', function (e) {
        if (helpBox && !helpBox.contains(e.target) && e.target !== helpIcon) {
            helpBox.style.display = 'none';
        }
    });

    helpBox?.querySelectorAll('.help-item').forEach(item => {
        item.addEventListener('click', function () {
            if (this.textContent === 'Trợ giúp') {
                alert('Mở trang trợ giúp');
            } else if (this.textContent === 'Gửi phản hồi') {
                alert('Mở form phản hồi');
            }
            helpBox.style.display = 'none';
        });
    });

    /** ===================== CUSTOMIZE DROPDOWN ===================== **/
    const toggleDropdown = () => {
        const dropdown = document.getElementById("customizeDropdown");
        if (dropdown) dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    };

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.customize-container')) {
            document.querySelectorAll('.customize-dropdown').forEach(dropdown => {
                dropdown.style.display = "none";
            });
        }
    });

    /** ===================== FOOTER CLICK EVENT ===================== **/
    const footerText = document.querySelector('.footer-text');
    footerText?.addEventListener('click', function() {
        alert('Trang của bạn hiện không có người theo dõi');
    });
});
