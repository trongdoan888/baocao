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

window.addEventListener('DOMContentLoaded', () => {
    const draft = localStorage.getItem('postDraft');
    if (draft) {
        const data = JSON.parse(draft);

        // Ẩn phần thông báo "Không có bài đăng nào"
        document.getElementById('empty-message').style.display = 'none';

        // Giao diện bản nháp
        const draftHTML = `
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 5px rgba(0,0,0,0.1); margin: 20px;">
                <h2 style="margin-top: 0;">${data.title || '(Không có tiêu đề)'}</h2>
                <p><strong>Mô tả:</strong> ${data.summary || '(Không có mô tả)'}</p>
                <p><strong>Danh mục:</strong> ${data.category || '(Chưa chọn)'}</p>
                <p><strong>Độ riêng tư:</strong> ${data.privacy === 'private' ? 'Riêng tư' : 'Công khai'}</p>
                <div style="margin-top: 10px;">
                    <button onclick="editDraft()" style="margin-right: 10px;">Chỉnh sửa</button>
                    <button onclick="deleteDraft()">Xoá</button>
                </div>
            </div>
        `;

        document.getElementById('draft-post').innerHTML = draftHTML;
    }
});

function editDraft() {
    window.location.href = 'postpass.html';
}

function deleteDraft() {
    localStorage.removeItem('postDraft');
    location.reload();
}