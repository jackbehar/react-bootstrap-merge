import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonGroupProps } from 'react-bootstrap/ButtonGroup';

export default function ButtonGroupBootstrap(props: ButtonGroupProps) {
    return (
        <ButtonGroup {...props}>{props.children}</ButtonGroup>
    )
}