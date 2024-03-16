import ResizeLayoutWrapper from "@/components/resize-layout-wrapper";
import { cookies } from "next/headers";

export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout");

  let defaultLayout;
  if (layout) {
    defaultLayout = JSON.parse(layout.value);
  }

  return <ResizeLayoutWrapper defaultLayout={defaultLayout} />;
}
