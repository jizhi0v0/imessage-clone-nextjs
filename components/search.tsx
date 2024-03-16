import { Input } from "@/components/ui/input";
import SearchIcon from "./search-icon";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

interface CssJson {
  [key: string]: string | number;
}

const Search = ({ classname }: { classname: ClassValue }) => {
  return (
    <div className={cn("flex flex-row relative items-center", classname)}>
      <Input className="pl-8" />
      <SearchIcon classname="absolute top-[6px] left-1" />
    </div>
  );
};

export default Search;
