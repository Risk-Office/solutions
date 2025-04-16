import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import worldGeoJSON from "~/countries.json";

const colorData = {
  US: "#b9b74c",
  BR: "#003366",
  RU: "#003366",
  AU: "#003366",
};

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography={worldGeoJSON}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const countryCode = geo.properties.ISO_A2;
            const fillColor = colorData[countryCode] || "#f0f0f0";
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: fillColor, outline: "none" },
                  hover: { fill: "#999999", outline: "none" },
                  pressed: { fill: "#666666", outline: "none" },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
