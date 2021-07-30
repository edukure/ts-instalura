import Logo from '../../../theme/Logo';
import Text from '../../foundation/Text';
import Button from '../Button';
import { Central, LeftSide, MenuWrapper, RightSide } from './styles';

const Menu = () => {
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Perguntas frequentes',
      url: '/faq',
    },
    {
      texto: 'Sobre',
      url: '/sobre',
    },
  ];

  return (
    <MenuWrapper>
      <LeftSide>
        <Logo />
      </LeftSide>
      <Central>
        {links.map((link) => {
          return (
            <li key={link.url}>
              <Text variant="paragraph1" as="a" href={link.url}>
                {link.texto}
              </Text>
            </li>
          );
        })}
      </Central>
      <RightSide>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">Cadastrar</Button>
      </RightSide>
    </MenuWrapper>
  );
};

export default Menu;
