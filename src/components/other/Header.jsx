
import React from 'react'

const Header = (props) => {

  const username = props.data?.firstName || 'Admin'
  const isEmployee = Boolean(props.data)

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser('')
  }

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

      {/* Welcome Section */}
      <div className="flex items-center gap-4">

        {/* Profile Avatar */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-2xl font-bold text-emerald-400">
          {username.charAt(0).toUpperCase()}
        </div>

        <div>
          <p className="text-sm font-medium text-gray-400">
            Welcome back,
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {username} 👋
          </h1>

          <p className="mt-1 text-xs font-medium text-emerald-400">
            {isEmployee ? 'Employee Dashboard' : 'Administrator Dashboard'}
          </p>
        </div>

      </div>

      {/* Right Section */}
      <div className="flex items-center justify-between gap-4 sm:justify-end">

        <div className="hidden rounded-xl border border-gray-700 bg-[#111827] px-4 py-2 sm:block">
          <p className="text-xs text-gray-400">Account Status</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            <span className="text-sm font-medium text-white">Active</span>
          </div>
        </div>

        <button
          onClick={logOutUser}
          className="flex items-center gap-2 rounded-xl bg-rose-500/10 px-5 py-3 text-sm font-semibold text-rose-400 transition-all hover:bg-rose-500 hover:text-white active:scale-95"
        >
          <span>↪</span>
          Log Out
        </button>

      </div>

    </div>
  )
}

export default Header
