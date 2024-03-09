import { useForm } from "react-hook-form";
import Model from "./Model";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModel = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onsubmit = (data) => {
    dispatch(addTask(data));
    console.log(data);
    onCancel();
  };

  return (
    <Model isOpen={isOpen} setIsOpen={setIsOpen} title="Add a Task">
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="flex flex-col mb-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter Something"
            className="w-full rounded my-3"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            placeholder="Enter Something"
            className="w-full rounded my-3"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="date">Deadline</label>
          <input
            type="date"
            id="date"
            placeholder="Enter Something"
            className="w-full rounded my-3"
            {...register("date")}
          />
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="member">Asign to</label>
          <select
            className="w-full rounded-md"
            id="assignedTo"
            {...register("assignedTo")}
          >
            <option value="Mir Hossain">Mir Hossain</option>
            <option value="Md Asik">Md Asik</option>
            <option value="Sagor Ahmed">Sagor Ahmed</option>
            <option value="Md Sawon Hossain">Md Sawon Hossain</option>
            <option value="Md Siyam">Md Siyam</option>
            <option value="Md Sifat">Md Sifat</option>
            <option value="Pieash Ahmed">Pieash Ahmed</option>
            <option value="Ania Sarkar">Ania Sarkar</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="member">Priority</label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register("priority")}
          >
            <option defaultValue value="High">
              High
            </option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="flex gap-3 my-3">
          <button onClick={() => setIsOpen(!isOpen)} className="btn btn-danger">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Model>
  );
};

export default AddTaskModel;
