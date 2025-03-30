const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  if (sidebar.classList.contains('open')) {
    // Khi mở sidebar, di chuyển toggle button sang bên phải của sidebar
    toggleBtn.style.left = '260px';
    toggleBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
  } else {
    // Khi đóng sidebar, đưa toggle button về vị trí ban đầu
    toggleBtn.style.left = '10px';
    toggleBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
  }
});