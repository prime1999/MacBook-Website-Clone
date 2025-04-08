import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, intelligenceImg, smallHeroImg } from "../utils";
import OnScrollNav from "./OnScrollNav";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const videoRef = useRef();
	const navbarRef = useRef(null);

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
		gsap.fromTo(
			navbarRef.current,
			{ y: -100, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				ease: "power3.out",
				scrollTrigger: {
					trigger: ".trigger-section", // element to scroll to
					start: "top 10%", // when top of trigger hits center of viewport
					toggleActions: "play none none reverse",
				},
			}
		);
	}, []);

	return (
		<section className="w-full relative bg-black">
			<div
				ref={navbarRef}
				className="fixed top-0 left-0 right-0 bg-gray-300 backdrop-blur-[5px] shadow-lg z-[999] border-b border-gray -translate-y-[100%]"
				// style={{
				// 	position: "fixed",
				// 	top: 0,
				// 	left: 0,
				// 	right: 0,
				// 	backgroundColor: "#111",
				// 	color: "#fff",
				// 	padding: "1rem 2rem",
				// 	zIndex: 999,
				// 	transform: "translateY(-100%)",
				// }}
			>
				<OnScrollNav />
			</div>
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
				<div className="flex flex-col items-center  justify-center gap-2 mt-24 opacity-0 buy trigger-section">
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
