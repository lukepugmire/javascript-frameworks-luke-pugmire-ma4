import Layout from "../components/layout/Layout";
import Head from "../components/Head";
import Link from "next/link";

export default function Home() {
	return (
    <>
      <div className="container">
        <h1>Home</h1>
      </div>
    <Layout>
      
      <Head title="Home"> 
			</Head>
      <div className="container">
        <div className="content-box">
          <Link href="/results">
            <a className="home-link">Whose That Pokemon?</a>
          </Link>
        </div>
      </div>
    </Layout>
    </>
    

	);
}
