import { cn } from "@/lib/utils";
import MessageList from "./message-list";
import NewChat from "./new-chat";
import Search from "./search";
import { Separator } from "./ui/separator";

const LeftSide = ({ currentSize }: { currentSize: boolean }) => {
  console.log(currentSize);
  return (
    <div
      className={cn(
        "p-4 flex flex-col h-full overflow-y-auto max-h-screen gap-y-3",
        {
          "p-2": currentSize,
        }
      )}
    >
      <div
        className={cn("flex justify-end", {
          "justify-center pt-2": currentSize,
        })}
      >
        <NewChat />
      </div>
      <Search classname={currentSize && "hidden"} />
      <MessageList currentSize={currentSize} />
    </div>
  );
};

export default LeftSide;
