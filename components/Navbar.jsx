import { Menu } from "semantic-ui-react";

function Navbar() {
  return (
    <header style={{ flex: 0 }}>
      <Menu pointing secondary>
        <Menu.Item
          onClick={() => console.log("pendiente")}
        >
          Calculadora
        </Menu.Item>
      </Menu>
    </header>
  );
}

export default Navbar;
