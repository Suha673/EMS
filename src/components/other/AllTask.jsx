
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const { userData } = useContext(AuthContext)

  const employees = userData?.employees || []

  const stats = [
    { label: 'New Tasks', key: 'newTask', color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Active Tasks', key: 'active', color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { label: 'Completed', key: 'completed', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Failed', key: 'failed', color: 'text-red-400', bg: 'bg-red-500/10' }
  ]

  return (
    <div className="w-full">

      {/* Table Heading */}
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold text-white">
            Employee Performance
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            Track employee task progress and performance.
          </p>
        </div>

        <div className="rounded-lg border border-gray-700 bg-[#111827] px-4 py-2">
          <span className="text-sm text-gray-400">Total Employees: </span>
          <span className="font-semibold text-white">
            {employees.length}
          </span>
        </div>
      </div>

      {/* Employee Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-700">
        <table className="w-full min-w-[750px] text-left">

          <thead className="bg-[#111827]">
            <tr>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Employee
              </th>

              {stats.map((stat) => (
                <th
                  key={stat.key}
                  className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-400"
                >
                  {stat.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700 bg-[#1f2937]">

            {employees.map((elem) => (
              <tr
                key={elem.id}
                className="transition-colors hover:bg-[#273449]"
              >

                {/* Employee Name */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 font-semibold text-emerald-400">
                      {elem.firstName?.charAt(0)?.toUpperCase()}
                    </div>

                    <div>
                      <p className="font-medium text-white">
                        {elem.firstName}
                      </p>
                      <p className="text-xs text-gray-400">
                        Employee
                      </p>
                    </div>
                  </div>
                </td>

                {/* Task Statistics */}
                {stats.map((stat) => (
                  <td
                    key={stat.key}
                    className="px-5 py-4 text-center"
                  >
                    <span className={`inline-flex min-w-10 items-center justify-center rounded-lg px-3 py-1.5 text-sm font-semibold ${stat.bg} ${stat.color}`}>
                      {elem.taskCount?.[stat.key] ?? 0}
                    </span>
                  </td>
                ))}

              </tr>
            ))}

            {employees.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-5 py-10 text-center text-gray-400"
                >
                  No employees found.
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

      {/* Footer */}
      <p className="mt-4 text-xs text-gray-500">
        Showing {employees.length} employees in your organization.
      </p>

    </div>
  )
}

export default AllTask
