import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Container style={{ marginTop: "35px" }}>
				<Row>
					<Col md={3}>
						<img src="dp.svg" alt="" />
					</Col>
					<Col md={1}></Col>
					<Col md={6}>
						<br />
						<br />
						<br />
						<br />
						<h1
							style={{ fontSize: "20px", color: "#FFFFFF", fontWeight: "300" }}
						>
							{" "}
							<span style={{ opacity: "0.6" }}>Hey there, I am </span>{" "}
							<span
								style={{
									fontSize: "23px",
									color: "#FFFFFF",
									fontWeight: "400",
								}}
							>
								Tanvir Ishtiaq
							</span>
						</h1>
						<h1
							style={{ fontSize: "26px", color: "#FFFFFF", fontWeight: "500" }}
						>
							Web Developer from <br />
							Dhaka,Bangladesh
						</h1>
						<h2
							style={{
								fontSize: "20px",
								color: "#FFFFFF",
								fontWeight: "200",
								opacity: "0.6",
							}}
						>
							I am a High School student <br />
							and a programmer currently doing freelance works <br />
							and trying to get in a good college.
						</h2>
						<h1
							style={{
								fontSize: "22px",
								color: "#FFFFFF",
								fontWeight: "200",
								opacity: "1",
							}}
						>
							What can a “Web Developer” do ?
						</h1>
						<p
							style={{
								fontSize: "16px",
								color: "#FFFFFF",
								fontWeight: "200",
								opacity: "0.6",
							}}
						>
							I can conjur a website from nothing into existence, fully formed.
							I do not use tricks, nor is this magic. I specialize in
							manipulating the very fabric of the web, its raw materials of
							HTML, CSS, JavaScript, and SVG.
							<br />
							<br />
							Open-source technologies empower this process. I am a React App
							Developer and I am constantly learning by doing freelance
							works,projects and some very helpful internships. I want to
							contribute tp the open-source world some day I intend to give back
							every chance I get.
							<br />
							<br />I convert designs into live websites. In 2021 I completed
							High School from Rajuk Uttara Model College and currently trying
							to get a Computer Science degree.I can plan, design, build,
							launch, and maintain a website myself—did I mention that I build
							mobile apps too? I have worked in building some apps with Java and
							React-Native and I am still constantly learning to develop myself.
						</p>
						<div className="menu">
							<li>
								<Link
									href="/work"
									activeStyle={{
										opacity: "0.7",
										fontWeight: "200",
										pointerEvents: "none",
									}}
								>
									<ul>Works</ul>
								</Link>
								<Link
									href="/skill"
									activeStyle={{
										opacity: "0.7",
										fontWeight: "200",
										pointerEvents: "none",
									}}
								>
									<ul>Skills</ul>
								</Link>
								<Link
									href="/education"
									activeStyle={{
										opacity: "0.7",
										fontWeight: "200",
										pointerEvents: "none",
									}}
								>
									<ul>Education</ul>
								</Link>
								<Link
									href="/courses"
									activeStyle={{
										opacity: "0.7",
										fontWeight: "200",
										pointerEvents: "none",
									}}
								>
									<ul>Courses</ul>
								</Link>
								<Link
									href="/TanvirIshtiaq.pdf"
									target="_blank"
									activeStyle={{
										opacity: "0.7",
										fontWeight: "200",
										pointerEvents: "none",
									}}
								>
									<ul>Resume</ul>
								</Link>
							</li>
						</div>
					</Col>
				</Row>
			</Container>
			<div
				style={{
					backgroundColor: "#0D0D0D",
					height: "auto",
					marginTop: "25px",
					marginBottom: "30px",
					minHeight: "500px",
				}}
			>
				<Container>
					<Component {...pageProps} />
				</Container>
			</div>

			<footer style={{ textAlign: "center" }}>
				<a href="https://www.facebook.com/TanvirIshtiaq12">
					<img src="fb.svg" alt="" className="footerIcon" />
				</a>
				<a href="https://www.instagram.com/tanvir_ishtiaq/">
					<img src="insta.svg" alt="" className="footerIcon" />
				</a>
				<a href="https://www.linkedin.com/in/tanvir-ishtiaq">
					<img src="linkedin.svg" alt="" className="footerIcon" />
				</a>
				<a href="mailto:tanvirishtiaq5@gmail.com">
					<img src="email.svg" alt="" className="footerIcon" />
				</a>

				<p
					style={{
						fontSize: "16px",
						color: "#FFFFFF",
						fontWeight: "300",
						opacity: "0.6",
						marginTop: "10px",
					}}
				>
					© Copyright 2021 Tanvir Ishtiaq
				</p>
			</footer>
		</div>
	);
}

export default MyApp;
