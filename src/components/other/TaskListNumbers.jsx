
import React from 'react'

const TaskListNumbers = ({ data }) => {

  const taskCount = data?.taskCount || {
    newTask: 0,
    active: 0,
    completed: 0,
    failed: 0
  }

  const stats = [
    {
      title: 'New Tasks',
      count: taskCount.newTask,
      icon: '📋',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20'
    },
    {
      title: 'Active Tasks',
      count: taskCount.active,
      icon: '⚡',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20'
    },
    {
      title: 'Completed Tasks',
      count: taskCount.completed,
      icon: '✓',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20'
    },
    {
      title: 'Failed Tasks',
      count: taskCount.failed,
      icon: '!',
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20'
    }
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => (
        <div
          key={stat.title}
          className={`rounded-2xl border ${stat.border} bg-[#1f2937] p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#273449] sm:p-6`}
        >

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-gray-400">
                {stat.title}
              </p>

              <h2 className={`mt-3 text-4xl font-bold ${stat.color}`}>
                {stat.count}
              </h2>
            </div>

            <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold ${stat.bg} ${stat.color}`}>
              {stat.icon}
            </div>

          </div>

          <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-gray-700">
            <div
              className={`h-full rounded-full ${stat.bg.replace('/10', '')}`}
              style={{
                width: `${Math.min(
                  100,
                  (stat.count / Math.max(
                    1,
                    Object.values(taskCount).reduce((a, b) => a + b, 0)
                  )) * 100
                )}%`
              }}
            />
          </div>

        </div>
      ))}

    </div>
  )
}

export default TaskListNumbers
