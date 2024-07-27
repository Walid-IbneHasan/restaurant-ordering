"use client";
import { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Menu",
    "About",
    "Shop",
    "Contact",
    "My Settings",
    "Log Out",
  ];

  return (
    <NextUINavbar className="py-8" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="text-xl" href="/">
            ACME
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-16 " justify="center">
        <NavbarItem isActive>
          <Link aria-current="page" className="text-xl" href="/menu">
            Menu
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-xl" color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-xl" color="foreground" href="/shop">
            Shop
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-xl" color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden  lg:flex">
          <Link className="text-xl" href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="text-xl"
            color="primary"
            href="#"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
