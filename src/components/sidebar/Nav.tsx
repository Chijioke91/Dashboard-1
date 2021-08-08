import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { text: 'dashboard', link: '/' },
  { text: 'expenses', link: '/expenses' },
  { text: 'wallets', link: '/wallets' },
  { text: 'summary', link: '/summary' },
  { text: 'accounts', link: '/accounts' },
  { text: 'settings', link: '/settings' },
];

const Nav = () => {
  const location = useLocation();

  return (
    <ul className="mb-48 space-y-10">
      {navLinks.map((navLink) => (
        <li
          key={navLink.text}
          className={`text-2xl font-semibold ${
            location.pathname === navLink.link ? 'opacity-100' : 'opacity-50'
          }`}
        >
          <Link to={navLink.link}>
            {navLink.text[0].toUpperCase() +
              navLink.text.slice(1).toLowerCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
