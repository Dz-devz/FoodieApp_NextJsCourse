import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import HeaderBackgroud from "./header-background";
import classes from "./header.module.css";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <>
      <HeaderBackgroud />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logo} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
