import clsx from "clsx";
import { Employee } from "../types";

interface Props {
  employee: Employee;
}

export default function EmployeeCard({
  employee: { name, role, pictureUrl },
}: Props) {
  return (
    <div
      className={clsx(
        `py-8 px-8 bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6`
        // role.toLowerCase().includes("lead") && "order-first" // this produces bizarre results
      )}
    >
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
        src={pictureUrl}
        alt="Woman's Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{name}</p>
          <p className="text-gray-500 font-medium">{role}</p>
        </div>
        <button className="px-4 py-1 text-sm text-blue-900 bg-blue-200 font-semibold rounded-full border border-blue-500 hover:text-white hover:bg-blue-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Message
        </button>
      </div>
    </div>
  );
}
