import BigSidebar from './BigSidebar';
import SmallSidebar from './SmallSidebar';
import { useState } from "react";

const Sidebar = () => {
  const [expand, setExpand] = useState(true);

  const handler = () => {
    setExpand(!expand);
  };

  return (
    <>
      <button
        className="bg-indigo-700 text-white my-3 p-3 hover:bg-indigo-500"
        onClick={handler}
      >
        { (expand) ? "Shrink" : "Expand" }
      </button>
      <div className="flex">
        {
          (expand)
            ? <BigSidebar /> : <SmallSidebar />
        }
      </div>
    </>
  );
};

export default Sidebar;
