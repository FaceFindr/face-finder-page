import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css";

function NavBar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src='static-images/logo.png' className='logo' alt='logo'/>
			<nav ref={navRef}>
				<a href="/#">FaceFindr.</a>
				<a href="/#key-features">Key Features</a>
				<a href="/#context">Context</a>
				<a href="/#faq">FAQ</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default NavBar;