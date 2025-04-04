"use client"

import Link from "next/link"
import styles from "./styles.module.css"
import { NavbarMenu } from "@/data/NavbarMenu"
import { Button } from "../Buttom"
import { MdClose, MdMenu, MdWhatsapp } from "react-icons/md"
import { useState } from "react"
import { ButtonFlutuante } from "../Buttom/ButtonFlutuante"
import logo from "@/assets/logo-com-nome.png"
import logoTransparent from "@/assets/logo-transparente.png"
import Image from "next/image"

export function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <header className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Image src={logoTransparent} alt="Logo" />
        </Link>

        <nav>
          <ul>
            {NavbarMenu.map((nav) => (
              <li key={nav.id}><Link href={nav.link}>{nav.title}</Link></li>
            ))}
          </ul>
        </nav>

        <Button link="#contato" className={`btn btn-optional ${styles.btnHeader}`}>
          Agende sua consulta
        </Button>

        <MdMenu size={24} className={styles.menuButton} onClick={() => setOpenMenu(!openMenu)} />
      </header>

      {
        openMenu && (
          <div className={styles.menuMobile}>
            <div className={styles.menuMobileHeader}>
              <Link href="/" className={styles.logo}>
                <Image src={logoTransparent} alt="Logo" />
              </Link>
              <MdClose size={24} onClick={() => setOpenMenu(!openMenu)} className={styles.menuButton} />
            </div>
            <ul className={styles.list}>
              {NavbarMenu.map((nav) => (
                <li key={nav.id}><Link href={nav.link} onClick={() => setOpenMenu(!openMenu)}>{nav.title}</Link></li>
              ))}
            </ul>

            <ButtonFlutuante className={`btn btn-secondary ${styles.btnWhats}`}>Agende sua consulta</ButtonFlutuante>
          </div>
        )
      }
    </>
  )
}