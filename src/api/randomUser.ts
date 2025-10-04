import { CONFIG } from '../config/appConfig';
import type { FetchUsersParams,  RandomUserResponse } from '../types';

export async function fetchUsers(params: FetchUsersParams = {}): Promise<RandomUserResponse> {
  const url = new URL(CONFIG.BASE_URL);
  const { page = 1, results = 20, gender, seed } = params;
  url.searchParams.set('page', String(page));
  url.searchParams.set('results', String(results));
  url.searchParams.set('inc', 'gender,name,location,email,login,dob,phone,cell,nat,picture');
  if (gender) url.searchParams.set('gender', gender);
  if (seed) url.searchParams.set('seed', seed);

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch users: ${res.status}`);
  }
  const data: RandomUserResponse = await res.json();
  return data;
}


