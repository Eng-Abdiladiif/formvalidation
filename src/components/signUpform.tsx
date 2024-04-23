"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";



const FormSchema = z.object({
   email: z.string(). min(1, 'Email is required').email('Invalid Email'),
  password: z.string().min(1, 'password is required').min(8, 'password must have than 8 character'),
  confirm:z.string().min(1, 'password must have than 8 character' ),


})
.refine((data)  =>  data.password === data.confirm, {

  path:['confirm']
})


const onSubmit = (values: z.infer<typeof FormSchema>) => {
  console.log(values);
};


function SignUpform() {
  // ...

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    
  })
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Email" {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>confirm_Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Sign In</Button>
      </form>

      <div className="mx-auto my-4 flex w-full
      items-center justify-evenly
      before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400
      after:ml-4 after:block after:h-px after:flex-grow
      after:bg-stone-400">

        or

      </div>
    
    <div className="flex space-x-3 items-center">

    <p className="text-center text-sm text-gray-600 mt-2">
        if you don&apos;t have an acount, please&nbsp;
      </p>
      <Link href="/sign-in" className="text-sm
      text-blue-600">
        Sign-In
      </Link>
    </div>
    </Form>
  );
}

export default SignUpform;
