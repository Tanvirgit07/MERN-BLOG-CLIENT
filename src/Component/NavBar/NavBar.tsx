/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import { SidebarTrigger } from '@/components/ui/sidebar'
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { removeUser } from "@/redux/slice/userSlice";

function NavBar() {

  const user = useSelector((state: any) => state.user);
  console.log("user", user);
  const router = useRouter();
  const dispatch = useDispatch();
 
  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/logout", {
        method: "GET",
        credentials: "include"
      });

      if(res.ok){
        dispatch(removeUser());
        toast.success("User login successfully !")
        router.push("/signin");
      }
    } catch (err: any) {
      toast.error(err.message)
    }
  };

  return (
    <div className="fixed left-0 top-0 w-full z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left Section: SidebarTrigger + Logo Space */}
      <div className="flex items-center space-x-4 w-[200px]">
        {/* <SidebarTrigger /> */}
        <div className="text-xl font-bold text-gray-800">MyLogo</div>
      </div>

      {/* Center Section: Search Input (perfectly centered) */}
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Section: Sign In Button */}

      {user?.isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src={user.user.avatar || "https://github.com/shadcn.png"}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <h4>{user.user.email}</h4>
              <p className="text-sm">{user.user.name}</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Create Post</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleLogout()}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="w-[200px] flex justify-end">
          <Link href="/signin">
            <button className="px-4 py-2 cursor-pointer text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
