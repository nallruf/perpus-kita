import { Combobox, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import Dashboard from "../../components/Dashboard";
import { useUserStore } from "../../components/userStore";
import Image from "next/image";
import Middleware from "../../components/Middleware";

export default function DDashboard() {
  const { user, setUser } = useUserStore();
  return (
    <Middleware>
      <div>
        <div className="flex flex-row h-screen">
          <Dashboard />
          <div className="px-16 py-4 text-white dark:bg-gray-700 h-screen w-screen text-center">
            {/* <Image src="/join.svg" height={600} width={1200}></Image> */}
          </div>
        </div>
      </div>
    </Middleware>
  );
}
