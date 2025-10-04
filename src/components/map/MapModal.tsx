import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { DEFAULT_MAP_IC } from "../../constants";
import type { MapModalProps } from "../../types";


export function MapModal({ open, onClose, lat, lng, locationName }: MapModalProps) {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (open && mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize({ animate: true });
        mapRef.current.setView([lat, lng], 13); 
      }, 200);
    }
  }, [open, lat, lng]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-2xl rounded-xl bg-white shadow-lg animate-fade-in-up overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 rounded-full bg-red-500 p-2 text-white shadow hover:bg-red-600 transition"
        >
          ✕
        </button>

        <div className="w-full h-[400px]">
          <MapContainer
            center={[lat, lng]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[lat, lng]} icon={DEFAULT_MAP_IC}>
              <Popup>{locationName || "Here"}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
