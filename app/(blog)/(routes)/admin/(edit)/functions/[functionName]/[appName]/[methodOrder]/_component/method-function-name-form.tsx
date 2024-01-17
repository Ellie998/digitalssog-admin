"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  FormMessage,
} from "@/components/ui/form";

import { toast } from "react-toastify";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { encodeUrl } from "@/lib/utils";
import { Function } from "@prisma/client";

const formSchema = z.object({
  functionName: z.string(),
});

const MethodFunctionNameForm = ({
  id,
  functionName,
  functions,
}: {
  id: string;
  functionName: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  functions: Function[];
}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(functionName);

  const router = useRouter();
  const params = useParams();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { functionName: functionName },
  });

  async function onSubmit() {
    try {
      setIsSubmit(true);
      const response = await fetch(`/api/methods/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          functionName: value,
        }),
      });
      if (!response.ok) {
        toast.error("ERROR!");
        throw Error("FAIL : METHOD FUNCTION NAME FORM");
      }

      toast.success("Method functionName 수정 성공");
      typeof params.appName === "string" &&
        router.push(
          `/admin/functions/${encodeUrl(value)}/${encodeUrl(params.appName)}/${
            params.methodOrder
          }`
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
            name="functionName"
            render={() => (
              <FormItem>
                <FormLabel className="block text-lg">
                  Method Linked Function Name
                </FormLabel>
                <FormControl>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between">
                        {value
                          ? functions?.find(
                              (functionData) => functionData.title === value
                            )?.title
                          : "Select Function..."}
                        <BsChevronExpand className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandEmpty>No Category found.</CommandEmpty>
                        <CommandGroup>
                          {functions.map((functionData) => (
                            <CommandItem
                              key={functionData.id}
                              value={functionData.title}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}>
                              <BsCheck
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === functionData.title
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {functionData.title}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
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

export default MethodFunctionNameForm;
