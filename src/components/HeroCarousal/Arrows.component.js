import React from "react";

export const NextArrow = (props) => {
    //const {className, style, onClick } = props;
    return(
        <>
        <div 
        className={props.className}
        style={{ ...props.style, backgroundColor:"black", paddingTop:"5px", paddingBottom:"5px" }}
        onClick={props.onClick}
        />
        </>
    );
};

export const PrevArrow = (props) => {
    return(
        <>
        <div 
        className={props.className}
        style={{ ...props.style, backgroundColor:"black", paddingTop:"5px", paddingBottom:"5px"}}
        onClick={props.onClick}
        />
    </>
    );
};
