import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownProps as BootstrapDropdownProps } from 'react-bootstrap/Dropdown';

interface DropdownProps extends BootstrapDropdownProps {
    /**
    * The content of Alert
    * @uxpincontroltype textfield(2)
    * @uxpinpropname  Content
    * */
children: React.ReactNode,
}

export default function DropdownBootstrap(props: DropdownProps) {
    return (
        <Dropdown {...props}>{props.children}</Dropdown>
    )
}