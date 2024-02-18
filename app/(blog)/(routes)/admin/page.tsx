import { Button } from "@/components/ui/button";
import Link from "next/link";
import FunctionForm from "./(edit)/functions/_components/function_form";

const AdminPage = () => {
  return (
    <div>
      <div className="flex justify-between pt-6 pb-12">
        <h1 className="text-2xl font-bold ">Admin Page</h1>
        <Button className="block ml-auto" variant="secondary">
          <Link href={"/admin/create/functions"}>
            Create Function description
          </Link>
        </Button>
      </div>

      <FunctionForm />
    </div>
  );
};

export default AdminPage;
