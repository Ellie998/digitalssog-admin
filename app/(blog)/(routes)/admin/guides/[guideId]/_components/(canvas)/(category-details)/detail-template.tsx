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
import { useSetRecoilState } from 'recoil';
import { selectedScreenDataState } from '../canvas-atom';
import {
  GuideWithGuideComponentWithScreenElements,
  TemplateWithScreensNameAndId,
  db,
} from '@/lib/db';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const formSchema = z.object({
  appName: z.string(),
  version: z.string(),
  phoneName: z.string(),
  screenName: z.string(),
});

const DetailTemplate = ({
  templates,
  guide,
}: {
  templates: TemplateWithScreensNameAndId[];
  guide: GuideWithGuideComponentWithScreenElements | null;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appName: guide?.guide_component?.screen?.template?.appName || '',
      version: guide?.guide_component?.screen?.template?.version || '',
      phoneName: guide?.guide_component?.screen?.template?.phoneName || '',
      screenName: guide?.guide_component?.screen?.name || '',
    },
  });
  const appNames: string[] = [];
  const phoneNames: string[] = [];
  const appVersions: string[] = [];
  const screens: { id: string; name: string | null }[] = [];

  const [appName, setAppName] = useState(guide?.guide_component?.screen?.template?.appName);
  const [appVersion, setAppVersion] = useState(guide?.guide_component?.screen?.template?.version);
  const [phoneName, setPhoneName] = useState(guide?.guide_component?.screen?.template?.phoneName);

  templates?.forEach((template) => {
    appNames.includes(template.appName || '') ? null : appNames.push(template.appName || '');
  });

  templates?.forEach((template) => {
    appName === template.appName && !appVersions.includes(template.version || '')
      ? appVersions.push(template.version || '')
      : null;
  });
  templates?.forEach((template) => {
    appName === template.appName &&
    appVersion === template.version &&
    !phoneNames.includes(template.phoneName || '')
      ? phoneNames.push(template.phoneName || '')
      : null;
  });

  templates?.forEach((template) => {
    appName === template.appName &&
    appVersion === template.version &&
    phoneName === template.phoneName
      ? template.screens?.forEach((screen) => {
          screens.push(screen);
        })
      : null;
  });
  useEffect(() => {}, [appName, appVersion, phoneName]);

  const setSelectedScreenData = useSetRecoilState(selectedScreenDataState);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-8 ">
        <div className="font-bold text-md">Template Setting</div>

        <FormField
          control={form.control}
          name="appName"
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
                        ? appNames.find((appName) => appName === field.value)
                        : 'Select appName'}
                      <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0  cursor-pointer">
                  <Command className="  z-[999] cursor-pointer">
                    <CommandInput placeholder="Search App..." />
                    <CommandEmpty>No App found.</CommandEmpty>
                    <CommandGroup>
                      {appNames?.map((appName) => (
                        <CommandItem
                          className="cursor-pointer z-100"
                          value={appName || ''}
                          key={appName}
                          onSelect={() => {
                            form.setValue('appName', appName || '');
                            setAppName(appName);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              appName === field.value ? 'opacity-100' : 'opacity-0',
                            )}
                          />
                          {appName}
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
                        ? appVersions.find((appVersion) => appVersion === field.value)
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
                      {appVersions?.map((version) => (
                        <CommandItem
                          className="cursor-pointer z-100"
                          value={version || ''}
                          key={version || ''}
                          onSelect={() => {
                            form.setValue('version', version || '');
                            setAppVersion(version);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              version === field.value ? 'opacity-100' : 'opacity-0',
                            )}
                          />
                          {version}
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
                        ? phoneNames.find((phoneName) => phoneName === field.value)
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
                      {phoneNames?.map((phoneName) => (
                        <CommandItem
                          className="cursor-pointer z-100"
                          value={phoneName || ''}
                          key={phoneName || ''}
                          onSelect={() => {
                            form.setValue('phoneName', phoneName || '');
                            setPhoneName(phoneName);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              phoneName === field.value ? 'opacity-100' : 'opacity-0',
                            )}
                          />
                          {phoneName}
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
                        ? screens?.find((screenData) => screenData.name === field.value)?.name
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
                      {screens?.map((screenData) => (
                        <CommandItem
                          className="cursor-pointer z-100"
                          value={screenData.name || ''}
                          key={screenData.name}
                          onSelect={() => {
                            form.setValue('screenName', screenData.name || '');
                            setSelectedScreenData({
                              id: screenData.id,
                              name: screenData.name || '',
                            });
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
          <Link href={`/admin/templates`}>Go To Add</Link>
        </Button>
        <Button type="button" variant={'secondary'}>
          <Link href={`/admin/templates/`}>Go To Edit</Link>
        </Button>
      </form>
    </Form>
  );
};

export default DetailTemplate;
