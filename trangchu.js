document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling cho các liên kết trong thanh điều hướng
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Trừ khoảng cách của header cố định
          behavior: 'smooth'
        });
      }
    });
  });

  // Xử lý sự kiện submit cho form đăng nhập
  const loginForm = document.getElementById('loginForm');
  const errorMsg = document.getElementById('errorMsg');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailOrPhone = loginForm.querySelector('input[type="text"]').value.trim();
      const password = loginForm.querySelector('input[type="password"]').value.trim();
      
      // Reset thông báo lỗi
      errorMsg.textContent = '';
      
      if (emailOrPhone === '' && password === '') {
        errorMsg.textContent = 'Vui lòng nhập Email/Phone và Mật khẩu!';
      } else if (emailOrPhone === '') {
        errorMsg.textContent = 'Vui lòng nhập Email/Phone!';
      } else if (password === '') {
        errorMsg.textContent = 'Vui lòng nhập Mật khẩu!';
      } else {
        // Giả lập đăng nhập thành công (ở đây bạn có thể kiểm tra tài khoản thật nếu cần)
        alert('Đăng nhập thành công!');
        
        // Chuyển hướng đến trang "dangbai.html"
        window.location.href = 'dangbai.html';
      }
    });
  }
});
