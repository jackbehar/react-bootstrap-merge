import TabsBootstrap from 'react-bootstrap/Tabs';
import { TabsProps } from 'react-bootstrap/Tabs';

export default function Tabs(props: TabsProps) {
    return (
        <TabsBootstrap {...props}>{props.children}</TabsBootstrap>
    )
}