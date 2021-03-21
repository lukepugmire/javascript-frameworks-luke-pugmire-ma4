import Layout from "../components/layout/Layout";
import Head from "../components/Head";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function Results(props) {

	console.log(props);
	return (
		<>
		<div className="container">
        <h1>Pokemon</h1>
      </div>
		<Layout>
			<Head>
				<title>Results | Create Next App</title>
			</Head>

			<div className="container">
				<div class="content-box">
				{props.pokemon.map((pokemonList) => {
					return <div className="card">
						<h2 key={pokemonList.name}>{pokemonList.name}</h2>
						<a key={pokemonList.name}>{pokemonList.url}</a>
					</div> 
				})}
			</div>
		</div>
		</Layout>
		</>
	);
}

export async function getStaticProps() {
	let pokemon = [];

	try {
		const response = await axios.get(BASE_URL);
		pokemon = response.data.results;
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			pokemon: pokemon,
		},
	};
}