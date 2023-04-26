import styled from "styled-components";
import { motion } from "framer-motion";

interface SectionTypes {
	backgroundImage: string;
}

export const Section = styled(motion.section)<SectionTypes>`
	min-height: 100vh;
	width: 100%;
	display: flex;
	align-items: space-between;
	justify-content: space-between;
	flex-direction: column;
	padding: 3rem 4rem;
	background-color: #0000003e;

	&::before {
		content: "";
		height: 100vh;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		transition: 1s;
		background-image: url(${(props) => props.backgroundImage});
		background-position: center;
		background-size: cover;
	}

	@media (max-width: 860px) {
		padding: 1.2rem;
	}
`;
