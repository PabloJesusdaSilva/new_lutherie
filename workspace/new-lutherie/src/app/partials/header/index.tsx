"use client";

import Image from "next/image";
import Link from "next/link";

import MenuDropdown from "../../components/MenuDropdown";
import ImageBanner from '@/app/images/banner-header.jpg'
import Logo from '@/app/images/roger-luthier.png'

import './style.scss';

const Header = () => {
  return(
    <header className="header">
      <Image 
        alt="Is this banner image"
        src={ImageBanner}
        width={400}
        height={200}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        quality={100}
      />

      <div className="mask" />

      <nav className="navbar">
        <Image 
          alt="Is this logo image"
          src={Logo}
          style={{ width: '220px', height: '220px', marginTop: '-34px' }}
        />

        <ul className="navList">
          <li className="navItem">
            <Link href="/">
              <span className="navDescription">
                Atelier
              </span>
            </Link>
          </li>

          <li className="navItem">
            <MenuDropdown />
          </li>

          <li className="navItem">
            <Link href="">
              <span className="navDescription">
                Acessorios
              </span>
            </Link>
          </li>
          
          <li className="navItem">
            <Link href="">
              <span className="navDescription">
                Trabalhos
              </span>
            </Link>
          </li>

          <li className="navItem">
            <Link href="">
              <span className="navDescription">
                Contato
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      <h1 className="titleHeader">
        Lutheria 
      </h1>
    </header>
  );
}

export default Header;