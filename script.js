
function updateTime() {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    // Việt Nam
    const vietnamTime = new Intl.DateTimeFormat('vi-VN', {
        ...options, timeZone: 'Asia/Ho_Chi_Minh'
    }).format(new Date());
    document.getElementById('time-vietnam').textContent = vietnamTime;

    // Hoa Kỳ (New York)
    const usaTime = new Intl.DateTimeFormat('en-US', {
        ...options, timeZone: 'America/New_York'
    }).format(new Date());
    document.getElementById('time-usa').textContent = usaTime;

    // Vương Quốc Anh
    const ukTime = new Intl.DateTimeFormat('en-GB', {
        ...options, timeZone: 'Europe/London'
    }).format(new Date());
    document.getElementById('time-uk').textContent = ukTime;

    // Nhật Bản
    const japanTime = new Intl.DateTimeFormat('ja-JP', {
        ...options, timeZone: 'Asia/Tokyo'
    }).format(new Date());
    document.getElementById('time-japan').textContent = japanTime;

    // Úc (Sydney)
    const australiaTime = new Intl.DateTimeFormat('en-AU', {
        ...options, timeZone: 'Australia/Sydney'
    }).format(new Date());
    document.getElementById('time-australia').textContent = australiaTime;
}

// Cập nhật thời gian mỗi giây
setInterval(updateTime, 1000);
updateTime(); // Gọi ngay khi tải trang
