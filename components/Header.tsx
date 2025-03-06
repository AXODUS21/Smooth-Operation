'use client'

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@lib/utils";

interface HeaderProps {
  className?: string;
}

export const Header = ({className}: HeaderProps) => {
    return (

     <header
       className={cn(
         "fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
         className
       )}
     >
       <div className="container flex h-16 items-center justify-between">
         <Link
        //    href={user ? "/projects" : "/"}
           href={""}
           className="flex items-center space-x-2 font-bold text-xl hover:text-primary transition-colors"
         >
           Smooth Operation
         </Link>

         <div className="flex items-center gap-4">
           {/* {user ? (
             <UserMenu user={user} />
           ) : (
             <div className="flex items-center gap-3">
               {isLandingPage && (
                 <>
                   <Button variant="ghost" asChild>
                     <Link href="/login">Sign in</Link>
                   </Button>
                   <Button asChild>
                     <Link href="/create-account">Get Started</Link>
                   </Button>
                 </>
               )}
             </div>
           )} */}
           <div className="border-l pl-4 dark:border-gray-800">
             <ThemeToggle />
           </div>
         </div>
       </div>
     </header>
    )
}
