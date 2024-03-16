"use client";

import { useState } from "react";
import LeftSide from "./left-side";
import RightContent from "./right-content";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";

const LEFT_SIDE_MIN_WIDTH = 5;

const ResizeLayoutWrapper = ({
  defaultLayout = [33, 67],
}: {
  defaultLayout: number[] | undefined;
}) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  const [leftSize, setLeftSize] = useState(0);
  const onResize = (size: number, preSize: number | undefined) => {
    setLeftSize(size);
  };

  return (
    <ResizablePanelGroup direction="horizontal" onLayout={onLayout}>
      <ResizablePanel
        onResize={(size, preSize) => onResize(size, preSize)}
        defaultSize={defaultLayout[0]}
        maxSize={30}
        minSize={5}
      >
        <LeftSide currentSize={leftSize === LEFT_SIDE_MIN_WIDTH} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={defaultLayout[1]}>
        <RightContent />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ResizeLayoutWrapper;
