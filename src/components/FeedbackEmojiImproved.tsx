
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FrownIcon, MehIcon, SmileIcon } from "lucide-react";

type FeedbackRating = "unhappy" | "neutral" | "happy" | null;

interface FeedbackEmojiImprovedProps {
  onRatingChange?: (rating: FeedbackRating) => void;
  title?: string;
}

const FeedbackEmojiImproved = ({
  onRatingChange,
  title = "How would you like to rate my assistance?"
}: FeedbackEmojiImprovedProps) => {
  const [selectedRating, setSelectedRating] = useState<FeedbackRating>(null);

  const handleSelect = (rating: FeedbackRating) => {
    setSelectedRating(rating);
    if (onRatingChange) {
      onRatingChange(rating);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-8">
      <h3 className="text-center text-lg font-medium text-gray-700 mb-6">
        {title}
      </h3>
      
      <div className="flex justify-center items-center gap-6 md:gap-8">
        {/* Unhappy */}
        <button
          onClick={() => handleSelect("unhappy")}
          className={cn(
            "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-200",
            selectedRating === "unhappy" 
              ? "bg-red-100 border-2 border-red-400 scale-110" 
              : "bg-gray-100 border border-gray-300 hover:bg-gray-200"
          )}
          aria-label="Unhappy rating"
        >
          <FrownIcon 
            size={32} 
            className={cn(
              "transition-colors",
              selectedRating === "unhappy" ? "text-red-500" : "text-gray-500"
            )} 
            fill={selectedRating === "unhappy" ? "#ef4444" : "none"}
          />
        </button>

        {/* Neutral */}
        <button
          onClick={() => handleSelect("neutral")}
          className={cn(
            "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-200",
            selectedRating === "neutral" 
              ? "bg-yellow-100 border-2 border-yellow-400 scale-110" 
              : "bg-gray-100 border border-gray-300 hover:bg-gray-200"
          )}
          aria-label="Neutral rating"
        >
          <MehIcon 
            size={32} 
            className={cn(
              "transition-colors",
              selectedRating === "neutral" ? "text-yellow-500" : "text-gray-500"
            )} 
            fill={selectedRating === "neutral" ? "#eab308" : "none"}
          />
        </button>

        {/* Happy */}
        <button
          onClick={() => handleSelect("happy")}
          className={cn(
            "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-200",
            selectedRating === "happy" 
              ? "bg-green-100 border-2 border-green-400 scale-110" 
              : "bg-gray-100 border border-gray-300 hover:bg-gray-200"
          )}
          aria-label="Happy rating"
        >
          <SmileIcon 
            size={32} 
            className={cn(
              "transition-colors",
              selectedRating === "happy" ? "text-green-500" : "text-gray-500"
            )} 
            fill={selectedRating === "happy" ? "#22c55e" : "none"}
          />
        </button>
      </div>
      
      {selectedRating && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Thank you for your feedback!
          </p>
        </div>
      )}
    </div>
  );
};

export default FeedbackEmojiImproved;
