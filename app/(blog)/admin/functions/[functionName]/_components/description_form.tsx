"use client";

import { useRouter } from "next/navigation";

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
  description: z.string().min(1),
});

const FunctionDescriptionForm = ({
  description,
  functionName,
}: {
  description: string;
  functionName: string;
}) => {
  const router = useRouter();
  const [isSubmited, setIsSubmited] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: description,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmited(true);
      const response = await fetch(`/api/functions/${functionName}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description: values.description,
        }),
      });
      if (!response.ok) {
        toast.error("Fail");
        throw Error("");
      }
      toast.success("description 수정 성공!");
      router.push(`/admin/functions/${functionName}`);
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmited(false);
    }
  }
  return (
    <div className="w-full p-6 shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Description</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmited}>
            Edit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FunctionDescriptionForm;
