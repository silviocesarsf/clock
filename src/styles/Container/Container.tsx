import styled from "styled-components";
import { motion } from "framer-motion";

interface ContainerTypes {
	align?: string;
	justify?: string;
	gap?: string;
	height?: string;
	width?: string;
}

export const Container = styled(motion.div)<ContainerTypes>`
	display: flex;
	align-items: ${(props) => (props.align ? props.align : "center")};
	justify-content: ${(props) =>
		props.justify ? props.justify : "center"};
	flex-direction: ${(props) => props.dir};
	gap: ${(props) => props.gap};
	height: ${(props) => props.height};
	width: ${(props) => props.width};
`;
