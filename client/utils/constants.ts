const sortOptions = [
  "total",
  "daily",
  "weekly",
  "monthly",
  "video",
  "stream",
  "streak",
];

const iconMap: { [index: string]: any } = {
  streak: "/images/streak.png",
  stream: "/images/stream.png",
  video: "/images/video.png",
  time: "/images/time.png",
};

const statCategories = ["level", "coins", "study"];

export { sortOptions, iconMap, statCategories };
