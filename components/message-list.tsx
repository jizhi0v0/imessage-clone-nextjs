import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import UserAvatar from "./user-avatar";
import { cn } from "@/lib/utils";

type Message = {
  from: string;
  content: string;
};
const messages: Array<Message> = [
  {
    from: "899.041.7979x547",
    content: "Career issue open determine scientist.",
  },
  {
    from: "185-010-4541",
    content: "Point whether executive Congress.",
  },
  {
    from: "954.653.4057",
    content: "End way price fight.",
  },
  {
    from: "321.295.4267x4295",
    content: "Information remain director certainly.",
  },
  {
    from: "(132)327-6128x509",
    content: "Anyone section statement total arrive material.",
  },
  {
    from: "(856)544-4191",
    content: "Deep military anyone kid.",
  },
  {
    from: "(009)147-9831x23452",
    content: "Most realize nothing lead detail relate.",
  },
  {
    from: "415.708.9950",
    content: "Evidence kid decide world old system reveal.",
  },
  {
    from: "8877206229",
    content: "Seem within represent represent necessary result control own.",
  },
  {
    from: "+1-743-800-0838x3061",
    content: "Leave represent series suddenly.",
  },
  {
    from: "(856)240-7078x2210",
    content: "Second trouble home play whatever industry yard.",
  },
  {
    from: "+1-596-499-2578x12108",
    content: "Suggest history who writer six within position.",
  },
  {
    from: "+1-819-776-1975",
    content: "Decision plant little hear knowledge.",
  },
  {
    from: "216-718-6538x87159",
    content: "Treatment condition environment hand operation worry they on.",
  },
  {
    from: "185-422-5374x450",
    content: "Social officer call skill.",
  },
  {
    from: "(259)622-3951x6448",
    content: "Character activity agree fast them special.",
  },
  {
    from: "001-719-508-1096x573",
    content: "Him this account box learn.",
  },
  {
    from: "001-654-238-0141x539",
    content: "Product debate answer reduce too technology.",
  },
  {
    from: "857-234-9210x38386",
    content: "Land recognize relationship challenge back official list.",
  },
  {
    from: "001-485-281-0975",
    content: "Example imagine morning point step.",
  },
];

const MessageList = ({ currentSize }: { currentSize: boolean }) => {
  return (
    <ScrollArea
      className={cn("max-h-screen overflow-y-hidden rounded-md p-1", {
        "p-3 border-t": currentSize,
      })}
    >
      <div className="space-y-2">
        {messages.map((message) => (
          <div key={message.from}>
            <div className="flex flex-row items-center text-sm gap-x-2 min-h-14">
              <div>
                <UserAvatar />
              </div>
              <div
                className={cn("flex flex-col min-h-16", {
                  hidden: currentSize,
                })}
              >
                <div className="text-top text-nowrap">{message.from}</div>
                <div className="text-muted-foreground text-sm text-ellipsis line-clamp-2">
                  {message.content}
                </div>
              </div>
            </div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default MessageList;
