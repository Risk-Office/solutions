import React, { useState } from "react";
import {
  MessageSquare,
  Send,
  ArrowLeftToLine,
  MessageCircleMore,
  Mic,
  Smile,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import featuredImage from "~/assets/png/dashboard-image.png";
import avartarImage from "~/assets/png/avar.png";
import avartImage from "~/assets/png/avar1.png";

const ChatPage = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");

  // Updated topics with 5 items
  const topics = [
    {
      id: 1,
      title: "Changes in minimum wages and laws",
      category: "labor policy > news/article",
    },
    {
      id: 2,
      title: "Corporate task policy changes",
      category: "task policy > riskevent",
    },
    {
      id: 3,
      title: "Energy price fluctuation",
      category: "task policy > statements/actions",
    },
    {
      id: 4,
      title: "Supply chain disruptions",
      category: "operations > alerts",
    },
    { id: 5, title: "New compliance regulations", category: "legal > updates" },
  ];

  // Updated messages with aligned right example
  const messages = [
    {
      id: 1,
      user: "Fikayo",
      text: "Hey everyone we've identified a potential risk event regarding system downtion due to a server overload. The preliminery assessement suggests a moderate impact if not mitigated",
      time: "10:30 AM",
      align: "left",
      avatar: avartImage,
    },
    {
      id: 2,
      user: "Tobi",
      text: "Thanks for the update, @Fikayo @Bukayo can you confirm the estimated time of occurance? We need to check server load trends and implement prevent measures",
      time: "4:30 PM",
      align: "left",
      avatar: avartarImage,
    },
    {
      id: 3,
      user: "Bukayo",
      text: "Based on our risk model, the event has a 40% probability of occuring within the next 12 hours. @Feranmi, can confirm mitigation steps?",
      time: "10:35 AM",
      align: "left",
      avatar: avartImage,
    },
    {
      id: 4,
      user: "Feranmi",
      text: "We are deploying load balancers and scailing up server resources. If this doesn't stabilize the system, we may need a 30 minutes maintenace window",
      time: "11:08 AM",
      align: "right",
      avatar: avartarImage,
    },
  ];

  return (
    <div className="flex h-[100%] bg-gray-100">
      {/* Topics Sidebar */}
      <div className="w-1/4 bg-[#f7f7f7]">
        <div className="p-4">
          <h2 className="text-lg font-semibold flex items-center justify-between">
            <article className="flex items-center gap-2">
              <MessageCircleMore />
              <span>Topics</span>
            </article>
            <ArrowLeftToLine className="h-8 w-8 border border-gray-200 rounded-full p-2 text-gray-500 cursor-pointer" />
          </h2>
        </div>

        <div className="overflow-y-auto mt-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => setSelectedTopic(topic.title)}
              className={`p-4 border-b border-gray-300 cursor-pointer ${
                selectedTopic === topic.title ? "bg-[#f7f7f7]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <div className="">
                    <span className="font-medium">{topic.title}</span>
                  </div>
                  <span className="text-xs text-gray-500 ">
                    {topic.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Chat Header Card */}
        <div className="p-4 bg-white border-b border-gray-200 rounded-lg shadow-sm m-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 bg-[#f7f7f7] p-4">
              <article>
                <h2 className="text-lg font-semibold">
                  {selectedTopic || "Select a topic"}
                </h2>
                <p className="italic text-sm mt-2">
                  U.S. Department of labor, state labor department
                </p>
              </article>
              <img
                src={featuredImage}
                alt="art"
                style={{ width: "150px", height: "70px", borderRadius: "4px" }}
              />
            </div>
            <div className="flex -space-x-2 overflow-hidden">
              <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage src={avartarImage} />
              </Avatar>
              <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage src={avartImage} />
              </Avatar>
              <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage src={avartarImage} />
              </Avatar>
              <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage src={avartImage} />
              </Avatar>
              <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage src={avartarImage} />
              </Avatar>
            </div>
          </div>
        </div>

        {/* Conversation Area */}
        <div className="flex-1 p-8 bg-gray-50 rounded-lg shadow-sm m-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`group relative flex gap-2 mb-6 ${
                message.align === "right" ? "flex-row-reverse" : ""
              }`}
            >
              <Avatar>
                <AvatarImage src={message.avatar} />
                <AvatarFallback>{message.user[0]}</AvatarFallback>
              </Avatar>
              <div
                className={`max-w-[70%] p-3 rounded-lg ${
                  message.align === "right"
                    ? "bg-[#f7f7f7] border border-gray-200"
                    : "bg-[#f7f7f7] border border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between mb-1 gap-2">
                  <span className="font-medium text-sm">{message.user}</span>
                  <span className="text-xs opacity-75">{message.time}</span>
                </div>
                <p className="text-sm text-gray-700">{message.text}</p>
              </div>
              {/* Hoverable Emoji Reaction */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity
            ${message.align === "right" ? "left-30" : "right-30"}`}
              >
                <Button
                  variant="text"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-white shadow-sm"
                >
                  <Smile className="h-4 w-4 text-gray-500" />
                </Button>
              </div>
            </div>
          ))}
          <div className="flex gap-2 items-center bg-[#f7f7f7] rounded-lg border border-gray-200 p-4 mt-4">
            <Button variant="text" size="icon" className="rounded-full">
              <Smile className="h-5 w-5 text-gray-600" />
            </Button>
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your here message..."
              className="flex-1"
            />
            <Button variant="text" size="icon" className="rounded-full">
              <Mic className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="text" size="icon" className="rounded-full">
              <Send className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
