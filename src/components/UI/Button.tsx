import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

type BaseProps={
    textOnly?:boolean;
    children: ReactNode;
};

type ButtonProps= ComponentPropsWithoutRef<'button'>& BaseProps & {
    to?:never;
}

type LinkProps= ComponentPropsWithoutRef<typeof Link> & BaseProps & {
    to: string;
}

function isLink(props: ButtonProps |LinkProps) : props is LinkProps{
        return props.to !== undefined;
}


export default function Button(props: ButtonProps | LinkProps){

    if (isLink(props)){
        const {children, textOnly, ...otherProps} = props;
        return (
            <Link className={`button ${textOnly ? "button--text-only" : ""}`} {...otherProps}>
                {children}
            </Link>
        );
    }

    const {children, textOnly, ...otherProps} = props ;

    return (
        <button className={`button ${textOnly ? "button--text-only" : ""}`} {...otherProps}>
                {children}
        </button>
    );
}