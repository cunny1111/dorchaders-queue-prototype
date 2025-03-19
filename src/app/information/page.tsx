import { ModderCard } from "@/components/layout/ModderCard";

// Mock modder data - in a real app, this would come from a database
const modders = [
  {
    id: 1234,
    username: "ModderOne",
    avatar_url: "https://a.ppy.sh/1234",
    banner_url: "https://assets.ppy.sh/user-profile-covers/1234/cover.jpg",
    country_code: "US",
    preferred_genres: ["Electronic", "J-Pop", "Rock"],
    preferred_map_styles: ["Jump", "Stream", "Technical"],
    notes: "I focus on rhythm and playability in my mods. Feel free to reach out for advice!",
    is_admin: true,
  },
  {
    id: 5678,
    username: "ModderTwo",
    avatar_url: "https://a.ppy.sh/5678",
    banner_url: "https://assets.ppy.sh/user-profile-covers/5678/cover.jpg",
    country_code: "JP",
    preferred_genres: ["J-Rock", "Anime", "Drum & Bass"],
    preferred_map_styles: ["Gimmick", "Alt", "Tech"],
    notes: "Specialized in unusual rhythm patterns and creative mapping solutions.",
    is_admin: true,
  },
  {
    id: 9012,
    username: "ModderThree",
    avatar_url: "https://a.ppy.sh/9012",
    banner_url: "https://assets.ppy.sh/user-profile-covers/9012/cover.jpg",
    country_code: "CA",
    preferred_genres: ["Hip-Hop", "Future Bass", "Pop"],
    preferred_map_styles: ["Slider-heavy", "Low BPM", "High SV"],
    notes: "I enjoy maps with creative slider usage and good flow. I provide thorough feedback.",
    is_admin: true,
  },
];

export default function InformationPage() {
  return (
    <div className="space-y-12">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">About Dorchaders Modding Queue</h1>
        
        <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-neutral dark:prose-invert mx-auto">
            <p>
              a
            </p>
            
            <p>
              a
            </p>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">a</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
              </ol>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Modding Focus</h3>
              <p>
                a
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Our Modders</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modders.map((modder) => (
            <ModderCard key={modder.id} modder={modder} />
          ))}
        </div>
      </section>
    </div>
  );
} 