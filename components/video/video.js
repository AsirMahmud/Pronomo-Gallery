export const VideoService = {
  getData() {
    return [
      {
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnailImageSrc: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
        alt: "Description for Video 1",
        title: "Title 1",
      },
      {
        videoUrl: "https://www.youtube.com/embed/3tmd-ClpJxA",
        thumbnailImageSrc: "https://img.youtube.com/vi/3tmd-ClpJxA/0.jpg",
        alt: "Description for Video 2",
        title: "Title 2",
      },
      {
        videoUrl: "https://www.youtube.com/embed/0fKbA8KsL58",
        thumbnailImageSrc: "https://img.youtube.com/vi/0fKbA8KsL58/0.jpg",
        alt: "Description for Video 3",
        title: "Title 3",
      },
      {
        videoUrl: "https://www.youtube.com/embed/2QqGGK5oXoA",
        thumbnailImageSrc: "https://img.youtube.com/vi/2QqGGK5oXoA/0.jpg",
        alt: "Description for Video 4",
        title: "Title 4",
      },
      {
        videoUrl: "https://www.youtube.com/embed/6dB6uEC6b5U",
        thumbnailImageSrc: "https://img.youtube.com/vi/6dB6uEC6b5U/0.jpg",
        alt: "Description for Video 5",
        title: "Title 5",
      },
      // Add more videos as needed
    ];
  },

  getVideos() {
    return Promise.resolve(this.getData());
  },
};
