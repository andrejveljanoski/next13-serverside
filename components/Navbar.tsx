import Image from "next/image";
import Logo from "./images/swiss.jpg";
import Link from "next/link";
import { getAllCities } from "../app/api/cities";

export const Navbar = async () => {
  const cities = await getAllCities();

  return (
    <nav>
      <Link href="/">
        <Image
          src={Logo}
          alt="swiss flag "
          width={70}
          quality={100}
          placeholder="blur"
        />
      </Link>
      <li className="dropdown">
        <a>Menu</a>
        <div className="dropdown-content">
          {cities.map((c) => (
            <Link href={`/cities/${c.name}`} key={c.name}>
              {c.name}
            </Link>
          ))}
        </div>
      </li>
    </nav>
  );
};
