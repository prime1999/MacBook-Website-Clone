import React, { useEffect, useRef } from "react";
import { heroVideo, intelligenceImg, smallHeroImg } from "../utils";

const Hero = () => {
	const videoRef = useRef();
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.5; // Slows to half speed
		}
	}, []);
	return (
		<section className="w-full relative h-[calc(100vh-60px)]">
			<div className="w-full h-5/6 flex flex-col justify-center items-center text-white mt-16">
				<div className="flex flex-col justify-center items-center z-10">
					<h1 className="text-3xl font-semibold">MacBook Pro</h1>

					<img src={intelligenceImg} alt="" className="w-[700px]" />
				</div>
				<div className="hidden w-10/12 h-[200px] -mt-12 overflow-hidden md:block">
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
				<div className="flex flex-col items-center  justify-center gap-2 mt-12">
					<button className="rounded-full bg-blue py-2 px-6 text-lg">
						Buy
					</button>
					<p>From $1599 or $133.35/mo. for 12mo.</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
