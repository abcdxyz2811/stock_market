import React from "react"

import {Link} from "react-router-dom";

function Nav() {
    return(<>
    


    <section id="top">
   <nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container">
    <div className="navbar-header clearfix">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>      </button>
      <div className="brand_1 clearfix"><Link className="navbar-brand" to="index.html">WORLD</Link></div>
    </div>
    <div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
		  <li><Link className="active_1" to="/">Home</Link></li>
          <li><Link className="" to="/state.html">States</Link></li>
          <li><Link className="" to="/Blog">Blog</Link></li>
          <li><Link className=""  to="/money">Detail</Link></li>
		  <li><Link className=""  to="/page">Pages</Link></li>
		  <li><Link  className="" to="/contact.html">Contact</Link></li>
		  <li className="dropdown dropdown-large">
				<Link to={() => false} className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></Link>
				
				<ul className="dropdown-menu dropdown-menu-large row">
					<li className="col-sm-3">
					 <Link className="space_none" to={() => false}><img src="img/122.jpg" alt="img " style={{width:"100%"}} /></Link>
					 <Link className="space_none" to={() => false}><img src="img/123.jpg" alt="img " style={{width:"100%"}}/></Link>					</li>
					<li className="col-sm-3">
					 <Link className="space_none" to={() => false}><img src="img/124.jpg"alt="img " style={{width:"100%"}}/></Link>
					 <Link className="space_none" to={() => false}><img src="img/125.jpg" alt="img "style={{width:"100%"}}/></Link>					</li>
					<li className="col-sm-3">
						<ul>
							<li className="dropdown-header">Input groups</li>
							<li><Link to={() => false}>Basic example</Link></li>
							<li><Link to={() => false}>Sizing</Link></li>
							<li><Link to={() => false}>Checkboxes and radio addons</Link></li>
							<li className="divider"></li>
							<li className="dropdown-header">Navs</li>
							<li><Link to={() => false}>Tabs</Link></li>
							<li><Link to={() => false}>Pills</Link></li>
							<li><Link to={() => false}>Justified</Link></li>
						</ul>
					</li>
					<li className="col-sm-3">
						<ul>
							<li className="dropdown-header">Navbar</li>
							<li><Link to={() => false}>Default navbar</Link></li>
							<li><Link to={() => false}>Buttons</Link></li>
							<li><Link to={() => false}>Text</Link></li>
							<li><Link to={() => false}>Non-nav links</Link></li>
							<li><Link to={() => false}>Component alignment</Link></li>
							<li><Link to={() => false}>Fixed to top</Link></li>
							<li><Link to={() => false}>Fixed to bottom</Link></li>
							<li><Link to={() => false}>Static top</Link></li>
							<li><Link to={() => false}>Inverted navbar</Link></li>
						</ul>
					</li>
				</ul>
			</li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
		  <li className="edit"><Link to="/money.html">New Edition +</Link></li>
		  <li><input className="form-control"  placeholder="Search"type="text"/></li>
		  
		</ul>
      </div>
    </div>
  </div>
</nav>
  </section>
  
    </>)
}



export default Nav;