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
import { decodeUrl, encodeUrl } from "@/lib/utils";

const formSchema = z.object({
  order: z.string(),
  description: z.string(),
  appName: z.string(),
});

const AdminMethodCreatePage = ({
  params,
}: {
  params: { functionName: string };
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { description: "", appName: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      toast("DB 생성중", { autoClose: 2000 });
      const response = await fetch(
        `/api/functions/${encodeUrl(params.functionName)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            order: Number(values.order),
            description: values.description,
            appName: values.appName,
          }),
        }
      );
      if (!response.ok) {
        toast.error("ERROR!");
        throw Error("FAIL :CREATE FUNCTION DESCRIPTION");
      }

      toast.success(() => (
        <div className="flex justify-between">
          <div>Method 생성 성공</div>
          <div>
            <Link
              href={`/admin/functions/${encodeUrl(
                params.functionName
              )}/${encodeUrl(values.appName)}/${values.order}`}>
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
      <h1 className="my-10 text-xl text-center">
        {decodeUrl(params.functionName)}기능 Method 생성 페이지
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="order"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Method Order</FormLabel>
                <FormControl>
                  <Input placeholder="ex) 0" {...field} type="number" min={0} />
                </FormControl>
                <FormDescription>해당 기능의 method 번호이다.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Method Description</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>해당 기능의 method 설명이다.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="appName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Method App Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  해당 기능의 method가 속하는 어플 이름을 작성한다.
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

export default AdminMethodCreatePage;
