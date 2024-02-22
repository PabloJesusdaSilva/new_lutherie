import Image from "next/image";

import { 
  HeaderComponent, 
  Mask,
  Navbar,
  NavList,
  NavItem,
  NavDescription
} from './style';

import ImageBanner from '../../images/banner-header.jpg'

const Header = () => {
  return(
    <HeaderComponent>
      <Image 
        alt=""
        src={ImageBanner}
        width={400}
        height={200}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        quality={100}
      />

      <Mask />

      <Navbar>
        <NavList>
          <NavItem>
            <NavDescription>
              Atelier
            </NavDescription>
            <NavDescription>
              Instrumentos
            </NavDescription>
            <NavDescription>
              Acessorios
            </NavDescription>
            <NavDescription>
              Contato
            </NavDescription>
          </NavItem>
        </NavList>
      </Navbar>
    </HeaderComponent>
  );
}

export default Header;