import Button from "react-bootstrap/Button";

import { ButtonProps as BootstrapButtonProps } from "react-bootstrap/Button";

interface ButtonProps extends BootstrapButtonProps {
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'link' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-dark' | 'outline-light',
  /**
  * The content of Button
  * @uxpinpropname  Label
  * */
  children: string,
  /**
  * Example of extending the prop to include comments and UXPin props-panel tags
  * */
  // active: BootstrapButtonProps["active"]
}

export default function ButtonBootstrap(props: ButtonProps) {
  return (
    <Button {...props}/>
  );
}
