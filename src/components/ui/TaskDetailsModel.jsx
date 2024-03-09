import { useState } from "react";
import Model from "./Model";
import {
    
    DocumentMagnifyingGlassIcon,
  } from "@heroicons/react/24/outline";

const TaskDetailsModel = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="grid place-content-center"
        title="Details"
      >
        <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
      </button>
      <Model setIsOpen={setIsOpen} isOpen={isOpen}>
        <div className="bg-secondary/10 rounded-md p-5 relative">
          <h1
            className={`text-lg font-semibold mb-3 ${
              task?.priority === "High" && "text-red-500"
            } ${task?.priority === "Medium" && "text-yellow-500"} ${
              task?.priority === "Low" && "text-green-500"
            }`}
          >
            {task?.title}
          </h1>
          <p className="mb-3">{task?.description}</p>
          <p className="text-sm">Assigned to - {task?.assignedTo}</p>
          <div className="flex justify-between mt-3">
            <p>{task?.date}</p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-red-500 px-3 py-1 text-center text-white rounded-full w-fit h-fit absolute right-3 top-3"
          >
            x
          </button>
        </div>
      </Model>
    </>
  );
};

export default TaskDetailsModel;
