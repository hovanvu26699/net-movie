import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const menuItems = [
  {
    title: "TRANG CHỦ",
    cName: "menu-item home selected",
    path: "/"
  },
  {
    title: "THỂ LOẠI",
    path: "/",
    id: "type",
    cName: "menu-item type",
    Icon: (
      <ArrowDropDownIcon data-testid="ArrowDropDownIcon"></ArrowDropDownIcon>
    ),
    subMenu: [
      { title: "Hành Động", path: "/", cName: "dropdown-link" },
      { title: "Chiến Tranh", path: "/", cName: "dropdown-link" },
      { title: "Hài Hước", path: "/", cName: "dropdown-link" },
      { title: "Võ Thuật", path: "/", cName: "dropdown-link" },
      { title: "Viễn Tưởng", path: "/", cName: "dropdown-link" },
      { title: "Cổ Trang", path: "/", cName: "dropdown-link" },
      { title: "Kinh Dị", path: "/", cName: "dropdown-link" },
      { title: "Hoạt Hình", path: "/", cName: "dropdown-link" },
      { title: "Phiêu Lưu", path: "/", cName: "dropdown-link" },
      { title: "Tình Cảm", path: "/", cName: "dropdown-link" },
      { title: "Tâm Lý", path: "/", cName: "dropdown-link" },
      { title: "TV Shows", path: "/", cName: "dropdown-link" },
    ],
  },
  {
    title: "QUỐC GIA",
    path: '/',
    cName: "menu-item country",
    Icon: (
      <ArrowDropDownIcon data-testid="ArrowDropDownIcon"></ArrowDropDownIcon>
    ),
    subMenu: [
      { title: "Việt Nam", path: "/", cName: "dropdown-link" },
      { title: "Nhật Bản", path: "/", cName: "dropdown-link" },
      { title: "Đài Loan", path: "/", cName: "dropdown-link" },
      { title: "Thái Lan", path: "/", cName: "dropdown-link" },
      { title: "Ấn Độ", path: "/", cName: "dropdown-link" },
      { title: "Trung Quốc", path: "/", cName: "dropdown-link" },
      { title: "Hồng Kông", path: "/", cName: "dropdown-link" },
      { title: "Âu-Mỹ", path: "/", cName: "dropdown-link" },
      { title: "Hàn Quốc", path: "/", cName: "dropdown-link" },
    ],
  },
  {
    title: "PHIM MỚI ",
    path: '/movie',
    cName: "menu-item new",
  },
  {
    title: "PHIM BỘ ",
    path: '/movie',
    cName: "menu-item series",
  },
  {
    title: "PHIM LẺ ",
    path: '/movie',
    cName: "menu-item single",
  },
  {
    title: "PHIM SẮP CHIẾU ",
    cName: "menu-item upcoming",
    path: '/movie',

  },
  {
    title: "TV Shows ",
    cName: "menu-item tvShow",
    path: '/tv',

  },
];
const Navbar = () => {
  const [dropdownType, setDropdownType] = useState(false);
  const [dropdownCountry, setDropdownCountry] = useState(false);

  const onMouseEnterType = () => {
    setDropdownType(true);
  };
  const onMouseLeaveType = () => {
    setDropdownType(false);
  };
  const onMouseEnterCountry = () => {
    setDropdownCountry(true);
  };
  const onMouseLeaveCountry = () => {
    setDropdownCountry(false);
  };
  return (
    <div className="navbar-container">
      <ul className="navbar-main-menu">
        {menuItems.map((item, index) => {
          if (item.Icon !== undefined) {
            return (
              <li
                key={index}
                className={item.cName}
                onMouseEnter={
                  item.id === "type" ? onMouseEnterType : onMouseEnterCountry
                }
                onMouseLeave={
                  item.id === "type" ? onMouseLeaveType : onMouseLeaveCountry
                }
              >
                <NavLink to={item.path} >
                  {item.title}
                  {item.Icon}
                </NavLink>
                {(item.id === "type" ? dropdownType : dropdownCountry) && (
                  <Dropdown menuDropdown={item.subMenu} />
                )}
              </li>
            );
          } else {
            return (
              <li className={item.cName} key={index}>
                <NavLink to={item.path} >
                  {item.title}
                  {item.Icon}
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Navbar;
