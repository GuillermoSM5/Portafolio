import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
	return (
		<Wrapper>
			<Header />
			{children}
			<Footer />
		</Wrapper>
	);
};

export default Layout;

const Wrapper = styled.div`
	position: relative;
	min-height: 100vh;
`;
