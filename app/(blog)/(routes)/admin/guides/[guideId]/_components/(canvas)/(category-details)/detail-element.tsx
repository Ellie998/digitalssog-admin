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

import { useEffect, useState } from 'react';
import TextForm from './text-form';
import IconForm from './icon-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { elementDataType, elementDatasState, selectedElementState } from '../canvas-atom';

const types = [
  { label: 'Text', value: 'text' },
  { label: 'Icon', value: 'icon' },
  { label: 'Tab', value: 'tab' },
] as const;

const formSchema = z.object({
  type: z.string(),
});

const DetailElement = () => {
  const [uiType, setUiType] = useState('');
  const elementDatas = useRecoilValue(elementDatasState);

  const selectedElement = useRecoilValue(selectedElementState);
  const selectedElementInfo: elementDataType | undefined = elementDatas.find(
    (element) => element.id === selectedElement,
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { type: '' },
  });
  useEffect(() => {}, [selectedElement]);

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-4 space-y-8 "
      >
        <div className="font-bold text-md">{selectedElementInfo ? 'Edit UI' : 'New UI'}</div>
        {/* type */}
        {!selectedElementInfo && (
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mr-2">UI type</FormLabel>
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
                          ? types.find((type) => type.value === field.value)?.label
                          : 'Select Type'}
                        <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0  cursor-pointer">
                    <Command className="  z-[999] cursor-pointer">
                      <CommandInput placeholder="Search App..." />
                      <CommandEmpty>No App found.</CommandEmpty>
                      <CommandGroup>
                        {types.map((type) => (
                          <CommandItem
                            className="cursor-pointer z-100"
                            value={type.label}
                            key={type.value}
                            onSelect={() => {
                              form.setValue('type', type.value);
                              setUiType(type.value);
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                type.value === field.value ? 'opacity-100' : 'opacity-0',
                              )}
                            />
                            {type.label}
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
        )}
        {uiType === 'text' && <TextForm />}
        {uiType === 'icon' && <IconForm />}
      </form>
    </Form>
  );
};

export default DetailElement;
