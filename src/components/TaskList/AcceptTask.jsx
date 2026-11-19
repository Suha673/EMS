
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ data }) => {

  const { userData, setUserData } = useContext(AuthContext)

  const updateTaskStatus = (status) => {

    const updatedEmployees = userData.employees.map((employee) => {

      const taskExists = employee.tasks.some(
        (task) => task === data
      )

      if (!taskExists) return employee

      return {
        ...employee,

        tasks: employee.tasks.map((task) => {
          if (task !== data) return task

          return {
            ...task,
            active: false,
            newTask: false,
            completed: status === 'completed',
            failed: status === 'failed'
          }
        }),

        taskCount: {
          ...employee.taskCount,
          active: Math.max(0, employee.taskCount.active - 1),
          completed:
            employee.taskCount.completed +
            (status === 'completed' ? 1 : 0),
          failed:
            employee.taskCount.failed +
            (status === 'failed' ? 1 : 0)
        }
      }
    })

    setUserData({
      ...userData,
      employees: updatedEmployees
    })
  }

  return (
    <div className="flex h-[310px] w-[300px] shrink-0 flex-col rounded-2xl border border-amber-500/20 bg-[#252b38] p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50">

      {/* Card Header */}
      <div className="flex items-center justify-between gap-2">

        <span className="rounded-lg bg-amber-500/15 px-3 py-1.5 text-xs font-semibold text-amber-400">
          {data.category}
        </span>

        <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
          In Progress
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

      {/* Task Actions */}
      <div className="mt-auto border-t border-gray-700 pt-4">

        <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
          <span>📅</span>
          <span>Due: {data.taskDate}</span>
        </div>

        <div className="flex gap-2">

          <button
            onClick={() => updateTaskStatus('completed')}
            className="flex-1 rounded-lg bg-emerald-500 px-2 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-600 active:scale-95"
          >
            ✓ Complete
          </button>

          <button
            onClick={() => updateTaskStatus('failed')}
            className="flex-1 rounded-lg bg-rose-500/15 px-2 py-2.5 text-xs font-semibold text-rose-400 transition hover:bg-rose-500 hover:text-white active:scale-95"
          >
            ✕ Failed
          </button>

        </div>

      </div>

    </div>
  )
}

export default AcceptTask
