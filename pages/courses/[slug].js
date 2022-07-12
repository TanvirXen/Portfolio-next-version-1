import Head from "next/head";
import sanity from "../../lib/sanity";
import { Container ,Row,Col,Button} from 'react-bootstrap';
import imageUrlFor from "../../lib/imageUrlFor.js";
import { PortableText } from "@portabletext/react";
import { useState, useCallback, useEffect, useRef } from "react";

const blog =  '*[_type=="Courses"]';
function WorkSlug(props) {

return (<div>
  <Row  className="justify-content-center">
            <Col sm={10} xs={10}>
    
            <br />
<h1>{props.data.Title}</h1>
<a href={props.data.url} > <p style={{textDecoration:"underline"}}> Certificate Url</p></a>


<br />     
<PortableText value={props.data.Description} />

            </Col>

 <Col sm={10} xs={10} style={{textAlign:"center",marginBottom:"15px",marginTop:'14px'}} >
 {props.data.images.map((e)=>{
    return(     <img src={imageUrlFor(e)} alt="" width="100%" key={e.key} />)
 })}
 </Col>
<Col sm={10} xs={10}>

</Col>
<Col sm={10} xs={10} style={{textAlign:"center"}}>

<Button style={{width:"150px",height:"53px",marginBottom:"15px"}} variant="secondary">Back</Button>
</Col>

        </Row>
</div>)
}

export async function getStaticProps(context) {
	const id = context.params.slug;
	const karma = `*[_type=="Courses" && slug.current=="${id}"]`;
	const blogs = await sanity.fetch(karma);
	return {
		props: { data: blogs[0] },
		revalidate: 100, // In seconds
	};
}
export async function getStaticPaths() {
	const blogs = await sanity.fetch(blog);
	const paths = blogs.map((post) => ({ params: { slug: post.slug.current } }));

	return { paths, fallback: "blocking" };
}

export default WorkSlug;
