import { useSelector } from 'react-redux';

export default function Header() {
  const backgroundColor = useSelector(
    (state: { background: { color: string } }) => state.background.color
  );
  return <div style={{ backgroundColor }}>Header</div>;
}
