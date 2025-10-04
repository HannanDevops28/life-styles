import { CONFIG } from "../config/appConfig";
import type { FetchParams, RandomUser } from "../types";



export async function fetchUsersData({ page, gender }: FetchParams): Promise<{ results: RandomUser[] }> {
  const url = new URL(CONFIG.BASE_URL);
  url.searchParams.append("page", String(page));
  url.searchParams.append("results", "20");
  url.searchParams.append("seed", "kwanso");
  if (gender !== "all") url.searchParams.append("gender", gender);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}
