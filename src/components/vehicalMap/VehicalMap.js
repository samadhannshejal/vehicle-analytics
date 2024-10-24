import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const VehicleMap = ({ vehicles }) => {
  return (
    <div>
      <MapContainer
        center={[48.2179983, -122.6880708]}
        zoom={10}
        style={{ height: "300px", width: "50%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {vehicles?.map((vehicle, index) => {
          const coords = vehicle["Vehicle Location"].match(
            /POINT \(([^ ]+) ([^ ]+)\)/
          );
          const lat = parseFloat(coords[2]);
          const lng = parseFloat(coords[1]);
          return (
            <Marker key={index} position={[lat, lng]}>
              <Popup>{`${vehicle.Make} ${vehicle.Model}})`}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default VehicleMap;
