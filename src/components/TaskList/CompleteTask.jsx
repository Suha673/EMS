
import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className="flex h-[310px] w-[300px] shrink-0 flex-col rounded-2xl border border-emerald-500/20 bg-[#252b38] p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50">

      {/* Card Header */}
      <div className="flex items-center justify-between gap-2">

        <span className="rounded-lg bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-400">
          {data.category}
        </span>

        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          Completed
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

      {/* Completion Footer */}
      <div className="mt-auto border-t border-gray-700 pt-4">

        <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
          <span>📅</span>
          <span>Due: {data.taskDate}</span>
        </div>

        <div className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500/10 py-2.5 text-sm font-semibold text-emerald-400">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
            ✓
          </span>
          Task Successfully Completed
        </div>

      </div>

    </div>
  )
}

export default CompleteTask
