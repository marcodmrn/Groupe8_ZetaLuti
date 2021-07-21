import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Electricity from "../assets/svg/Electricity";
import Temperature from "../assets/svg/Temperature";
import Urgency from "../assets/svg/Urgency";
import People from "../assets/svg/People";
import Locking from "../assets/svg/Locking";
import Humidity from "../assets/svg/Humidity";

const itemsOfMenu = [
    {
      path: "/",
      Icon: Humidity,
      text: "Humidité",
    },
    {
      path: "/temperature",
      Icon: Temperature,
      text: "Température",
    },
    {
      path: "/people",
      Icon: People,
      text: "Présence",
    },
    {
      path: "/electricity",
      Icon: Electricity,
      text: "Eléctricité",
    },
    {
      path: "/locking",
      Icon: Locking,
      text: "Vérrouillage",
    },
    {
      path: "/urgency",
      Icon: Urgency,
      text: "Urgence",
    },
  ];

const Menu = () => {
    const location = useLocation();

    const renderItems = itemsOfMenu.map(({ path, Icon, text }) => (
        <Link>
            <li className={location.pathname === path && 'isActive'}>
                <Icon />
                <p>{text}</p>
            </li>
        </Link>
    ))

    return (
        <header>
            <ul className="header__nav">{renderItems}</ul>
        </header>
    )
}

export default Menu
