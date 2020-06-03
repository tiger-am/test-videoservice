import React, {useContext} from 'react'
import {ServiceContext} from "../ServiceContext";

const withService = () => {
    return Wrapped => {
        return (props) => {
            const service = useContext(ServiceContext);

            return (
                <Wrapped
                    {...props}
                    service={service}
                />
            )
        }
    };
}

export default withService;
