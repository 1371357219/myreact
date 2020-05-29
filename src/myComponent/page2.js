import React from 'react';
import ReactDOM from 'react-dom';
import './page2.css';
//左临界点
const maxleft=-2000;
//右临界点
const maxright=-400;
//初始照片位置
const indeximg=2;
class Page2 extends React.Component{
	constructor(props){
		super(props);
		this.state={
			number:indeximg,
			marginleft:-800
		}
		this.left=this.left.bind(this);
		this.right=this.right.bind(this);
	}
	left(){
		
		if (this.state.marginleft<=maxleft) {
			this.setState({
				number:1,
				marginleft:-400
				
			})
			 
		}else{
		this.setState({
				 marginleft:this.state.marginleft-400,
				 number:this.state.number+1
		})
		}
	}
	right(){
		
		if (this.state.marginleft>=maxright) {
			this.setState({
				number:5,
				marginleft:maxleft
			})
		}else{
		this.setState({
				 marginleft:this.state.marginleft+400,
				 number:this.state.number-1
		})
		}
	}
	render(){
		const imgs=['./fellsad.png','./feelFear.png','./feelhappy.png',
		'./fellangry.png','./fellNervous.png','./fellsad.png','./feelFear.png'];
		const img=[];
		let transform={};
		for(let i=0;i<imgs.length;i++){
			transform=i!=this.state.number?{transform:[`scale(0.7)`],opacity: .4}:{};
			img.push(<img key={i} src={imgs[i]} alt='不显示' style={transform}/>);
		}
		return (
			<div id='page2' className='page2'>
			<div className='page2img'>
			
			  <div className='imgouter'>
			   <div className='imglist' style={{marginLeft:this.state.marginleft}}>
			      {img}
			    </div>
			    <i className='lefticon' onClick={this.left}>&lt;</i>
			  <i className='righticon' onClick={this.right}>&gt;</i>
			   </div> 

			  </div>
			  <h2>{this.state.number}</h2>
			</div>
		)
	}
}

export default Page2;