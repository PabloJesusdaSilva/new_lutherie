import Image from "next/image";

import { 
  HeaderComponent, 
  Mask,
  Navbar,
  NavList,
  NavItem,
  NavDescription,
  TitleHeader,
} from './style';

import ImageBanner from '@/app/images/banner-header.jpg'
import Logo from '@/app/images/roger-luthier.png'

const Header = () => {
  return(
    <HeaderComponent>
      <Image 
        alt="Is this banner image"
        src={ImageBanner}
        width={400}
        height={200}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        quality={100}
      />

      <Mask />

      <Navbar>
        <Image 
          alt="Is this logo image"
          src={Logo}
          style={{ width: '220px', height: '220px', marginTop: '-34px' }}
        />

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

      <TitleHeader>
        Lutheria 
      </TitleHeader>
    </HeaderComponent>
  );
}

export default Header;