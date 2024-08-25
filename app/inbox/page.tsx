import React from "react";
import Conversation from "../components/Inbox/Conversation";

type Props = {};

const InboxPage = (props: Props) => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
      <h1 className="my-6 text-2xl">Inbox</h1>

      <Conversation/>
      <Conversation/>
    </main>
  );
};

export default InboxPage;
