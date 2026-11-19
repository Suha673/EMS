
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateList = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const { userData, setUserData } = useContext(AuthContext)

  const employees = userData?.employees || []

  const submitHandler = (e) => {
    e.preventDefault()

    if (!taskTitle || !taskDate || !asignTo || !category || !taskDescription) {
      alert('Please fill all fields')
      return
    }

    const employeeExists = employees.some(
      (elem) => elem.firstName === asignTo
    )

    if (!employeeExists) {
      alert('Employee not found. Please select a valid employee.')
      return
    }

    const newTask = {
      taskTitle,
      taskDate,
      taskDescription,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    const updatedEmployees = employees.map((elem) => {
      if (elem.firstName === asignTo) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskCount: {
            ...elem.taskCount,
            newTask: elem.taskCount.newTask + 1
          }
        }
      }
      return elem
    })

    setUserData({
      ...userData,
      employees: updatedEmployees
    })

    setTaskTitle('')
    setTaskDate('')
    setTaskDescription('')
    setAsignTo('')
    setCategory('')

    alert('Task created successfully!')
  }

  const inputClass =
    "w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"

  const labelClass =
    "mb-2 block text-sm font-medium text-gray-300"

  return (
    <div className="w-full">

      {/* Form Heading */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-xl text-emerald-400">
          +
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            Task Information
          </h2>
          <p className="text-sm text-gray-400">
            Fill in the details to assign a new task.
          </p>
        </div>
      </div>

      <form onSubmit={submitHandler}>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Left Section */}
          <div className="space-y-5">

            {/* Task Title */}
            <div>
              <label className={labelClass}>
                Task Title <span className="text-red-400">*</span>
              </label>

              <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="e.g. Develop REST API"
                className={inputClass}
                required
              />
            </div>

            {/* Date */}
            <div>
              <label className={labelClass}>
                Due Date <span className="text-red-400">*</span>
              </label>

              <input
                type="date"
                value={taskDate}
                min={new Date().toLocaleDateString('en-CA')}
                onChange={(e) => setTaskDate(e.target.value)}
                className={`${inputClass} [color-scheme:dark]`}
                required
              />
            </div>

            {/* Assign Employee */}
            <div>
              <label className={labelClass}>
                Assign To <span className="text-red-400">*</span>
              </label>

              <select
                value={asignTo}
                onChange={(e) => setAsignTo(e.target.value)}
                className={inputClass}
                required
              >
                <option value="">Select Employee</option>

                {employees.map((employee) => (
                  <option
                    key={employee.id}
                    value={employee.firstName}
                    className="bg-[#111827]"
                  >
                    {employee.firstName}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div>
              <label className={labelClass}>
                Category <span className="text-red-400">*</span>
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={inputClass}
                required
              >
                <option value="">Select Category</option>
                <option value="Development">Development</option>
                <option value="Design">Design</option>
                <option value="Testing">Testing</option>
                <option value="Marketing">Marketing</option>
                <option value="Backend">Backend</option>
                <option value="Other">Other</option>
              </select>
            </div>

          </div>

          {/* Right Section */}
          <div className="flex flex-col">

            <label className={labelClass}>
              Task Description <span className="text-red-400">*</span>
            </label>

            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Describe the task, requirements, and expected outcome..."
              className={`${inputClass} min-h-[220px] flex-1 resize-none`}
              required
            />

            <p className="mt-2 text-xs text-gray-500">
              Provide clear instructions so the employee understands the task.
            </p>

          </div>

        </div>

        {/* Submit Button */}
        <div className="mt-7 flex flex-col-reverse gap-3 border-t border-gray-700 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-500">
            <span className="text-red-400">*</span> Required fields
          </p>

          <button
            type="submit"
            className="rounded-xl bg-emerald-500 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-500/10 transition-all hover:bg-emerald-600 active:scale-[0.98]"
          >
            + Create Task
          </button>

        </div>

      </form>
    </div>
  )
}

export default CreateList
