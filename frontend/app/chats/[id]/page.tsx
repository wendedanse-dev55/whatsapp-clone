import React from "react";
import { ChatHeader } from "@/widgets/ChatHeader";
import { ChatContent } from "@/widgets/ChatContent";
import { ChatContentFooter } from "@/widgets/ChatContentFooter";

const Page = () => {
  return (
    <div className="flex flex-col h-full">
      <ChatHeader />
      <ChatContent />
      <ChatContentFooter />
    </div>
  );
};

export default Page;
