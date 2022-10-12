import CloseButtonBootstrap from 'react-bootstrap/CloseButton';
import { CloseButtonProps } from 'react-bootstrap/CloseButton';

interface CloseButtonPropsBootstrap extends CloseButtonProps {
    disabled: boolean;
}

export default function CloseButton(props: CloseButtonPropsBootstrap ) {
    return (
        <CloseButtonBootstrap {...props} />
    )
}
