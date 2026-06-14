export interface VideoData {
   id:string;
   videoUrl: string;
   authorName:string;
   description: string;
   likesCount:number;

}
export const mockVideo: VideoData[] = [
    {
    id: "1",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    authorName: "@big_buck_bunny",
    description: "Một ngày đẹp trời của chú thỏ béo và những người bạn.",
    likesCount: 1240,
  },
  {
    id: "2",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    authorName: "@friday_vibes",
    description: "Cuối tuần rồi! Quẩy lên thôi anh em ơi 🎬",
    likesCount: 856,
  },
  {
    id: "3",
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    authorName: "@sintel_durian",
    description: "Trailer bộ phim hoạt hình mã nguồn mở Sintel cực đỉnh.",
    likesCount: 3420,
  }
];