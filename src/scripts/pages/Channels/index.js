import React from "react";
import withLayout from "components/HOC/withLayout";
import Nav from "components/Nav";

function Channels() {
    return (
        <main className="container">
            <Nav/>
        </main>
    )
}

export default withLayout(Channels);