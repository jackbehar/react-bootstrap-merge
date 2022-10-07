import BsAlert from "react-bootstrap/Alert";

import { AlertProps as BootstrapAlertProps } from "react-bootstrap/Alert";

interface AlertProps extends Omit<BootstrapAlertProps,'bsPrefix'> {
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'link',
  /**
   * The content of Alert
   * @uxpincontroltype textfield(2)
   * @uxpinpropname  Content
   * */
  children: React.ReactNode,
  
  /**
  * Example of extending the prop to include comments and UXPin props-panel tags
  * */
  // active: BootstrapButtonProps["active"]
}

export default function Alert(props: AlertProps) {

  return (
    <BsAlert {...props}>{props.children}</BsAlert>
  );
}
