import ConcatInfo from "./concat-info";

const ConcatAction = () => {
  return (
    <div className="p-4 flex flex-row justify-between border-b">
      <label className="text-muted-foreground text-sm">To：</label>
      <ConcatInfo />
    </div>
  );
};

export default ConcatAction;
