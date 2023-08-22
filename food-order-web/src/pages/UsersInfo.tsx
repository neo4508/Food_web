import { Button } from 'antd';

interface IUserInfor {
  name: string;
}
export const UserInfor = (props: IUserInfor) => {
  return (
    <div>
      <div>UserInfor {props.name}</div>
      <Button onClick={() => localStorage.removeItem('isLogined')}></Button>
    </div>
  );
};
