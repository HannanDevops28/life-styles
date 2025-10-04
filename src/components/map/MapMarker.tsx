import { Marker, Popup } from "react-leaflet";
import { DEFAULT_MAP_IC } from "../../constants";
import type { MapMarkerProps } from "../../types";

export function MapMarker({ lat, lng, label }: MapMarkerProps) {
  return (
    <Marker position={[lat, lng]} icon={DEFAULT_MAP_IC}>
      {label && <Popup>{label}</Popup>}
    </Marker>
  );
}
