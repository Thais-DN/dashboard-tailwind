"use client"

import { Cog, LifeBuoy, Menu, Search } from "lucide-react";
import { Logo } from "./Logo";
import { BarChart, CheckSquare, Flag, Home, SquareStack, Users } from "lucide-react";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import { InputControl, InputPrefix, InputRoot } from "../Input";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Button } from "../Button";
import React from 'react';
import ThemeToggle from "../utils/ThemeToggle";

export function Sidebar() {
    return (
        <Collapsible.Root className="flex flex-col lg:h-screen gap-6 border-r border-zinc-200 dark:border-zinc-900 p-4 fixed left-0 top-0 right-0 z-20 bg-white dark:bg-zinc-800 data-[state=open]:bottom-0 lg:data-[state=close]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
           <div className="flex items-center justify-between">
                <Logo />
                <div className="space-x-2">
                    <ThemeToggle />
                    <Collapsible.Trigger asChild className="lg:hidden">
                        <Button variant="ghost">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </Collapsible.Trigger>
                </div>
           </div>

           <Collapsible.Content forceMount className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex">
           <InputRoot>
            <InputPrefix>
                <Search className="h-5 w-5 text-zinc-500" />
            </InputPrefix>
            <InputControl placeholder="Search"/>
           </InputRoot>

           <nav className="space-y-0.5">
                <NavItem title="Home" icon={Home} />
                <NavItem title="Dashbord" icon={BarChart} />
                <NavItem title="Projects" icon={SquareStack} />
                <NavItem title="Task" icon={CheckSquare} />
                <NavItem title="Reporting" icon={Flag} />
                <NavItem title="Users" icon={Users} />
            </nav>

           <div className="mt-auto flex flex-col gap-6">
                <nav className="space-y-0.5">
                    <NavItem title="Suporte" icon={LifeBuoy} />
                    <NavItem title="Settings" icon={Cog} />
                </nav>
            
                <UsedSpaceWidget />

                <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

                <Profile />
           </div>
           </Collapsible.Content>
        </Collapsible.Root>
    )
}