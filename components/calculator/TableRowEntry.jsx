import { useState }                        from "react";
import { Button, Dropdown, Header, Table } from "semantic-ui-react";
import { CopyToClipboard }                 from "react-copy-to-clipboard";

function TableRowEntry({ val, idx }) {
  const [toCopy, setToCopy] = useState(1);

  return (
    <Table.Row key={val}>
      <Table.Cell>
        <Header as="h2" inverted>
          {idx + 1}
        </Header>
      </Table.Cell>
      <Table.Cell>
        <Header as="h2" inverted>
          {val}
        </Header>
      </Table.Cell>
      <Table.Cell>
        <Header as="h2" inverted>
          {val}
        </Header>
      </Table.Cell>
      <Table.Cell>
        <CopyToClipboard text={"active-40"}>
          <Button.Group color="black">
            <Button>Copiar</Button>
            <Dropdown
              className="button icon"
              floating
              trigger={<></>}
              options={[
                { key: "buy", icon: "edit", text: "Compra" },
                { key: "sell", icon: "edit", text: "Venta" },
              ]}
            />
          </Button.Group>
        </CopyToClipboard>
      </Table.Cell>
    </Table.Row>
  );
}

export default TableRowEntry;
