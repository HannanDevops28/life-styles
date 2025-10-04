import { StatsCard } from "./StatsCard";
import heroImageUrl from '../../assets/Images/people.png';
import type { HeroSectionProps } from "../../types";


export function HeroSection({ state, usersCount, USERS_PAGE_STATS }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-[--color-bg-elevated] p-6 shadow-lg transition-colors flex flex-col sm:flex-row items-center justify-between gap-4">
      
      <div className="flex-1">
        <h2 className="text-xl font-semibold tracking-tight text-[--color-fg]">
          Discover People
        </h2>
        <p className="text-sm text-[--color-muted] mt-2">
          Search, filter, and explore random users from around the world.
        </p>
      </div>

      {heroImageUrl && (
        <div className="flex-shrink-0">
          <img
            src={heroImageUrl}
            alt="Hero"
            className="h-24 w-24 object-contain mx-auto"
          />
        </div>
      )}

      <div className="grid grid-cols-3 gap-3 text-center">
        {USERS_PAGE_STATS.map((stat) => {
          const value =
            stat.key === "page"
              ? state.page
              : stat.key === "loaded"
              ? usersCount
              : state.gender;
          return <StatsCard key={stat.key} title={stat.title} value={value} />;
        })}
      </div>
    </section>
  );
}
