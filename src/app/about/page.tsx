import AboutContent from "@/components/about/AboutContent";

// Local cover images in public/images/about/soundtracks/ (1.png … 9.png)
const SOUNDTRACKS = [
  { title: "Voyager", artist: "Daft Punk", imageUrl: "/images/about/soundtracks/1.png" },
  { title: "Muriendo de envidia", artist: "C. Tangana", imageUrl: "/images/about/soundtracks/2.png" },
  { title: "Pyramids", artist: "Frank Ocean", imageUrl: "/images/about/soundtracks/3.png" },
  { title: "Bruce Wayne", artist: "Peso Pluma", imageUrl: "/images/about/soundtracks/4.png" },
  { title: "Like a Tattoo", artist: "Sade", imageUrl: "/images/about/soundtracks/5.png" },
  { title: "You Turn Me On", artist: "Black Coffee", imageUrl: "/images/about/soundtracks/6.png" },
  { title: "Get It Together", artist: "Drake", imageUrl: "/images/about/soundtracks/7.png" },
  { title: "Lokeron x Amor", artist: "Junior H", imageUrl: "/images/about/soundtracks/8.png" },
  { title: "Me Estás Tentando", artist: "Wisin y Yandel", imageUrl: "/images/about/soundtracks/9.png" },
];

export default function AboutPage() {
  return <AboutContent soundtracks={SOUNDTRACKS} />;
}
