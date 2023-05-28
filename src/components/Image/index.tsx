import React from "react";

export interface ImageProps {
	src: string;
	alt: string;
	width: string;
	height: string;
}

const Image: React.FC<ImageProps> = (props) => {
	const { src, alt, width, height } = props;
	return (
		<div
			style={{
				width,
				height,
			}}
		>
			<img {...{ src, alt }} className="w-full h-full object-contain" />
		</div>
	);
};

export default Image;
