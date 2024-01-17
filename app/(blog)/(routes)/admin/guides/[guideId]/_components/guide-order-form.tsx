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

const formSchema = z.object({
  order: z.string(),
});

const GuideOrderForm = ({
  id,
  order,
}: {
  id: string;
  order: number | null;
}) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { order: String(order) },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmit(true);
      const response = await fetch(`/api/guides/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order: Number(values.order),
        }),
      });
      if (!response.ok) {
        toast.error("ERROR!");
        throw Error("FAIL : GUIDE ORDER FORM");
      }

      toast.success("Guide order 수정 성공");
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
                <FormLabel className="text-lg">Guide Order</FormLabel>
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

export default GuideOrderForm;
