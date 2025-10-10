// Bước 1: Lấy các phần tử cần thiết từ HTML
const searchInput = document.getElementById('searchInput');
const listItems = document.querySelectorAll('#itemList li');

// Bước 2: Thêm sự kiện 'input' vào ô tìm kiếm
searchInput.addEventListener('input', (event) => {
    // Bước 3: Lấy giá trị người dùng gõ vào và chuyển thành chữ thường
    const searchTerm = event.target.value.toLowerCase();

    // Bước 4: Lặp qua từng mục trong danh sách (từng thẻ <li>)
    listItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();

        // Bước 5: Kiểm tra xem nội dung của mục có chứa từ khóa tìm kiếm không
        if (itemText.includes(searchTerm)) {
            // Nếu có, hiện nó ra
            item.style.display = 'block';
        } else {
            // Nếu không, ẩn nó đi
            item.style.display = 'none';
        }
    });
});