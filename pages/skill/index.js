import { Row, Col, ProgressBar } from "react-bootstrap";
import sanity from "../../lib/sanity";
const skillss = '*[_type=="Skill"]';

function Skill(props) {

	return (
		<Row style={{ justifyContent: "center" }}>
			<h1
				style={{
					fontSize: "32px",
					color: "#FFFFFF",
					fontWeight: "500",
					marginLeft: "50px",
					marginTop: "30px",
				}}
			>
				Skills
			</h1>
			{props.skill.map((e) => {
				let styled = {
					backgroundColor: "black",
					width: e.Percentege + "%",
					height: "16px",
					borderRadius: "70px",
				};
				return (
					<Col sm={10} xs={10} style={{ margin: "30px" }} key={e.Title}>
						<h4
							style={{ fontSize: "23px", color: "#FFFFFF", fontWeight: "300" }}
						>
							{e.Title}
						</h4>
						<div
							className="rnge"
							style={{
								backgroundColor: "#373737",
								width: "100%",
								height: "20px",
								borderRadius: "55px",
							}}
						>
							<div style={styled}></div>
						</div>
					</Col>
				);
			})}
		</Row>
	);
}

export const getStaticProps = async () => {
	const skills = await sanity.fetch(skillss);
	return {
		props: { skill: skills },
		revalidate: 100, // In seconds
	};
};
export default Skill;
