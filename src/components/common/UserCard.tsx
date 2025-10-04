import { Link } from 'react-router-dom';
import { FaEnvelope, FaLocationDot } from 'react-icons/fa6';
import type { UserCardProps } from '../../types';

export function UserCard({ user }: UserCardProps) {
  const fullName = `${user.name.first} ${user.name.last}`;

  return (
    <Link
      to={`/user/${user.login.uuid}`}
      state={{ user }}
      className="
        group relative flex flex-col items-center
        w-80 h-72
        rounded-2xl bg-[--color-bg-elevated]
        p-6 shadow-lg hover:shadow-2xl
        transition-all duration-300 hover:-translate-y-1
      "
    >
      <div className="relative">
        <img
          src={user.picture.large}
          alt={fullName}
          className="
            h-24 w-24 rounded-full object-cover
            ring-2 ring-white/70 dark:ring-zinc-700
            shadow-md transition-transform duration-300 group-hover:scale-105
          "
        />
        <span
          className="
            absolute -bottom-0.5 -right-0.5
            h-3.5 w-3.5 rounded-full bg-[--color-primary]
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        />
      </div>

      <div className="mt-4 w-full text-center space-y-2">
        <p className="text-lg font-semibold tracking-tight text-[--color-fg] break-words line-clamp-1">
          {fullName}
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-[--color-muted]">
          <FaEnvelope className="h-4 w-4 shrink-0 text-[--color-primary]" />
          <span className="max-w-[180px] break-words line-clamp-1">
            {user.email}
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-[--color-muted]">
          <FaLocationDot className="h-4 w-4 shrink-0 text-[--color-primary]" />
          <span className="max-w-[180px] break-words line-clamp-2">
            {user.location.city}, {user.location.country}
          </span>
        </div>
      </div>
    </Link>
  );
}
