import React from "react";

import Header from "../Header";
import Footer from "../Footer";

const withLayout = Wrapped => props => (
    <>
        <Header/>
        <Wrapped {...props}/>
        <Footer/>
    </>
)

export default withLayout;