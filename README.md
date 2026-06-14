Bước 1: Component Cha (VideoFeed) — Phát hiện video nào đang hiển thị

Người dùng cuộn → Observer phát hiện video chiếm ≥60% màn hình → Cập nhật activeVideoId

IntersectionObserver theo dõi tất cả các ô video (data-id).

Khi một ô video lọt vào vùng nhìn thấy ≥ 60% (threshold: 0.6), Observer lấy data-id của nó và gán vào state 
activeVideoId.

Prop isActive được truyền xuống từng VideoCard: isActive = (video.id === activeVideoId).

Bước 2: Component Con (VideoCard) — Tự động phát/dừng

isActive thay đổi → useEffect chạy → true thì play(), false thì pause()

useEffect lắng nghe [isActive].

isActive === true → gọi .play() và cập nhật setIsPlaying(true).

isActive === false → gọi .pause() và cập nhật setIsPlaying(false).

Tóm tắt bằng sơ đồ
Cuộn trang
   ↓
Observer (threshold 60%)
   ↓
activeVideoId = "2"
   ↓
VideoCard id="1": isActive=false → pause()
VideoCard id="2": isActive=true  → play() 
VideoCard id="3": isActive=false → pause()
Chỉ đúng 1 video được phát tại mỗi thời điểm, các video còn lại tự động dừng để tiết kiệm tài nguyên.