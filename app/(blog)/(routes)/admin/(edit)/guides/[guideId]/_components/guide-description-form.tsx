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
import { useRouter } from "next/navigation";

const formSchema = z.object({
  description: z.string(),
});

const GuideDescriptionForm = ({
  id,
  description,
}: {
  id: string;
  description: string;
}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { description: description },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmit(true);
      const response = await fetch(`/api/guides/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description: values.description,
        }),
      });
      if (!response.ok) {
        toast.error("ERROR!");
        throw Error("FAIL : GUIDE DESCRIPTION FORM");
      }

      toast.success("Guide description 수정 성공");
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
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Guide Description</FormLabel>
                <FormControl>
                  <Input placeholder={"guide의 description 작성"} {...field} />
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

export default GuideDescriptionForm;
