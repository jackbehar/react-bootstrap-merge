import DropdownBootstrap from '../Dropdown';
import DropdownItemBootstrap from '../../DropdownItem/DropdownItem';
import DropdownMenuBootstrap from '../../DropdownMenu/DropdownMenu';
import DropdownToggleBootstrap from '../../DropdownToggle/DropdownToggle';

export default (
    <DropdownBootstrap uxpId="dropdown">
      <DropdownToggleBootstrap uxpId="dropdownToggle" variant="success" id="dropdown-basic">
        Dropdown Button
      </DropdownToggleBootstrap>

      <DropdownMenuBootstrap uxpId="dropdownMenu">
        <DropdownItemBootstrap uxpId="dropdownItem-1" href="#/action-1">Action</DropdownItemBootstrap>
        <DropdownItemBootstrap uxpId="dropdownItem-2"href="#/action-2">Another action</DropdownItemBootstrap>
        <DropdownItemBootstrap uxpId="dropdownItem-3" href="#/action-3">Something else</DropdownItemBootstrap>
      </DropdownMenuBootstrap>
    </DropdownBootstrap>
)