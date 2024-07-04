import { Appbar } from "../comps/Appbar";
import Balance from "../comps/Balance";
import Users from "../comps/Users";

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <Appbar firstName={"Venkat"} />
      <div className="h-full my-6">
        <Balance balance={1000} />
      </div>
      <Users />
    </div>
  );
}
