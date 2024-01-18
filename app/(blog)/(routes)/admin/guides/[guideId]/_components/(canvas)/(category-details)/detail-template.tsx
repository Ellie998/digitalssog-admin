/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRecoilValue } from 'recoil';
import { screenDatasState } from '../canvas-atom';

const appVersions = [
  { label: '0.1.2', value: '0.1.2' },
  { label: '0.1.3', value: '0.1.3' },
  { label: '0.1.4', value: '0.1.4' },
] as const;
const apps = [
  { label: '기본', value: '기본' },
  { label: '카카오톡', value: '카카오톡' },
] as const;
const phoneNames = [
  { label: '갤럭시s8', value: 'galaxy_s_10' },
  { label: '갤럭시노트10', value: 'galaxy_note_10' },
  { label: '무관', value: 'none' },
] as const;

const formSchema = z.object({
  app: z.string(),
  version: z.string(),
  phoneName: z.string(),
  screenName: z.string(),
});

const DetailTemplate = () => {
  const screenDatas = useRecoilValue(screenDatasState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { app: '', version: '', phoneName: '', screenName: '' },
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
                        'w-[200px] justify-between',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value
                        ? apps.find((app) => app.value === field.value)?.label
                        : 'Select App'}
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
                            form.setValue('app', app.value);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              app.value === field.value ? 'opacity-100' : 'opacity-0',
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
          name="version"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">App Version</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        'w-[200px] justify-between',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value
                        ? appVersions.find((appVersion) => appVersion.value === field.value)?.label
                        : 'Select App Version'}
                      <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0  cursor-pointer">
                  <Command className="  z-[999] cursor-pointer">
                    <CommandInput placeholder="Search UI type..." />
                    <CommandEmpty>No App Version type found.</CommandEmpty>
                    <CommandGroup>
                      {appVersions.map((version) => (
                        <CommandItem
                          className="cursor-pointer z-100"
                          value={version.label}
                          key={version.value}
                          onSelect={() => {
                            form.setValue('version', version.value);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              version.value === field.value ? 'opacity-100' : 'opacity-0',
                            )}
                          />
                          {version.label}
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
          name="phoneName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">Phone Name</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        'w-[200px] justify-between',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value
                        ? phoneNames.find((phoneName) => phoneName.value === field.value)?.label
                        : 'Select Phone Name'}
                      <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0  cursor-pointer">
                  <Command className="  z-[999] cursor-pointer">
                    <CommandInput placeholder="Search Phone Name..." />
                    <CommandEmpty>No Phone Name found.</CommandEmpty>
                    <CommandGroup>
                      {phoneNames.map((phoneName) => (
                        <CommandItem
                          className="cursor-pointer z-100"
                          value={phoneName.label}
                          key={phoneName.value}
                          onSelect={() => {
                            form.setValue('phoneName', phoneName.value);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              phoneName.value === field.value ? 'opacity-100' : 'opacity-0',
                            )}
                          />
                          {phoneName.label}
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
          name="screenName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">Screen Name</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        'w-[200px] justify-between',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value
                        ? screenDatas.find((screenData) => screenData.name === field.value)?.name
                        : 'Select Screen Name'}
                      <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0  cursor-pointer">
                  <Command className="  z-[999] cursor-pointer">
                    <CommandInput placeholder="Search Screen Name..." />
                    <CommandEmpty>No Screen Name found.</CommandEmpty>
                    <CommandGroup>
                      {screenDatas.map((screenData) => (
                        <CommandItem
                          className="cursor-pointer z-100"
                          value={screenData.name}
                          key={screenData.name}
                          onSelect={() => {
                            form.setValue('screenName', screenData.name);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              screenData.name === field.value ? 'opacity-100' : 'opacity-0',
                            )}
                          />
                          {screenData.name}
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

        <Button className="mr-4" type="button">
          Go To Add
        </Button>
        <Button type="button" variant={'secondary'}>
          Go To Edit
        </Button>
      </form>
    </Form>
  );
};

export default DetailTemplate;
