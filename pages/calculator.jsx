import Head                                from "next/head";
import { useState, useEffect }             from "react";
import { Container, Divider, Form, Table } from "semantic-ui-react";

import TableRowEntry                       from "../components/calculator/TableRowEntry";

function accumulator(entry, pipDiff, times) {
  const values = [entry];
  for (let index = 0; index < times - 1; index++) {
    values.push(entry - pipDiff);
  }
  return values;
}

export default function Calculator() {
  const [initialValue, setInitialValue] = useState(0.74034);
  const [pipDiff, setPipDiff] = useState(0.0023);
  const [times, setTimes] = useState(10);
  const [finalValues, setFinalValues] = useState(
    accumulator(initialValue, pipDiff, times)
  );

  useEffect(() => {
    const newValues = accumulator(initialValue, pipDiff, times);
    setFinalValues(newValues);
  }, [initialValue, pipDiff, times]);

  return (
    <>
      <Head>
        <title>Calculadora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main-layout">
        <main className="main-content">
          <Container>
            <Divider hidden />
            <Form inverted>
              <Form.Group unstackable>
                <Form.Field width="ten" inverted>
                  <label>Punto de entrada</label>
                  <input
                    value={initialValue}
                    placeholder="Punto de entrada"
                    onChange={(eve) => setInitialValue(eve.target.value)}
                  />
                </Form.Field>
                <Form.Input
                  fluid
                  width="six"
                  value={pipDiff}
                  onChange={(eve) => setPipDiff(eve.target.value)}
                  label="Diferencia Pip"
                  placeholder="Diferencia Pip"
                />
              </Form.Group>
              <Divider hidden />
            </Form>

            <Table basic="very" celled striped unstackable inverted>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Id</Table.HeaderCell>
                  <Table.HeaderCell>Compra</Table.HeaderCell>
                  <Table.HeaderCell>Venta</Table.HeaderCell>
                  <Table.HeaderCell>Acción</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {finalValues.map((val, idx) => (
                  <TableRowEntry val={val} idx={idx} />
                ))}
              </Table.Body>
            </Table>
          </Container>
        </main>
      </div>
    </>
  );
}
