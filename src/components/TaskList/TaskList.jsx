
import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data = [] }) => {

  const tasks = Array.isArray(data) ? data : []

  return (
    <div
      id="taskList"
      className="w-full overflow-x-auto pb-4"
    >
      {tasks.length === 0 ? (
        <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-700 bg-[#111827] px-4 text-center">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800 text-2xl">
            📋
          </div>

          <h3 className="text-lg font-semibold text-white">
            No Tasks Assigned
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Your assigned tasks will appear here.
          </p>
        </div>
      ) : (
        <div className="flex w-max min-w-full items-stretch gap-5">
          {tasks.map((elem, idx) => {
            if (elem.active) {
              return <AcceptTask key={elem.id || idx} data={elem} />
            }

            if (elem.newTask) {
              return <NewTask key={elem.id || idx} data={elem} />
            }

            if (elem.completed) {
              return <CompleteTask key={elem.id || idx} data={elem} />
            }

            if (elem.failed) {
              return <FailedTask key={elem.id || idx} data={elem} />
            }

            return null
          })}
        </div>
      )}
    </div>
  )
}

export default TaskList
