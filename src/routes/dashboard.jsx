import Balance from "../components/dashboard/balance";
import Income from "../components/dashboard/income";
import NewUser from "../components/dashboard/new-user";
import Table from "../components/dashboard/table";

// import image from '../assets/image.png'
function Dashboard() {
  return (
    <div className="flex flex-col px-10 xl:px-36 py-6 gap-8">
      <div className="flex gap-7">
        <div className=" w-1/2 flex flex-col gap-7">
          <Income />
          <NewUser />
        </div>
        <Balance/>
      </div>
      <Table/>
    </div>
  );
}

export default Dashboard;
