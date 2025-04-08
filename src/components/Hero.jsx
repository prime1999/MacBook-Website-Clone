import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, intelligenceImg, smallHeroImg } from "../utils";

const Hero = () => {
	const videoRef = useRef();

	// for the hero video speed
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.5; // Slows to half speed
		}
	}, []);

	useGSAP(() => {
		gsap.to(".buy", {
			opacity: 1,
			delay: 1,
			duration: 1,
			stagger: 1,
		});

		gsap.to(".intelligence", {
			opacity: 1,
			duration: 1,
			delay: 0.5,
		});
	}, []);
	return (
		<section className="w-full relative bg-black">
			<div className="relative w-full h-full py-32 flex flex-col justify-center items-center text-white">
				<div className="flex flex-col justify-center items-center z-10 opacity-0 intelligence">
					<h1 className="text-3xl font-semibold">MacBook Pro</h1>

					<img
						src={intelligenceImg}
						alt="intelligence text"
						className="w-[700px]"
					/>
				</div>
				<div className="hidden w-10/12 h-[200px] overflow-hidden md:block">
					<video
						ref={videoRef}
						autoPlay
						playsInline={true}
						muted
						key={heroVideo}
						className="w-full h-full object-cover z-0 pointer-events-none"
					>
						<source src={heroVideo} type="video/mp4" />
					</video>
				</div>
				<div className="md:hidden">
					<img src={smallHeroImg} alt="" />
				</div>
				<div className="flex flex-col items-center  justify-center gap-2 mt-24 opacity-0 buy">
					<button className="rounded-full bg-blue py-2 px-6 text-lg">
						Buy
					</button>
					<p className="text-gray font-semibold text-xl mt-4">
						From $1599 or $133.35/mo. for 12mo.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
