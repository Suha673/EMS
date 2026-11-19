
import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeesDashboard = (props) => {
  const employee = props.data

  if (!employee) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#111827] text-gray-400">
        Loading employee dashboard...
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-[#111827] text-white">

      <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mb-8 rounded-2xl border border-gray-700 bg-[#1f2937] p-5 shadow-lg sm:p-6">
          <Header
            data={employee}
            changeUser={props.changeUser}
          />
        </div>

        {/* Dashboard Welcome */}
        <section className="mb-7">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            My Dashboard
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Manage your tasks, track progress and stay productive.
          </p>
        </section>

        {/* Task Statistics */}
        <section className="mb-9">
          <TaskListNumbers data={employee} />
        </section>

        {/* Tasks Section */}
        <section>

          <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">

            <div>
              <h2 className="text-xl font-bold text-white">
                My Tasks
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                View and manage your assigned tasks.
              </p>
            </div>

            <div className="rounded-lg border border-gray-700 bg-[#1f2937] px-4 py-2">
              <span className="text-sm text-gray-400">
                Total Tasks:
              </span>

              <span className="ml-2 font-semibold text-emerald-400">
                {employee.tasks?.length || 0}
              </span>
            </div>

          </div>

          {/* Task Cards Container */}
          <div className="rounded-2xl border border-gray-700 bg-[#1f2937] p-4 shadow-lg sm:p-6">

            <TaskList data={employee.tasks || []} />

          </div>

        </section>

      </main>

    </div>
  )
}

export default EmployeesDashboard
