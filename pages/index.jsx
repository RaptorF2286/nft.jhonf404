import React    from "react";
import Head     from "next/head";
import Link     from "next/link";
import { Card } from "semantic-ui-react";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head></Head>

      <div className="main-layout">
        <main className="main-content flex-center flex-middle">
          <Link href="/calculator">
            <Card
              header="Calculadora Pip"
              meta="Herramientas"
              description="Calculadora de venta y compra de pip"
            />
          </Link>
        </main>
      </div>
    </>
  );
}
