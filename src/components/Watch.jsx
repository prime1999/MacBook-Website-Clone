import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { helloImg } from "../utils";

const Watch = () => {
	return (
		<motion.section
			className="my-32 w-11/12 mx-auto bg-black rounded-3xl py-8 px-8 flex flex-col items-center justify-center md:px-24 lg:justify-between lg:flex-row lg:py-2"
			initial={{ scale: 1 }}
			whileHover={{ scale: 1.02 }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
		>
			<div className="w-full flex items-center justify-center flex-col max-lg:text-center lg:w-1/2 lg:block">
				<h4 className="max-sm:text-2xl max-md:text-center font-semibold mb-4 w-full md:text-3xl">
					See the new <br className="md:hidden lg:block" /> MacBook Pro in
					action.
				</h4>
				<div className="text-blue text-md flex items-center w-5/6 max-md:flex-col max-lg:justify-center max-lg:gap-2">
					<button className="flex items-center gap-2 hover:underline lg:w-full">
						<p>Watch the announcement</p>

						<span className="border border-blue rounded-full p-1 flex items-center justify-center">
							<FaPlay className="text-[5px]" />
						</span>
					</button>
					<button className="flex items-center gap-2 hover:underline lg:w-full">
						<p>Watch in ASL</p>
						<span className="border border-blue rounded-full p-1 flex items-center justify-center">
							<FaPlay className="text-[5px]" />
						</span>
					</button>
				</div>
			</div>
			<div>
				<img src={helloImg} alt="hello text" className="w-[500px]" />
			</div>
		</motion.section>
	);
};

export default Watch;
