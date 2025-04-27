import { useState } from "react";
import { Info } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function CommunityRating() {
  const [severity, setSeverity] = useState(3); // Default to Moderate (middle position)
  const [confidence, setConfidence] = useState(null);
  const [comment, setComment] = useState("");

  const severityLabels = [
    "Negligible",
    "Minor",
    "Moderate",
    "Major",
    "Critical",
  ];
  const confidenceLevels = [
    "Not at all",
    "Very Low",
    "Low",
    "Medium",
    "High",
    "Very High",
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm space-y-6">
      <h2 className="text-xl font-bold mb-2 dark:text-white">
        Community Rating
      </h2>

      <div className="space-y-6">
        {/* Severity Slider Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="font-medium text-gray-800 dark:text-gray-200">
              Impact Severity Estimate
            </label>
            <div className="rounded-full border border-gray-400 w-6 h-6 flex items-center justify-center">
              <Info size={14} className="text-gray-500" />
            </div>
          </div>

          {/* Custom Slider */}
          <div className="relative pt-1 pb-4">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="absolute h-2 rounded-full bg-primary"
                style={{ width: `${(severity / 4) * 100}%` }}
              />
            </div>

            {/* Slider Thumb */}
            <div
              className="absolute w-6 h-6 bg-white border-2 border-primary rounded-full -mt-2 cursor-pointer"
              style={{
                left: `calc(${(severity / 4) * 100}% - 12px)`,
                top: "4px",
              }}
              onMouseDown={(e) => {
                const handleMouseMove = (moveEvent) => {
                  const sliderRect =
                    e.currentTarget.parentElement.getBoundingClientRect();
                  const newPosition =
                    (moveEvent.clientX - sliderRect.left) / sliderRect.width;
                  const newValue = Math.max(
                    0,
                    Math.min(4, Math.round(newPosition * 4))
                  );
                  setSeverity(newValue);
                };

                const handleMouseUp = () => {
                  document.removeEventListener("mousemove", handleMouseMove);
                  document.removeEventListener("mouseup", handleMouseUp);
                };

                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
              }}
            />

            {/* Labels */}
            <div className="flex justify-between mt-2">
              {severityLabels.map((label, index) => (
                <div
                  key={index}
                  className={`text-sm ${
                    severity === index
                      ? "font-bold text-primary"
                      : "text-gray-600"
                  }`}
                  onClick={() => setSeverity(index)}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Confidence Section */}
        <div className="space-y-2">
          <label className="block font-medium text-gray-800 dark:text-gray-200">
            How confident are you in your estimate
          </label>

          <div className="flex flex-wrap gap-3">
            {confidenceLevels.map((level, index) => (
              <button
                key={index}
                className={`flex items-center gap-2 p-2 rounded-full ${
                  confidence === index ? " " : " "
                }`}
                onClick={() => setConfidence(index)}
              >
                <div
                  className={`w-5 h-5 rounded-full ${
                    confidence === index
                      ? "bg-primary"
                      : "bg-white border border-gray-400"
                  }`}
                >
                  {confidence === index && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </div>
                <span className="text-sm">{level}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Comment Section */}
        <div className="space-y-2">
          <label className="block font-medium text-gray-800 dark:text-gray-200">
            Comment
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={3}
            placeholder="Tell us reason why you rate this risk event"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {/* Submit Button - Custom implementation without using the Button component */}
        <div className="flex justify-end">
          <Button className="px-6 py-2 text-white rounded-md hover:bg-opacity-80 transition-colors duration-200 ease-in-out">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
