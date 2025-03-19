import Image from "next/image";
import Link from "next/link";
import { OsuUser } from "@/lib/types";

interface ModderCardProps {
  modder: OsuUser;
}

export function ModderCard({ modder }: ModderCardProps) {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Banner Image */}
      {modder.banner_url && (
        <div className="h-32 w-full relative">
          <Image
            src={modder.banner_url}
            alt={`${modder.username}'s profile banner`}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-5">
        {/* User Info */}
        <div className="flex items-center mb-4">
          <div className="relative w-16 h-16 mr-4">
            <Image
              src={modder.avatar_url}
              alt={modder.username}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 shadow">
              <Image
                src={`https://flagcdn.com/w20/${modder.country_code.toLowerCase()}.png`}
                alt={modder.country_code}
                width={16}
                height={12}
                className="rounded-sm"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold">
              <Link 
                href={`https://osu.ppy.sh/users/${modder.id}`}
                target="_blank"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {modder.username}
              </Link>
            </h3>
          </div>
        </div>
        
        {/* Preferences */}
        <div className="mt-4 space-y-3">
          {modder.preferred_genres && modder.preferred_genres.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Preferred Genres</h4>
              <div className="flex flex-wrap gap-1 mt-1">
                {modder.preferred_genres.map((genre) => (
                  <span key={genre} className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {modder.preferred_map_styles && modder.preferred_map_styles.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Preferred Map Styles</h4>
              <div className="flex flex-wrap gap-1 mt-1">
                {modder.preferred_map_styles.map((style) => (
                  <span key={style} className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                    {style}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Notes */}
        {modder.notes && (
          <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <h4 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Notes</h4>
            <p className="mt-1 text-sm">{modder.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
} 