import { FiMail, FiPhone, FiCalendar, FiMapPin, FiShield } from "react-icons/fi";
import { Flag } from "../components/common/Flag";
import type { RandomUser, DetailItem } from "../types";

export function getUserDetails(
  user: RandomUser,
  onLocationClick?: () => void
): DetailItem[] {
  return [
    { icon: <FiMail />, label: "Email", value: user.email },
    { icon: <FiPhone />, label: "Phone", value: user.phone },
    { icon: <FiPhone />, label: "Cell", value: user.cell },
    { icon: <FiCalendar />, label: "Age", value: String(user.dob.age) },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: (
        <div className="flex items-center gap-2">
          {user.location.city}, {user.location.state}, {user.location.country}
            <button
              className="ml-2 rounded bg-green-500 px-2 py-1 text-xs text-white hover:bg-green-600"
              onClick={onLocationClick}
            >
              Show Map
            </button>
        </div>
      ),
      col: 2,
    },
    {
      icon: <FiShield />,
      label: "Nationality",
      value: (
        <div className="flex items-center gap-2">
          {user.nat} <Flag nat={user.nat} />
        </div>
      ),
      col: 2,
    },
  ];
}
