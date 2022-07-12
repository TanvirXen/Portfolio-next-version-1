import sanity from "../../lib/sanity";
import {Row,Col} from 'react-bootstrap'
import Card from "../../lib/card";
const workss = '*[_type=="Work"]{...,skills[]->}';
function Work(props){
	const data =props.work
    return(
        <div>
			<Row >
    <h1  style={{fontSize:"32px",color:"#FFFFFF",fontWeight:"500",margin:"30px",marginLeft:"80px"}}>Work</h1>
	{data.map((e)=>{
		
		return(
			<Card name={e.Title} img={e.mainImage} key={e._id} skill={e.skills} id={e.slug.current}/>
		)
	})}
	</Row>
		</div>
    )
}

export const getStaticProps = async () => {
	const works = await sanity.fetch(workss);
	return {
		props: { work: works},
		revalidate: 100, // In seconds
	};
};
export default Work