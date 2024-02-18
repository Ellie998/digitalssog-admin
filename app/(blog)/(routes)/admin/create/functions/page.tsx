"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast } from "react-toastify";

import Link from "next/link";
import { encodeUrl } from "@/lib/utils";

const formSchema = z.object({
  functionName: z.string().min(1),
});

const AdminCreatePage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      functionName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      toast("DB 생성중", { autoClose: 2000 });
      const response = await fetch(`/api/functions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: values.functionName,
        }),
      });
      if (!response.ok) {
        toast.error("ERROR!");
        throw Error("FAIL :CREATE FUNCTION DESCRIPTION");
      }
      // toast.success("function 생성 성공!");
      toast.success(() => (
        <div className="flex justify-between">
          <div>function 생성 성공</div>
          <div>
            <Link href={`/admin/functions/${encodeUrl(values.functionName)}`}>
              Go To Edit
            </Link>
          </div>
        </div>
      ));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="functionName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>functionName</FormLabel>
                <FormControl>
                  <Input placeholder="ex) 전화 받기" {...field} />
                </FormControl>
                <FormDescription>
                  description page의 제목으로 표시된다.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AdminCreatePage;
