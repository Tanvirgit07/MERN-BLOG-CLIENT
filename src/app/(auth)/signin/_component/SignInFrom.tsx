"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
// import { Card } from "@/components/ui/card";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Give me right email!" }),
});

export function SignInFrom() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="p-5 min-w-xl mx-auto shadow-xl rounded-2xl bg-white">
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-medium">Name</FormLabel>
            <FormControl>
              <Input
                className="h-12 px-4 text-base max-w-xl border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Enter your name"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-medium">Email</FormLabel>
            <FormControl>
              <Input
                className="h-12 px-4 text-base border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Enter your email"
                {...field}
              />
            </FormControl>
            <FormMessage />
            
          </FormItem>
        )}
      />

      <Button
        className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 transition-colors"
        type="submit"
      >
        Submit
      </Button>
    </form>
  </Form>
  <div className="mt-2">Don&apos;t have an accout/<Link className="text-blue-800 hover: underline" href="/signup">SignUp</Link></div>
</div>

  );
}
