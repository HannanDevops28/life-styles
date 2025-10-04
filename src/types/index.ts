import type { JSX } from "react";

export type Gender = "male" | "female" | "all";

export interface RandomUserName {
  title: string;
  first: string;
  last: string;
}

export interface RandomUserLocation {
  street: { number: number; name: string };
  city: string;
  state: string;
  country: string;
  postcode: string | number;
  coordinates: { latitude: string; longitude: string };
}

export interface RandomUserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface RandomUserLogin {
  uuid: string;
  username: string;
}

export interface RandomUser {
  gender: Gender;
  name: RandomUserName;
  location: RandomUserLocation;
  email: string;
  login: RandomUserLogin;
  dob: { date: string; age: number };
  phone: string;
  cell: string;
  nat: string; 
  picture: RandomUserPicture;
}

export interface RandomUserResponse {
  results: RandomUser[];
  info: { seed: string; results: number; page: number; version: string };
}

export interface PersistedState {
  page: number;
  gender: Gender | "all";
  keyword: string;
}

export interface DetailCardProps {
  icon: JSX.Element;
  label: string;
  value: string | JSX.Element;
  col?: number;
}
export interface DetailItem {
  icon: JSX.Element;
  label: string;
  value: string | JSX.Element;
  col?: number;
}
export interface IconButtonCircleProps {
  icon: JSX.Element;
  index: number;
}

export interface UserPageState {
  page: number;      
  gender: "male" | "female" | "all"; 
  keyword: string;    
}

export interface UserPageStat {
  key: "page" | "loaded" | "gender"; 
  title: string;                     
}
export interface FetchUsersParams {
  page?: number;
  results?: number;
  gender?: Gender;
  seed?: string;
  keyword?: string; 
}
export interface FlagProps {
  nat: string; 
  size?: number; 
}

export interface LoaderProps {
  isLoading: boolean;
}
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
} export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}
export interface UserCardProps {
  user: RandomUser;
}
export interface HeroSectionProps {
  state: UserPageState;
  usersCount: number;
  USERS_PAGE_STATS: UserPageStat[];
}
export interface StatsCardProps {
  title: string;
  value: string | number;
}
export 
interface UsersGridProps {
  filtered: RandomUser[];
  loading: boolean;
  onPreview: (user: RandomUser) => void;
}
export interface MapMarkerProps {
  lat: number;
  lng: number;
  label?: string | React.ReactNode;
}
export interface MapModalProps {
  open: boolean;
  onClose: () => void;
  lat: number;
  lng: number;
  locationName?: string | React.ReactNode;
}
export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

export interface FetchParams {
  page: number;
  gender: Gender | "all";
}
export interface FilterBarProps {
  gender: Gender | "all";
  onGenderChange: (gender: Gender | "all") => void;
}
export interface PaginationProps {
  page: number;
  hasNext: boolean;
  onPageChange: (page: number) => void;
  totalPages?: number; 
}