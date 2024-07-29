"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
    const path = usePathname()
  return (
    <nav className="sm:w-2/3 w-full my-5">
      <ul className="flex text-[#7b7b7f] sm:overflow-x-auto overflow-x-scroll">
        <Link className={`text-xs mr-3 ${path == '/dashboard/settings' ? 'bg-[#7b7b7f43] font-bold text-white' : ''} h-fit py-1 px-2 rounded`} href='/dashboard/settings'>General</Link>
        <Link className={`text-xs mr-3 ${path == '/dashboard/settings/security' ? 'bg-[#7b7b7f43] font-bold text-white' : ''} h-fit py-1 px-2 rounded`} href='/dashboard/settings/security'>Security</Link>
        <Link className={`text-xs mr-3 ${path == '/dashboard/settings/billing' ? 'bg-[#7b7b7f43] font-bold text-white' : ''}h-fit py-1 px-2 rounded`} href=''>Billing</Link>
        <Link className={`text-xs mr-3 ${path == '/dashboard/settings/notifications' ? 'bg-[#7b7b7f43] font-bold text-white' : ''}h-fit py-1 px-2 rounded`}  href=''>Notifications</Link>
        <Link className={`text-xs mr-3 ${path == '/dashboard/settings/apps' ? 'bg-[#7b7b7f43] font-bold text-white' : ''}h-fit py-1 px-2 rounded`}  href=''>Apps</Link>
        <Link className={`text-xs mr-3 ${path == '/dashboard/settings/branding' ? 'bg-[#7b7b7f43] font-bold text-white' : ''}h-fit py-1 px-2 rounded`}  href=''>Branding</Link>
        <Link className={`text-xs mr-3 ${path == '/dashboard/settings/referral' ? 'bg-[#7b7b7f43] font-bold text-white' : ''}h-fit min-w-fit py-1 px-2 rounded`}  href=''>Refer a friend</Link>
        <Link className={`text-xs mr-3 ${path == '/dashboard/settings/share' ? 'bg-[#7b7b7f43] font-bold text-white' : ''}h-fit py-1 px-2 rounded`}  href=''>Sharing</Link>
      </ul>
    </nav>
  );
}
