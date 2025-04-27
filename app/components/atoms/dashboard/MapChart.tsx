import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { X } from "lucide-react";

const geoUrl =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson";

const colorData = {
  US: "#b9b74c",
  BR: "#003366",
  RU: "#003366",
  AU: "#003366",
};

const MapChart = ({ timeframe = "today", categories, riskMarkers }) => {
  const [activeFilter, setActiveFilter] = useState("");
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleCloseMarker = () => {
    setSelectedMarker(null);
  };

  const handleCountryClick = (geo) => {
    const countryCode = geo.properties.ISO_A2 || geo.properties.iso_a2;
    const countryName = geo.properties.NAME || geo.properties.name;

    setSelectedCountry({
      code: countryCode,
      name: countryName,
    });
  };

  const handleCloseCountryInfo = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="relative">
      {/* Category filters - Left side */}
      <div className="absolute top-30 left-4 space-y-2 z-10">
        {categories.map((item) => (
          <div
            key={item}
            className={`${
              activeFilter === item
                ? "bg-primary text-white"
                : "bg-white shadow text-primary"
            } text-sm p-1 rounded cursor-pointer`}
            onClick={() => setActiveFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Selected Country Info Card */}
      {selectedCountry && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg z-20 w-64">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">{selectedCountry.name}</h3>
            <X
              className="w-4 h-4 cursor-pointer"
              onClick={handleCloseCountryInfo}
            />
          </div>
          <p className="text-sm">Country Code: {selectedCountry.code}</p>
          <p className="text-sm">
            {activeFilter} Risk Level:{" "}
            {riskMarkers[activeFilter]?.find(
              (m) => m.name === selectedCountry.name
            )?.value || "N/A"}
          </p>
        </div>
      )}

      {/* Selected Marker Info Card */}
      {selectedMarker && (
        <div className="absolute top-16 right-4 bg-white p-3 rounded-lg shadow-lg z-20 w-64">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">{selectedMarker.name}</h3>
            <X className="w-4 h-4 cursor-pointer" onClick={handleCloseMarker} />
          </div>
          <p className="text-sm font-medium">
            {activeFilter} Risk: {selectedMarker.value}/5
          </p>
          <p className="text-sm mt-1">{selectedMarker.info}</p>
        </div>
      )}

      <ComposableMap
        projection="geoEqualEarth"
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryCode =
                geo.properties.ISO_A2 || geo.properties.iso_a2;
              const fillColor = colorData[countryCode] || "#f0f0f0";
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleCountryClick(geo)}
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

        {/* Display markers for the active filter */}
        {riskMarkers[activeFilter]?.map((marker, index) => (
          <Marker
            key={`${activeFilter}-${index}`}
            coordinates={marker.coordinates}
            onClick={() => handleMarkerClick(marker)}
          >
            <circle
              r={20}
              fill="#040228"
              fillOpacity={0.8}
              stroke="#fff"
              strokeWidth={1}
              style={{ cursor: "pointer" }}
            />
            <text
              textAnchor="middle"
              y="3"
              style={{
                fill: "#fff",
                fontSize: "10px",
                fontWeight: "bold",
                pointerEvents: "none",
              }}
            >
              {marker.value}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default MapChart;

//         ))}
//       </div>

//       {/* Selected Country Info Card */}
//       <AnimatePresence>
//         {selectedCountry && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg z-20 w-64"
//           >
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="font-medium">{selectedCountry.name}</h3>
//               <X
//                 className="w-4 h-4 cursor-pointer"
//                 onClick={handleCloseCountryInfo}
//               />
//             </div>
//             <p className="text-sm">Country Code: {selectedCountry.code}</p>
//             <p className="text-sm">
//               {activeFilter} Risk Level:{" "}
//               {riskMarkers[activeFilter]?.find(
//                 (m) => m.name === selectedCountry.name
//               )?.value || "N/A"}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Selected Marker Info Card */}
//       <AnimatePresence>
//         {selectedMarker && !selectedSubMarker && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 20 }}
//             className="absolute top-16 right-4 bg-white p-3 rounded-lg shadow-lg z-20 w-64"
//           >
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="font-medium">{selectedMarker.name}</h3>
//               <X
//                 className="w-4 h-4 cursor-pointer"
//                 onClick={handleCloseMarker}
//               />
//             </div>
//             <p className="text-sm font-medium">
//               {activeFilter} Risk: {selectedMarker.value}/5
//             </p>
//             <p className="text-sm mt-1">{selectedMarker.info}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Selected Sub-Marker Risk Card */}
//       <AnimatePresence>
//         {selectedSubMarker && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 20 }}
//             className="absolute top-16 right-4 bg-white p-3 rounded-lg shadow-lg z-20 w-64"
//           >
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="font-medium">{selectedSubMarker.name}</h3>
//               <X
//                 className="w-4 h-4 cursor-pointer"
//                 onClick={handleCloseSubMarker}
//               />
//             </div>
//             <p className="text-sm font-medium">
//               {activeFilter} Risk: {selectedSubMarker.value}/5
//             </p>
//             <div className="mt-2">
//               <h4 className="text-sm font-medium">Risks:</h4>
//               <ul className="list-disc pl-4 text-sm">
//                 {selectedSubMarker.risks.map((risk, index) => (
//                   <li key={index}>{risk}</li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <ComposableMap
//         projection="geoEqualEarth"
//         style={{ width: "100%", height: "auto" }}
//       >
//         <ZoomableGroup
//           zoom={zoomState.zoom}
//           center={zoomState.center}
//           minZoom={1}
//           maxZoom={5}
//           translateExtent={[
//             [-1000, -500], // Adjust based on map size
//             [1000, 500],
//           ]}
//         >
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const countryCode =
//                   geo.properties.ISO_A2 || geo.properties.iso_a2;
//                 const fillColor = colorData[countryCode] || "#f0f0f0";
//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     onClick={() => handleCountryClick(geo)}
//                     style={{
//                       default: { fill: fillColor, outline: "none" },
//                       hover: { fill: "#999999", outline: "none" },
//                       pressed: { fill: "#666666", outline: "none" },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>

//           {/* Display country markers when not zoomed in */}
//           {!selectedMarker &&
//             riskMarkers[activeFilter]?.map((marker, index) => (
//               <Marker
//                 key={`${activeFilter}-${index}`}
//                 coordinates={marker.coordinates}
//                 onClick={() => handleMarkerClick(marker)}
//               >
//                 <circle
//                   r={20}
//                   fill="#040228"
//                   fillOpacity={0.8}
//                   stroke="#fff"
//                   strokeWidth={1}
//                   style={{ cursor: "pointer" }}
//                 />
//                 <text
//                   textAnchor="middle"
//                   y="3"
//                   style={{
//                     fill: "#fff",
//                     fontSize: "10px",
//                     fontWeight: "bold",
//                     pointerEvents: "none",
//                   }}
//                 >
//                   {marker.value}
//                 </text>
//               </Marker>
//             ))}

//           {/* Display sub-markers when zoomed in */}
//           {selectedMarker &&
//             selectedMarker.subMarkers?.map((subMarker, index) => (
//               <Marker
//                 key={`${activeFilter}-sub-${index}`}
//                 coordinates={subMarker.coordinates}
//                 onClick={() => handleSubMarkerClick(subMarker)}
//               >
//                 <circle
//                   r={4}
//                   fill="#040228"
//                   fillOpacity={0.8}
//                   stroke="#fff"
//                   strokeWidth={0}
//                   style={{ cursor: "pointer" }}
//                 />
//                 <text
//                   textAnchor="middle"
//                   y="2"
//                   style={{
//                     fill: "#fff",
//                     fontSize: "5px",
//                     fontWeight: "bold",
//                     pointerEvents: "none",
//                   }}
//                 >
//                   {subMarker.value}
//                 </text>
//               </Marker>
//             ))}
//         </ZoomableGroup>
//       </ComposableMap>
//     </div>
//   );
// };

// export default MapChart;
