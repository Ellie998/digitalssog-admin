"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast } from "react-toastify";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { encodeUrl } from "@/lib/utils";

const formSchema = z.object({
  order: z.string(),
});

const MethodOrderForm = ({ id, order }: { id: string; order: number }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();
  const params = useParams();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { order: String(order) },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmit(true);
      const response = await fetch(`/api/methods/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order: Number(values.order),
        }),
      });
      if (!response.ok) {
        toast.error("ERROR!");
        throw Error("FAIL : METHOD ORDER FORM");
      }

      toast.success("Method order 수정 성공");
      typeof params.functionName === "string" &&
        typeof params.appName === "string" &&
        router.push(
          `/admin/functions/${encodeUrl(params.functionName)}/${encodeUrl(
            params.appName
          )}/${values.order}`
        );
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmit(false);
    }
  }

  return (
    <div className="p-6 border rounded-sm shadow-md ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="order"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Method Order</FormLabel>
                <FormControl>
                  <Input
                    placeholder={String(order)}
                    {...field}
                    type="number"
                    min={0}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmit}>
            Edit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default MethodOrderForm;
