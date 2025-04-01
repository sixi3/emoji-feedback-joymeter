
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type FeedbackRating = "unhappy" | "neutral" | "happy" | null;

interface FeedbackEmojiProps {
  onRatingChange?: (rating: FeedbackRating) => void;
  title?: string;
}

const FeedbackEmoji = ({ 
  onRatingChange, 
  title = "How would you like to rate my assistance?"
}: FeedbackEmojiProps) => {
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
      
      <div className="flex justify-center items-center gap-4 md:gap-6">
        {/* Unhappy */}
        <button
          onClick={() => handleSelect("unhappy")}
          className={cn(
            "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-200",
            selectedRating === "unhappy" 
              ? "bg-red-100 border-2 border-red-400" 
              : "bg-gray-100 border border-gray-300 hover:bg-gray-200"
          )}
          aria-label="Unhappy rating"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 relative">
            {/* Face */}
            <div className="rounded-full w-full h-full flex items-center justify-center">
              {/* Eyes */}
              <div className="absolute top-3 left-2 w-2 h-2 rounded-full bg-gray-600"></div>
              <div className="absolute top-3 right-2 w-2 h-2 rounded-full bg-gray-600"></div>
              {/* Mouth */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-gray-600 rounded-b-full"></div>
            </div>
          </div>
        </button>

        {/* Neutral */}
        <button
          onClick={() => handleSelect("neutral")}
          className={cn(
            "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-200",
            selectedRating === "neutral" 
              ? "bg-yellow-100 border-2 border-yellow-400" 
              : "bg-gray-100 border border-gray-300 hover:bg-gray-200"
          )}
          aria-label="Neutral rating"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 relative">
            {/* Face */}
            <div className="rounded-full w-full h-full flex items-center justify-center">
              {/* Eyes */}
              <div className="absolute top-3 left-2 w-2 h-2 rounded-full bg-gray-600"></div>
              <div className="absolute top-3 right-2 w-2 h-2 rounded-full bg-gray-600"></div>
              {/* Mouth */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-600 rounded"></div>
            </div>
          </div>
        </button>

        {/* Happy */}
        <button
          onClick={() => handleSelect("happy")}
          className={cn(
            "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-200",
            selectedRating === "happy" 
              ? "bg-green-100 border-2 border-green-400" 
              : "bg-gray-100 border border-gray-300 hover:bg-gray-200"
          )}
          aria-label="Happy rating"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 relative">
            {/* Face */}
            <div className="rounded-full w-full h-full flex items-center justify-center">
              {/* Eyes */}
              <div className="absolute top-3 left-2 w-2 h-2 rounded-full bg-gray-600"></div>
              <div className="absolute top-3 right-2 w-2 h-2 rounded-full bg-gray-600"></div>
              {/* Mouth */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-3 border-t-2 border-gray-600 rounded-t-full"></div>
            </div>
          </div>
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

export default FeedbackEmoji;
