import { db } from "@/lib/db";
import Link from "next/link";
import classes from "./categories.module.css";

const Categorires = async ({ tab }: { tab: string }) => {
  const categories = await db.function_category.findMany({
    where: {},
  });

  return (
    <div className="flex flex-wrap px-4 mx-auto text-center gap-x-5 w-fit sm:px-0">
      <div className={`${classes.index}`}>카테고리 : </div>
      {categories?.map((category, i) => (
        <div className={`flex ${classes.categoryList}`} key={i}>
          <Link
            href={{ query: { tab: category.name.replaceAll(" ", "-") } }}
            scroll={false}
            key={category.id}>
            <div
              className={` flex text-lg ${
                tab === category.name.replaceAll(" ", "-") ||
                (tab === undefined && category.name.includes("hot"))
                  ? classes.clicked
                  : ""
              } `}>
              <div>{category.icon}</div>
              <div className={`${classes.category}`}>{category.name}</div>
            </div>
          </Link>
          {categories.length - 1 !== i ? "," : ""}
        </div>
      ))}
    </div>
  );
};

export default Categorires;
