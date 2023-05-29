import React from "react";
import Image from "../Image";

export interface IntroductionCardProps {
	children: React.ReactNode;
	vectorSrc: string;
	vectorAlt: string;
	height: string;
}

const IntroductionCard: React.FC<IntroductionCardProps> = (props) => {
	const { children, vectorSrc, vectorAlt, height } = props;

	return (
		<div
			className="flex flex-row items-center even:flex-row-reverse bg-[#F0F0F0] text-[#2f3a5b] rounded-lg gap-x-4 py-8 px-4"
			style={{
				height,
			}}
		>
			<div className="h-full w-3/5">{children}</div>
			<div className="h-full w-2/5">
				<Image src={vectorSrc} alt={vectorAlt} width="100%" height="100%" />
			</div>
		</div>
	);
};

export default IntroductionCard;
