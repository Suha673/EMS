
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ data }) => {

  const { userData, setUserData } = useContext(AuthContext)

  const acceptTask = () => {
    const updatedEmployees = userData.employees.map((employee) => {
      const hasTask = employee.tasks.some((task) => task === data)

      if (!hasTask) return employee

      return {
        ...employee,
        tasks: employee.tasks.map((task) =>
          task === data
            ? {
                ...task,
                active: true,
                newTask: false
              }
            : task
        ),
        taskCount: {
          ...employee.taskCount,
          newTask: Math.max(0, employee.taskCount.newTask - 1),
          active: employee.taskCount.active + 1
        }
      }
    })

    setUserData({
      ...userData,
      employees: updatedEmployees
    })
  }

  return (
    <div className="flex h-[310px] w-[300px] flex-shrink-0 flex-col rounded-2xl border border-rose-500/20 bg-[#252b38] p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/50 hover:shadow-rose-500/5">

      {/* Top Section */}
      <div className="flex items-center justify-between gap-2">

        <span className="rounded-lg bg-rose-500/15 px-3 py-1.5 text-xs font-semibold text-rose-400">
          {data.category}
        </span>

        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
          New Task
        </span>

      </div>

      {/* Task Details */}
      <div className="mt-5">
        <h2 className="line-clamp-2 text-lg font-bold text-white">
          {data.taskTitle}
        </h2>

        <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-gray-400">
          {data.taskDescription}
        </p>
      </div>

      {/* Date */}
      <div className="mt-auto border-t border-gray-700 pt-4">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
          <span>📅</span>
          <span>Due: {data.taskDate}</span>
        </div>

        {/* Accept Button */}
        <button
          onClick={acceptTask}
          className="w-full rounded-xl bg-emerald-500 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-600 active:scale-[0.98]"
        >
          Accept Task →
        </button>
      </div>

    </div>
  )
}

export default NewTask
