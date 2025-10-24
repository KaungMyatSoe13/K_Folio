import { Music, Trophy, Gamepad2, Plane } from "lucide-react";

interface Artist {
  id: string;
  name: string;
  song: string;
  genre: string;
  image: string;
  songUrl: string;
  spotifyUrl: string;
}

interface Game {
  id: string;
  name: string;
  image: string;
}

interface Country {
  id: string;
  name: string;
  year: string;
  photos: string[];
}

interface FootballPhoto {
  id: number;
  image: string;
  title: string;
}

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface TimeRange {
  start: number;
  end: number;
}

interface TimeRanges {
  [key: string]: TimeRange;
}

export const sections: Section[] = [
  {
    id: "music",
    title: "Music",
    icon: Music,
    color: "transparent",
  },

  {
    id: "travel",
    title: "Travel",
    icon: Plane,
    color: "transparent",
  },
];

export const artists: Artist[] = [
  {
    id: "artist1",
    name: "SCY",
    song: "Ma Ngo Par Nae Tot",
    genre: "Rap",
    image:
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1760601741/scy_hk5en3.jpg",
    songUrl: "/songs/Scy-Ma ngo par nae tot.mp3",
    spotifyUrl: "https://open.spotify.com/album/3TmLJunCZ8BNMSAVKrGstl",
  },
  {
    id: "artist2",
    name: "Eminem",
    song: "Stan",
    genre: "Rap",
    image:
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1760601742/download_u2gvq9.jpg",
    songUrl: "/songs/Eminem-Lucky You.mp3",
    spotifyUrl: "https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR",
  },
  {
    id: "artist3",
    name: "BeAmby",
    song: "The night before christmas",
    genre: "Rap",
    image:
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1760601741/beamby_ryjh2q.jpg",
    songUrl: "/songs/BeAmby-The night before christmas.mp3",
    spotifyUrl: "https://open.spotify.com/artist/4dWIs76TQytacHAYgCHiMw",
  },
  {
    id: "artist4",
    name: "Louz Xa Lone",
    song: "You",
    genre: "Rap",
    image:
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1760601741/lxl_a980uu.jpg",
    songUrl: "/songs/Louz Xa Lone-No Shame.mp3",
    spotifyUrl: "https://open.spotify.com/artist/02PHgU1uKHKopWExxxPCKp",
  },
  {
    id: "artist5",
    name: "Idiots",
    song: "Ma Htike Tae A Linn",
    genre: "Rock",
    image:
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1760601741/idiots_bfrjun.webp",
    songUrl: "/songs/Idiots-Ma Htike Tae A Linn.mp3",
    spotifyUrl: "https://open.spotify.com/artist/4FNDlNeRMeQYQCHnrmYUHB",
  },
  // {
  //   id: "artist6",
  //   name: "Wanted",
  //   song: "Bal Lo Nhyine That Ya Ma Lal",
  //   genre: "Rock",
  //   image:
  //     "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1760601740/wan_d3xqff.jpg",
  //   songUrl: "/songs/Wanted-Bal Lo Nhyein Thet Ya Ma Ll.mp3",
  //   spotifyUrl: "https://open.spotify.com/artist/1pMV9AQ4RDndrJlxjgJy71",
  // },
  // {
  //   id: "artist7",
  //   name: "Big Bag",
  //   song: "Way Thwar Lal",
  //   genre: "Rock",
  //   image:
  //     "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1760601741/bb_pi3pnm.jpg",
  //   songUrl: "/songs/Big Bag-Way Twar Lal.mp3",
  //   spotifyUrl: "https://open.spotify.com/artist/0bfrBj49eulFwRW1IIfi9G",
  // },
  // {
  //   id: "artist8",
  //   name: "For Revenge",
  //   song: "Sadrah",
  //   genre: "R&B",
  //   image:
  //     "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1760601741/FR_dt0ooa.jpg",
  //   songUrl: "/songs/For Revenge-Sadrah.mp3",
  //   spotifyUrl: "https://open.spotify.com/artist/0bfrBj49eulFwRW1IIfi9G",
  // },
  // {
  //   id: "artist9",
  //   name: "Radiohead",
  //   song: "Let Down",
  //   genre: "",
  //   image:
  //     "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1760515809/Radiohead_dtgwdt.jpg",
  //   songUrl: "/songs/Radiohead-Let Down.mp3",
  //   spotifyUrl: "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb",
  // },
  // {
  //   id: "artist10",
  //   name: "Hsu Rinna",
  //   song: "Stay",
  //   genre: "Hip Hop",
  //   image:
  //     "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1760601740/hsu_lr7qxw.jpg",
  //   songUrl: "/songs/Hsu Rinna-Stay.mp3",
  //   spotifyUrl: "https://open.spotify.com/artist/3JkBn4Jpj7YzohZOgRzEfG",
  // },
];

export const countries: Country[] = [
  {
    id: "Indonesia",
    name: "Indonesia(Bali)",
    year: "2024",
    photos: [
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1761120607/photo_7_2025-10-22_15-09-37_rbsuyt.jpg",
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1761120607/photo_6_2025-10-22_15-09-37_cexlyl.jpg",
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1761120607/photo_3_2025-10-22_15-09-37_ubcfoh.jpg",
    ],
  },

  {
    id: "Vietnam",
    name: "Vietnam(Ho Chi Minh, Da Nang)",
    year: "2024",
    photos: [
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1761120608/photo_10_2025-10-22_15-09-37_sfumwl.jpg",
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1761120609/photo_12_2025-10-22_15-09-37_uxdoga.jpg",
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1761120610/photo_9_2025-10-22_15-09-37_g0qusf.jpg   ",
    ],
  },
  {
    id: "Thailand",
    name: "Thailand(Bangkok, Chiang Mai)",
    year: "2024",
    photos: [
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1761120607/photo_1_2025-10-22_15-09-37_wi1f9x.jpg",
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1761120608/photo_5_2025-10-22_15-09-37_eyjgsx.jpg",
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1761120608/photo_15_2025-10-22_15-09-37_jtmyda.jpg",
    ],
  },
  {
    id: "Singapore",
    name: "Singapore",
    year: "2022",
    photos: [
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1761120608/photo_17_2025-10-22_15-09-37_jhqyju.jpg",
      "https://res.cloudinary.com/dnpr1pcz3/image/upload/v1761120608/photo_16_2025-10-22_15-09-37_n1twnj.jpg",
    ],
  },
];

export const timeRanges: TimeRanges = {
  artist1: { start: 110, end: 140 },
  artist2: { start: 150, end: 180 },
  artist3: { start: 120, end: 150 },
  artist4: { start: 15, end: 40 },
  artist5: { start: 38, end: 68 },
  artist6: { start: 43, end: 73 },
  artist7: { start: 45, end: 75 },
  artist8: { start: 59, end: 89 },
  artist9: { start: 220, end: 250 },
  artist10: { start: 62, end: 90 },
};
