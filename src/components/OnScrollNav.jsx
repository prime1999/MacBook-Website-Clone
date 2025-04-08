import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const OnScrollNav = () => {
	const [showDropDown, setShowDropDown] = useState(false);

	const dropdownItems = [
		"Overview",
		"Tech Specs",
		"Compare",
		"Switch from PC to Mac",
	];

	const containerVariants = {
		open: {
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
		closed: {
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
				staggerDirection: -1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: -10 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeInOut" },
		},
		exit: {
			opacity: 0,
			y: -10,
			transition: { duration: 0.5, ease: "easeInOut" },
		},
	};
	return (
		<>
			<nav className="w-9/12 h-full mx-auto px-4 py-2 flex items-center justify-between max-lg:hidden">
				<h1 className="text-xl font-semibold">MacBook Pro</h1>{" "}
				<div>
					<ul className="flex items-center gap-8 text-slate-200 text-xs">
						<li className="cursor-pointer hover:text-white">Overview</li>
						<li className="cursor-pointer hover:text-white">Tech Specs</li>
						<li className="cursor-pointer hover:text-white">Compare</li>
						<li className="cursor-pointer hover:text-white">
							Switch from PC to Mac
						</li>
						<li>
							<button className="bg-blue rounded-3xl px-4 py-1 font-semibold">
								Buy
							</button>
						</li>
					</ul>
				</div>
			</nav>
			<nav className="w-11/12 h-full mx-auto px-4 py-2 lg:hidden">
				<div className="flex items-center justify-between">
					<h1 className="text-xl font-semibold">MacBook Pro</h1>{" "}
					<div className="flex items-center gap-2">
						<button onClick={() => setShowDropDown(!showDropDown)}>
							{showDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
						</button>
						<button className="bg-blue rounded-3xl px-4 py-1 font-semibold">
							Buy
						</button>
					</div>
				</div>
				<div>
					<AnimatePresence>
						{showDropDown && (
							<motion.ul
								variants={containerVariants}
								initial="hidden"
								animate="open"
								exit="closed"
								className="space-y-2 mb-4"
							>
								{dropdownItems.map((item, index) => (
									<motion.li
										key={index}
										variants={itemVariants}
										initial="hidden"
										animate="show"
										exit="exit"
										className="lex flex-col justify-center gap-2 mt-4 text-slate-200 text-xs cursor-pointer hover:text-white"
									>
										{item}
									</motion.li>
								))}
							</motion.ul>
						)}
					</AnimatePresence>
				</div>
			</nav>
		</>
	);
};

export default OnScrollNav;
