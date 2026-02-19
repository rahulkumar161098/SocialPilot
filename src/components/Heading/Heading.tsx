import React from "react";


interface HeadingProps {
    heading: string;
}

const Heading= (props: HeadingProps)=> {
    return (
        <h1
        style={{
            // fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,    
            color: 'text.primary',
            textAlign: 'center',
        }}
        >
            {props.heading}
            </h1>
    );
}

export default Heading;