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
import { Card } from "@/components/ui/card";
import Link from "next/link";

const formSchema = z.object({
   name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Must include an uppercase letter")
      .regex(/[a-z]/, "Must include a lowercase letter")
      .regex(/[0-9]/, "Must include a number")
      .regex(/[^A-Za-z0-9]/, "Must include a special character"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
});

export function SignUpFrom() {
  // 1. Define your form.
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
    <Card className="p-10 mx-auto shadow-xl rounded-2xl bg-white">
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
                className="px-4 text-base max-w-xl border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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
                className=" px-4 text-base border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Enter your email"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-medium">Password</FormLabel>
            <FormControl>
              <Input
              type="password"
                className=" px-4 text-base border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="****"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-medium">Confrom Password</FormLabel>
            <FormControl>
              <Input
              type="password"
                className=" px-4 text-base border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="****"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button
        className="w-full text-base font-semibold bg-blue-600 hover:bg-blue-700 transition-colors"
        type="submit"
      >
        Submit
      </Button>
    </form>
  </Form>
  <div>Don&apos;t have an accout/<Link className="text-blue-800 hover: underline" href="/signin">SignIn</Link></div>
</Card>

  );
}
