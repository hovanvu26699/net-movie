import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const menuItems = [
  {
    title: "TRANG CHỦ",
    cName: "menu-item home",
  },
  {
    title: "THỂ LOẠI",
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
    id: "country",
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
    cName: "menu-item new",
  },
  {
    title: "PHIM BỘ ",
    cName: "menu-item series",
  },
  {
    title: "PHIM LẺ ",
    cName: "menu-item single",
  },
  {
    title: "PHIM CHIẾU RẠP ",
    cName: "menu-item cinema",
  },
  {
    title: "PHIM SẮP CHIẾU ",
    cName: "menu-item upcoming",
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
                <Link to="/">
                  {item.title}
                  {item.Icon}
                </Link>
                {(item.id === "type" ? dropdownType : dropdownCountry) && (
                  <Dropdown menuDropdown={item.subMenu} />
                )}
              </li>
            );
          } else {
            return (
              <li className={item.cName} key={index}>
                <Link to="/">
                  {item.title}
                  {item.Icon}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Navbar;
