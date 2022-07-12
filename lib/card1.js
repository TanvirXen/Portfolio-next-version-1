import { Row, Col } from "react-bootstrap";
import imageUrlFor from "./imageUrlFor.js";
import Link from "next/link";
import { Title } from "@material-ui/icons";
export default function Card({ name, img,id}) {

	return (
		<Col
			md={4}
			
			style={{
				backgroundImage: `url(${imageUrlFor(img)})`,
				height: "300px",
				backgroundSize: "cover",
				margin: "10px",
			}}
		>
		 <Link href={'/courses/'+id} passHref>
			<div className="overlay">
				<h1
					style={{
						fontSize: "24px",
						color: "#FFFFFF",
						fontWeight: "500",
						padding: "30px",
					}}
				>
				{name}
					<span>
						<img src="arrow.svg" alt="" height="33px" />
					</span>
					<br />

				</h1>
			</div>
			</Link>
		</Col>
	);
}
