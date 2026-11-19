
import React from "react";
import Header from "../other/Header";
import CreateList from "../other/CreateList";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-[#111827] text-white">

      <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-10">

        {/* Dashboard Header */}
        <div className="mb-8 rounded-2xl border border-gray-700 bg-[#1f2937] p-6 shadow-lg">
          <Header changeUser={props.changeUser} />
        </div>

        {/* Create Task Section */}
        <section className="mb-8">
          <div className="mb-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Create New Task
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Assign tasks and manage your team's workflow.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-700 bg-[#1f2937] p-4 shadow-lg sm:p-6">
            <CreateList />
          </div>
        </section>

        {/* Employee Overview */}
        <section>
          <div className="mb-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Employee Overview
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Monitor employee tasks and performance.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-700 bg-[#1f2937] p-4 shadow-lg sm:p-6">
            <AllTask />
          </div>
        </section>

      </main>
    </div>
  );
};

export default AdminDashboard;
