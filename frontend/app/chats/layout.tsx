import React, { ReactNode } from "react";
import { ChatsWrapper } from "@/page-s/Chats";
interface PageLayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: PageLayoutProps) => {
  return <ChatsWrapper>{children}</ChatsWrapper>;
};

export default Layout;
