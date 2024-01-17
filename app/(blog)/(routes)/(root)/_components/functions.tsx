import { db } from "@/lib/db";
import Link from "next/link";
import { Suspense } from "react";
import { TbLoaderQuarter } from "react-icons/tb";
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full transition-all ">
      <TbLoaderQuarter size={60} className="mx-auto animate-spin" />
      <div className="text-md">LOADING...</div>
    </div>
  );
};

const Functions = async ({
  searchParams,
}: {
  searchParams: {
    tab: string;
  };
}) => {
  const functions = await db.function.findMany({
    where: {
      category: {
        name: searchParams.tab ? searchParams.tab : "hot(인기)",
      },
    },
  });

  return (
    <Suspense fallback={<Loading />}>
      <div>
        {!functions && <div>Loading</div>}
        {functions && (
          <ul className="flex flex-col text-left gap-y-5">
            {functions?.map((item) => (
              <li
                key={item.id}
                className="flex border-b-[0.5px] border-slate-300 ">
                <Link href={`/description/${item.title.replaceAll(" ", "-")}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Suspense>
  );
};

export default Functions;
