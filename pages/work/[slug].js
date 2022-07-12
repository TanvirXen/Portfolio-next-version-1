import Head from "next/head";
import sanity from "../../lib/sanity";
import { Container ,Row,Col,Button} from 'react-bootstrap';
import imageUrlFor from "../../lib/imageUrlFor.js";
import { PortableText } from "@portabletext/react";
import { useState, useCallback, useEffect, useRef } from "react";

const blog =  '*[_type=="Work"]{...,skills[]->}';
function WorkSlug(props) {
    const skill = props.data.skills
    let tools =''
	let ver= ''
	for (let index = 0; index < skill.length; index++) {
		const element = skill[index].Title;
		ver = tools +element+ ","
		tools=ver
		
	}
return (<div>
  <Row  className="justify-content-center">
            <Col sm={10} xs={10}>
    
            <br />
<h1>{props.data.Title}</h1>
<a href={props.data.url} > <p style={{textDecoration:"underline"}}> Live Demo</p></a>
<a href={props.data.github} > <p style={{textDecoration:"underline"}}> Github Link</p></a>
<p>Skills Used -{tools}</p> 


<br />     
<PortableText value={props.data.Description1} />

            </Col>

 <Col sm={10} xs={10} style={{textAlign:"center",marginBottom:"15px",marginTop:'14px'}} >
 {props.data.images.map((e)=>{
    return(     <img src={imageUrlFor(e)} alt="" width="100%" key={e.key} />)
 })}
 <div style={{display:'flex',marginTop:'14px'}}>
{props.data.skills.map((e)=>{
    return(     <img src={imageUrlFor(e.mainImage)} alt="" style={{width:'50px',height:'50px',padding:"6px"}} key={e.Title} />)
 })}  
</div>
 </Col>
<Col sm={10} xs={10}>
<PortableText value={props.data.Description2} />
</Col>
<Col sm={10} xs={10} style={{textAlign:"center"}}>

<Button style={{width:"150px",height:"53px",marginBottom:"15px"}} variant="secondary">Back</Button>
</Col>

        </Row>
</div>)
}

export async function getStaticProps(context) {
	const id = context.params.slug;
	const karma = `*[_type=="Work" && slug.current=="${id}"]{
		...,'skills': skills[]->
	  }`;
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
