"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Function_category } from "@prisma/client";
import { toast } from "react-toastify";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { cn } from "@/lib/utils";

import { BsCheck, BsChevronExpand } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

const formSchema = z.object({
  category: z.string().min(1).max(20),
});

const FunctionCategoryForm = ({
  categories,
  category,
  functionName,
}: {
  categories: Array<Function_category>;
  category: Function_category | null | undefined;
  functionName: string;
}) => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(category?.name);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: category?.name,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit() {
    try {
      setIsSubmited(true);
      const response = await fetch(`/api/functions/${functionName}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          categoryName: value,
        }),
      });
      if (!response.ok) {
        toast.error("Fail");
        throw Error("");
      }
      toast.success("카테고리 수정 성공!");
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
            name={"category"}
            render={() => (
              <FormItem>
                <FormLabel className="block w-full text-lg">Category</FormLabel>
                <FormControl>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between">
                        {value
                          ? categories?.find(
                              (category) => category.name === value
                            )?.name
                          : "Select Category..."}
                        <BsChevronExpand className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandEmpty>No Category found.</CommandEmpty>
                        <CommandGroup>
                          {categories.map((category) => (
                            <CommandItem
                              key={category.name}
                              value={category.name}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}>
                              <BsCheck
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === category.name
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {category.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormControl>
              </FormItem>
            )}></FormField>
          <Button type="submit" disabled={isSubmited}>
            Edit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FunctionCategoryForm;
