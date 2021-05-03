import EmployeeCard from "../components/EmployeeExample";
import employees from "../data/employees";
import { Employee } from "../types";

export default function Employees() {
  const isLead = (emp: Employee) => emp.role.toLowerCase().includes("lead");

  const employeesRandomized = employees.reduce((acc, cur) => {
    return Math.random() > 0.5 ? [...acc, cur] : [cur, ...acc];
  }, []);

  const employeesSorted = Array.from(employeesRandomized).sort((e1, e2) => {
    if (isLead(e1) && isLead(e2)) return 0;
    if (isLead(e1) && !isLead(e2)) return -1;
    if (!isLead(e1) && isLead(e2)) return 1;
  });

  return (
    <div className="px m-8">
      <h3 className="font-bold">Our team</h3>
      <div className={`grid grid-cols-2 gap-4`}>
        {employeesSorted.map((emp, i) => (
          <EmployeeCard employee={emp} key={i} />
        ))}
      </div>
    </div>
  );
}
