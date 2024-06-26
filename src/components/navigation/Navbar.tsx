import {
  Link,
  Navbar as NavbarComponent,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetUserBookings from "../../hooks/useGetUserBookings";

const Navbar = () => {
  const { data: bookings } = useGetUserBookings();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuItems = ["My Bookings"];

  return (
    <NavbarComponent
      classNames={{
        base: "bg-gradient-to-tr from-primary to-secondary",
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link
            data-testid="home-link"
            className="text-white cursor-pointer"
            onPress={() => navigate("/")}
          >
            Hostfully
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Link
            data-testid="my-bookings-link"
            className="text-white cursor-pointer hidden md:flex"
            onPress={() => navigate("/bookings")}
          >
            My Bookings {bookings ? `(${bookings.length})` : ""}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href="/bookings"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarComponent>
  );
};

export default memo(Navbar);
