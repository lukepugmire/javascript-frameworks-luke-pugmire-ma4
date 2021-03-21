import Layout from "../components/layout/Layout";
import Head from "../components/Head";

export default function About() {
	return (
		<>
		<div className="container">
        <h1>About us</h1>
      </div>
		<Layout>
			<Head>
				<title>About | Create Next App</title>
			</Head>

			<div className="container">
				<div className="content-box">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae tristique arcu. In eget consectetur ligula. Nam dapibus iaculis semper. Nunc leo purus, volutpat et mattis at, pulvinar ac tellus. Vestibulum justo sapien, malesuada at tristique vitae, posuere dignissim enim. Duis dignissim, mi semper malesuada viverra, magna nibh lobortis massa, quis porttitor nisl lorem ac augue. Nunc pulvinar, nulla vulputate egestas fringilla, mauris tellus commodo leo, eget hendrerit mi dui vitae massa. In blandit euismod nisl, sit amet porta orci blandit at. Sed metus massa, vehicula quis faucibus a, interdum vitae augue.</p>
					<p>Suspendisse felis orci, hendrerit sed faucibus a, vestibulum vel felis. Duis at lacus sapien. Praesent eu lacus vulputate purus pellentesque accumsan sed sit amet risus. Nunc vitae dignissim lectus. Nulla ligula felis, varius vel mi in, finibus faucibus augue. Curabitur egestas consectetur leo, non consectetur tellus pharetra vitae. Praesent ornare leo vitae massa molestie, sed semper risus sodales. Integer eleifend eros vitae iaculis ornare. Fusce at ipsum ut turpis placerat cursus eget ac purus. Fusce sodales, purus ut viverra tempor, enim elit eleifend justo, ut tincidunt purus eros eu augue. Phasellus interdum quam vitae nisl molestie, quis egestas nisl vulputate.</p>
					<p>Phasellus sed elit diam. Donec eget risus et ante lacinia lacinia. Vivamus vestibulum metus posuere eros ultrices, nec cursus tortor sagittis. Sed lacinia elit eu condimentum dapibus. Aliquam vitae ante id neque egestas mattis. Pellentesque tempus eleifend condimentum. Sed lobortis urna eget interdum semper. Mauris dapibus orci faucibus ipsum aliquet, sit amet euismod quam pretium. Nullam vitae magna in tortor auctor tristique. Maecenas sollicitudin eleifend erat, vitae vehicula magna ultrices nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum interdum viverra elit, quis volutpat turpis finibus et.</p>
				</div>
		</div>
		</Layout>
		</>
	);
}