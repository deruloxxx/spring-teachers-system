import {Button, CaretDownIcon, CogIcon, EditIcon, ManualIcon, SearchIcon, TrashIcon} from "evergreen-ui";

export const ButtonList = () => {
  return (
    <div>
      <Button marginY={8} marginRight={12} iconAfter={CogIcon}>
        Settings
      </Button>
      <Button marginY={8} marginRight={12} iconBefore={EditIcon}>
        Edit
      </Button>
      <Button marginY={8} marginRight={12} iconBefore={ManualIcon}>
        Docs
      </Button>
      <Button marginY={8} marginRight={12} iconBefore={TrashIcon} intent="danger">
        Delete...
      </Button>
      <Button marginY={8} marginRight={12} iconBefore={SearchIcon}>
        Search
      </Button>
      <Button marginY={8} marginRight={12} iconAfter={CaretDownIcon}>
        Filter
      </Button>
    </div>
  );
};