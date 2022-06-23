import { HeaderContainer, Link } from './Header.styled';

export default function Header() {
  return (
    <HeaderContainer>
      <nav>
        <Link to="/">Початкова</Link>
        <Link to="movies">Фільми</Link>
      </nav>
    </HeaderContainer>
  );
}
