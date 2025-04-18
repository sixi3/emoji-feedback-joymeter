
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
      
      <div className="flex justify-center items-start gap-6 md:gap-8">
        {/* Unhappy */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => handleSelect("unhappy")}
            className={cn(
              "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-200 mb-2",
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
            />
          </button>
          <span className={cn(
            "text-sm transition-colors",
            selectedRating === "unhappy" 
              ? "font-bold text-black" 
              : "font-medium text-gray-400"
          )}>
            Unhappy
          </span>
        </div>

        {/* Neutral */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => handleSelect("neutral")}
            className={cn(
              "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-200 mb-2",
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
            />
          </button>
          <span className={cn(
            "text-sm transition-colors",
            selectedRating === "neutral" 
              ? "font-bold text-black" 
              : "font-medium text-gray-400"
          )}>
            Neutral
          </span>
        </div>

        {/* Happy */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => handleSelect("happy")}
            className={cn(
              "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-200 mb-2",
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
            />
          </button>
          <span className={cn(
            "text-sm transition-colors",
            selectedRating === "happy" 
              ? "font-bold text-black" 
              : "font-medium text-gray-400"
          )}>
            Happy
          </span>
        </div>
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
