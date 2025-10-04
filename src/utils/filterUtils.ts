import type { RandomUser } from "../types";

export function filterUsers(users: RandomUser[], keyword: string): RandomUser[] {
  const q = keyword.trim().toLowerCase();
  if (!q) return users;

  return users.filter((user) => {
    const haystack = [
      user.name.first,
      user.name.last,
      user.email,
      user.location.city,
      user.location.state,
      user.location.country,
    ].join(" ").toLowerCase();

    return haystack.includes(q);
  });
}