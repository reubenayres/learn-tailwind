import { useRouter } from "next/router";

interface NavItem {
  text: string;
  path: string;
  onClick?: () => any;
}
interface NavItemProps {
  item: NavItem;
}
function NavItem({ item: { text, path, onClick } }: NavItemProps) {
  const router = useRouter();
  return (
    <div
      className="flex-grow"
      onClick={() => {
        onClick && onClick();
        router.push(path);
      }}
    >
      {text}
    </div>
  );
}

interface NavProps {
  routes: NavItem[];
}
export default function Nav({ routes }: NavProps) {
  return (
    <nav className="flex">
      {routes.map((r, i) => (
        <NavItem item={r} key={i} />
      ))}
    </nav>
  );
}
