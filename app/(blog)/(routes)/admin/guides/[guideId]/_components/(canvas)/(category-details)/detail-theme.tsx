/* eslint-disable @typescript-eslint/no-unused-vars */
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

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useState } from "react";

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSetRecoilState } from "recoil";
import { uiThemeChoiceModeState, uiThemeState, uiTypeState } from "../../atoms";

const uiTypes = [
  { label: "Icon", value: "icon" },
  { label: "Flex", value: "flex" },
  { label: "tab", value: "tab" },
] as const;
const apps = [
  { label: "기본", value: "기본" },
  { label: "카카오톡", value: "카카오톡" },
] as const;
const formSchema = z.object({
  app: z.string(),
  type: z.string(),
});

const DetailTheme = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const setUiThemeChoiceMode = useSetRecoilState(uiThemeChoiceModeState);
  const setUiType = useSetRecoilState(uiTypeState);
  const setUiTheme = useSetRecoilState(uiThemeState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-8 ">
        <div className="font-bold text-md">UI Theme Setting</div>

        <FormField
          control={form.control}
          name="app"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-2">App Name</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}>
                      {field.value
                        ? apps.find((app) => app.value === field.value)?.label
                        : "Select App"}
                      <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0  cursor-pointer">
                  <Command className="  z-[999] cursor-pointer">
                    <CommandInput placeholder="Search App..." />
                    <CommandEmpty>No App found.</CommandEmpty>
                    <CommandGroup>
                      {apps.map((app) => (
                        <CommandItem
                          className="cursor-pointer z-100"
                          value={app.label}
                          key={app.value}
                          onSelect={() => {
                            form.setValue("app", app.value);
                            setUiTheme(app.value);
                          }}>
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              app.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {app.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">UI Type</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}>
                      {field.value
                        ? uiTypes.find((uiType) => uiType.value === field.value)
                            ?.label
                        : "Select UI type"}
                      <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0  cursor-pointer">
                  <Command className="  z-[999] cursor-pointer">
                    <CommandInput placeholder="Search UI type..." />
                    <CommandEmpty>No UI type found.</CommandEmpty>
                    <CommandGroup>
                      {uiTypes.map((uiType) => (
                        <CommandItem
                          className="cursor-pointer z-100"
                          value={uiType.label}
                          key={uiType.value}
                          onSelect={() => {
                            form.setValue("type", uiType.value);
                            setUiType(uiType.value);
                          }}>
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              uiType.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {uiType.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isSubmit} className="mr-4">
          Go To Edit UI
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => {
            setUiThemeChoiceMode(false);
          }}>
          Cancel
        </Button>
      </form>
    </Form>
  );
};

export default DetailTheme;
