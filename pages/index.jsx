import Head         from "next/head";
import { useState } from "react";

import {
  Button,
  Container,
  Divider,
  Header,
  Form,
  Table,
} from "semantic-ui-react";

function accumulator(entry, pipDiff, times) {
  const values = [entry * 2];
  for (let index = 0; index < times - 2; index++) {
    values.push(entry + pipDiff);
  }
  return values;
}

export default function Home() {
  const [initialValue, setInitialValue] = useState(0.74034);
  const [pipDiff, setPipDiff] = useState(0.0023);
  const [times, setTimes] = useState(10);

  const values = accumulator(initialValue, pipDiff, times);

  const mappedValues = values.map((val, idx) => (
    <Table.Row key={val}>
      <Table.Cell>
        <Header as="h2">{idx + 1}</Header>
      </Table.Cell>
      <Table.Cell>
        <Header as="h2">{val}</Header>
      </Table.Cell>
      <Table.Cell>
        <Button icon="copy" compact size="big" color="blue" />
      </Table.Cell>
    </Table.Row>
  ));
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
            <Form>
              <Form.Group unstackable>
                <Form.Field width="ten">
                  <label>Punto de entrada</label>
                  <input placeholder="Punto de entrada" />
                </Form.Field>
                <Form.Input
                  fluid
                  width="six"
                  label="Diferencia Pip"
                  placeholder="Diferencia Pip"
                />
              </Form.Group>
              <Divider hidden />
              <Button type="submit" color="blue" fluid>
                Calcular
              </Button>
            </Form>

            <Table basic="very" celled striped unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Id</Table.HeaderCell>
                  <Table.HeaderCell>Valor</Table.HeaderCell>
                  <Table.HeaderCell>Acción</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>{mappedValues}</Table.Body>
            </Table>
          </Container>
        </main>
      </div>
    </>
  );
}
