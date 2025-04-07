import { useState } from "react";
import { appleImg, bagImg, rightImg, searchImg } from "../utils";

const NavBar = () => {
	const [navList, setNavList] = useState([
		"Store",
		"Mac",
		"iPad",
		"iPhone",
		"Watch",
		"Vision",
		"Airpods",
		"TV & Home",
		"Entertainment",
		"Accesories",
		"Support",
	]);

	return (
		<header>
			<nav className="flex justify-between w-9/12 mx-auto py-4 px-4">
				<img src={appleImg} alt="apple-img" className="cursor-pointer" />

				{navList.map((list) => (
					<p
						key={list}
						className="text-xs text-gray cursor-pointer hover:text-gray-50"
					>
						{list}
					</p>
				))}

				<img src={searchImg} alt="search-image" className="cursor-pointer" />
				<img src={bagImg} alt="bag-image" className="cursor-pointer" />
			</nav>
			<div className="w-full bg-zinc py-4">
				<div className="flex items-center justify-center gap-2">
					<p>Buy MacBook Pro with education savings</p>
					<p className="flex items-center gap-2 text-blue cursor-pointer">
						Shop{" "}
						<span>
							<img src={rightImg} alt="right-image" />
						</span>
					</p>
				</div>
			</div>
		</header>
	);
};
export default NavBar;
