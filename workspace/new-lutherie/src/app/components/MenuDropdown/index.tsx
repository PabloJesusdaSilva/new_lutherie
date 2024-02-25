import { useRef, useState } from "react";
import "./style.scss"
import Link from "next/link";

const MenuDropdown = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const chevronRef = useRef<HTMLSpanElement>(null);
  const [menuTop, setMenuTop] = useState<string>();
  const [menuRight, setMenuRight] = useState<string>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    const buttonRect = buttonRef?.current?.getBoundingClientRect();
    const chevronRect = chevronRef?.current?.getBoundingClientRect();

    if(buttonRect && chevronRect && isOpen) {
      const menuRight = buttonRect.right - chevronRect.right;
      const menuTop = chevronRect.top - buttonRect.top;
      setMenuRight(`${menuRight}px`);
      setMenuTop(`${menuTop}px`);
    } else {
      setMenuRight("0");
      setMenuTop("70px");
    }

    setIsOpen(!isOpen);
  };

  return(
    <div className={`dropdown ${isOpen ? "open" : ""} `}>
      <button 
        ref={buttonRef} 
        onClick={handleClick}
        className="buttonDropdown"
      >
        <span>Instrumentos</span>
      </button>

      <div
        className={`menu ${isOpen ? "open" : ""}`}
        style={{ right: menuRight, top: menuTop }}
      >
        <ul className="list">
          <li className="listItems">
            <Link
              href=""
              className="link"
              >
              <h2>
                Violino
              </h2>

              <span>
                Conheça nossos Violinos
              </span>
            </Link>
          </li>

          <li className="listItems">
            <Link
              href=""
              className="link"
              >
              <h2>
                Viola
              </h2>

              <span>
                Conheça nossas Violas
              </span>
            </Link>
          </li>

          <li className="listItems">
            <Link
              href=" " 
              className="link"
              >
              <h2>
                Violoncelo
              </h2>

              <span>
                Conheça nossos Violoncelos
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuDropdown;