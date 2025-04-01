
import React, { useState } from "react";
import FeedbackEmoji from "@/components/FeedbackEmoji";
import FeedbackEmojiImproved from "@/components/FeedbackEmojiImproved";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [feedbackType, setFeedbackType] = useState<string | null>(null);
  const [feedbackTypeImproved, setFeedbackTypeImproved] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Emoji Feedback Component</h1>
      
      <Tabs defaultValue="basic" className="w-full max-w-3xl">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="basic">Custom Emoji</TabsTrigger>
          <TabsTrigger value="improved">Lucide Icons</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle>Basic Emoji Feedback</CardTitle>
              <CardDescription>
                A simple feedback component with custom CSS emoji faces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="py-4 px-2">
                <FeedbackEmoji 
                  onRatingChange={(rating) => {
                    setFeedbackType(rating || null);
                    console.log("Rating selected:", rating);
                  }}
                />
                
                {feedbackType && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-md text-center">
                    <p className="text-blue-700">
                      You selected: <span className="font-semibold">{feedbackType}</span>
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="improved">
          <Card>
            <CardHeader>
              <CardTitle>Improved Emoji Feedback</CardTitle>
              <CardDescription>
                Enhanced feedback component using Lucide icons for better visuals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="py-4 px-2">
                <FeedbackEmojiImproved 
                  onRatingChange={(rating) => {
                    setFeedbackTypeImproved(rating || null);
                    console.log("Rating selected:", rating);
                  }}
                />
                
                {feedbackTypeImproved && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-md text-center">
                    <p className="text-blue-700">
                      You selected: <span className="font-semibold">{feedbackTypeImproved}</span>
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>Click on an emoji to select your feedback rating</p>
      </div>
    </div>
  );
};

export default Index;
