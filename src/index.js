import React from 'react';  //创建组件、虚拟DOM元素、生命周期
import ReactDOM from 'react-dom'; //把创建好的组件和虚拟DOM放到页面上展示的
import './index.css';
import Page1 from './myComponent/page1.js';
import Page2 from './myComponent/page2.js';
class Head extends React.Component{
	render(){
		return(
			<nav className="nav">
			     <ul>
			        <li><a href='#page1'>one</a></li>
			        <li><a href='#page2'>two</a></li>
			        <li><a href='#'>three</a></li>
			     </ul>
			</nav>
		)
	}
}

class Mycomponent extends React.Component{
	
	render(){
		return (           
		    <div>
		    <Head/>
			 <Page1/>
			 <Page2/>
			</div>
		)
	}
}

ReactDOM.render(
    <Mycomponent />,
  document.getElementById('root')
);


