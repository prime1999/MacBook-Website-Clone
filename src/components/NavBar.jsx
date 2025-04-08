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
		<header className="z-10 relative">
			<nav className="max-lg:w-11/12 mx-lg:px-2 flex items-center justify-between w-9/12 mx-auto py-4 px-4">
				<img src={appleImg} alt="apple-img" className="cursor-pointer" />

				{navList.map((list) => (
					<p
						key={list}
						className="max-sm:hidden text-xs text-gray cursor-pointer hover:text-gray-50"
					>
						{list}
					</p>
				))}

				<img
					src={searchImg}
					alt="search-image"
					className="max-md:hidden cursor-pointer"
				/>
				<img
					src={bagImg}
					alt="bag-image"
					className="max-md:hidden cursor-pointer"
				/>

				<div className="flex items-center gap-4 md:hidden">
					<img src={searchImg} alt="search-image" className="cursor-pointer" />
					<img src={bagImg} alt="bag-image" className="cursor-pointer" />
				</div>
			</nav>
			<div className="w-full bg-zinc py-4 px-4">
				<div className="flex items-center justify-center gap-2">
					<p>Buy MacBook Pro with education savings</p>
					<p className="flex items-center gap-2 text-blue cursor-pointer">
						Shop
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
