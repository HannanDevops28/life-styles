import { useLocation, useNavigate } from "react-router-dom";
import { useState, useMemo, useCallback, useEffect } from "react";

import { getUserDetails } from "../utils/userProfileHelpers";
import { DetailCard } from "../components/common/DetailCard";
import { IconButtonCircle } from "../components/common/IconButtonCircle";
import { MapModal } from "../components/map/MapModal";

import { BACK_BUTTON_TEXT, USER_ICONS } from "../constants";
import type { RandomUser } from "../types";
import contact from "../assets/Images/contact.png";

export function UserProfilePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = (location.state as { user?: RandomUser } | null)?.user;

  const [mapOpen, setMapOpen] = useState(false);

  const fullName = useMemo(() => {
    return user ? `${user.name.first} ${user.name.last}` : "";
  }, [user]);

  const handleMapOpen = useCallback(() => setMapOpen(true), []);
  const handleMapClose = useCallback(() => setMapOpen(false), []);

  const details = useMemo(() => {
    return user ? getUserDetails(user, handleMapOpen) : [];
  }, [user, handleMapOpen]);

  useEffect(() => {
    if (!user) navigate("/", { replace: true });
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="max-w-screen min-h-screen items-center flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side: Profile content (scrollable only if needed) */}
      <div className="flex-1 flex flex-col space-y-8 px-4 sm:px-8 py-6 overflow-y-auto lg:overflow-y-auto">
        {/* Back button */}
        <div>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex  items-center gap-2 rounded-lg bg-[--color-bg-elevated] cursor-pointer px-4 py-2 text-sm shadow-md transition-all hover:shadow-lg active:scale-[0.97]"
          >
            {BACK_BUTTON_TEXT}
          </button>
        </div>

        {/* Profile Card */}
        <div className="max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl bg-[--color-bg-elevated] shadow-xl animate-fade-in-up">
            <div className="h-32 w-full bg-gradient-to-b from-green-400/30 to-transparent dark:from-green-900/40" />

            <div className="px-6 pb-8">
              <div className="-mt-16 flex flex-col items-center text-center">
                <img
                  src={user.picture.large}
                  alt={fullName}
                  className="h-28 w-28 rounded-full ring-4 ring-[--color-bg-elevated] shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-3 text-sm text-[--color-muted]">Hi, my name is</p>
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  {fullName}
                </h1>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4 text-green-500">
                {USER_ICONS.map((Icon, i) => (
                  <IconButtonCircle
                    key={i}
                    icon={<Icon className="h-5 w-5" />}
                    index={i}
                  />
                ))}
              </div>

              <div className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
                {details.map((d, i) => (
                  <DetailCard key={i} {...d} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Button */}
        <div>
          <button
            onClick={handleMapOpen}
            className="rounded-lg bg-emerald-500 px-6 py-2 text-white shadow-md transition hover:bg-emerald-600"
          >
            View on Map
          </button>
        </div>
      </div>

      {/* Right Side: Standalone full image */}
      <div className="flex-1 hidden lg:block h-full">
        <img
          src={contact}
          alt="Side illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Map Modal */}
      {mapOpen && (
        <MapModal
          open={mapOpen}
          onClose={handleMapClose}
          lat={parseFloat(user.location.coordinates.latitude)}
          lng={parseFloat(user.location.coordinates.longitude)}
          locationName={`${user.location.city}, ${user.location.country}`}
        />
      )}
    </div>
  );
}
