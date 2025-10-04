export const LOCAL_STORAGE_KEYS = {
  USERS_PAGE_STATE: "users:list:state:v1",
};


export const USERS_PAGE_STATS: UserPageStat[] = [
  { title: "Page", key: "page" },
  { title: "Loaded", key: "loaded" },
  { title: "Gender", key: "gender" },
];

export const DEFAULT_STATE = { page: 1, gender: "all", keyword: "" };

import {
  FiUser,
  FiMail,
  FiPhone,
  FiCalendar,
  FiMapPin,
  FiShield,
} from "react-icons/fi";
import type { Gender, UserPageStat } from "../types";
import L from "leaflet";

export const USER_ICONS = [FiUser, FiMail, FiCalendar, FiMapPin, FiPhone, FiShield];

export const BACK_BUTTON_TEXT = "← Back";
export const GENDERS: (Gender | "all")[] = ["all", "female", "male"];
export  const MAX_VISIBLE = 5;

export const DEFAULT_MAP_IC = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});