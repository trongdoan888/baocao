// Xử lý cuộn mượt cho navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
  // Danh sách hình nền theo chủ đề (URL từ Unsplash)
  var images = {
    travel: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Biển Santorini
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Thành phố cổ
      'https://images.unsplash.com/photo-1495567720989-cebdb147d66b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'  // Phong cảnh núi
    ],
    science: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Vũ trụ
      'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Phòng thí nghiệm
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'  // Phân tử
    ],
    health: [
      'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Bệnh viện
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Dụng cụ y tế
      'https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'  // Chăm sóc sức khỏe
    ],
    nature: [
      'https://images.unsplash.com/photo-1472214103451-9374a3b26f41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Rừng
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Thác nước
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'  // Núi
    ],
    technology: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Chip máy tính
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Laptop
      'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'  // Công nghệ tương lai
    ],
    art: [
      'https://images.unsplash.com/photo-1500462916183-025b1e8ed1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Tranh vẽ
      'https://images.unsplash.com/photo-1513366208864-87536b8bd7b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Màu sắc trừu tượng
      'https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'  // Tác phẩm nghệ thuật
    ],
    food: [
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Salad
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Món ăn truyền thống
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'  // Pizza
    ],
    fashion: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Thời trang đường phố
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Người mẫu
      'https://images.unsplash.com/photo-1521335629791-ffc1c2ca2a61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'  // Phụ kiện
    ],
    sports: [
      'https://images.unsplash.com/photo-1517649763966-2474d98d2059?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Chạy bộ
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Thi đấu
      'https://images.unsplash.com/photo-1552674605-646073d36071?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'  // Bóng rổ
    ],
    architecture: [
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Thành phố hiện đại
      'https://images.unsplash.com/photo-1546410531-51f1d5b7a6bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Tòa nhà cổ
      'https://images.unsplash.com/photo-1504450759326-29e0e87d1c4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'  // Cầu
    ],
    animals: [
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Mèo
      'https://images.unsplash.com/photo-1456926631375-92a3f7a3d8cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Chó
      'https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'  // Đại bàng
    ],
    space: [
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // H Sixh tinh
      'https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', // Tinh vân
      'https://images.unsplash.com/photo-1610296669228-6d39c7c874b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'  // Phi hành gia
    ]
  };
  
  // Hàm hiển thị/ẩn bộ chọn hình nền
  function toggleBackgroundSelector() {
    var selector = document.getElementById('background-selector');
    selector.style.display = selector.style.display === 'none' ? 'block' : 'none';
  }
  
  // Cập nhật danh sách hình ảnh dựa trên danh mục được chọn
  function updateImages() {
    var category = document.getElementById('category-select').value;
    var imageSelect = document.getElementById('image-select');
    imageSelect.innerHTML = '<option value="">Chọn hình ảnh</option>';
    if (category && images[category]) {
      images[category].forEach(function(img, index) {
        var option = document.createElement('option');
        option.value = img;
        option.text = 'Hình ' + (index + 1);
        imageSelect.appendChild(option);
      });
    }
  }
  
  // Xem trước hình nền khi chọn hình ảnh
  function previewBackground() {
    var image = document.getElementById('image-select').value;
    if (image) {
      document.body.style.backgroundImage = "url('" + image + "')";
    }
  }
  
  // Áp dụng hình nền và lưu vào localStorage
  function applyBackground() {
    var image = document.getElementById('image-select').value;
    if (image) {
      localStorage.setItem('backgroundImage', image);
      toggleBackgroundSelector(); // Ẩn bộ chọn sau khi áp dụng
    } else {
      alert('Vui lòng chọn một hình nền trước khi áp dụng!');
    }
  }
  
  // Tải hình nền từ localStorage khi trang được tải
  window.onload = function() {
    var savedImage = localStorage.getItem('backgroundImage');
    if (savedImage) {
      document.body.style.backgroundImage = "url('" + savedImage + "')";
    }
  };

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
