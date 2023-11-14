import { TabProps } from "react-bootstrap";
import TabBootstrap from 'react-bootstrap/Tab';

export default function Tab(props: TabProps) {
    return (
        <TabBootstrap {...props}>{props.children}</TabBootstrap>
    )
}