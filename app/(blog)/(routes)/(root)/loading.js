import { TbLoaderQuarter } from "react-icons/tb";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center ">
      <TbLoaderQuarter size={120} className="mx-auto animate-spin" />
      <div className="text-xl">LOADING...</div>
    </div>
  );
}
