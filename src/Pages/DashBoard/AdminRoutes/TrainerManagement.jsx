import React from "react";
import { FaUserCircle, FaTrash } from "react-icons/fa";
import useFetch from "../../../Hooks/useFetch";
import Swal from "sweetalert2";

const TrainerManagement = () => {
  const {
    data: trainers = [],
    isLoading,
    refetch,
  } = useFetch("trainers", "http://localhost:5000/trainers"); // 👈 Update URL if needed

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
      fetch(`http://localhost:5000/trainers/${id}`, {
        method: "DELETE",
      });

      // Refetch data after deletion
      refetch();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete trainer.");
    }
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10">
        <span className="loading loading-spinner loading-lg text-[#1AB0B0]"></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-base-content mb-2">
        👥 All Trainers
      </h1>
      <p className="text-base-content/70 mb-6">
        Manage certified trainers on the Aevium platform.
      </p>

      {/* Trainers Table */}
      <div className="bg-base-100 rounded-xl shadow overflow-hidden">
        <table className="table table-zebra table-hover">
          <thead style={{ backgroundColor: "#1AB0B0", color: "white" }}>
            <tr>
              <th>#</th>
              <th>Trainer</th>
              <th>Specialty</th>
              <th>Experience</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainers.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-8 text-base-content/60"
                >
                  No trainers found.
                </td>
              </tr>
            ) : (
              trainers.map((trainer, index) => (
                <tr
                  key={trainer._id}
                  className="hover:bg-base-200 transition-colors"
                >
                  <th>{index + 1}</th>

                  {/* Trainer Info */}
                  <td className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-10 rounded-full overflow-hidden border-2 border-[#1AB0B0]">
                        <img
                          src={trainer.image || "/default-user.png"}
                          alt={trainer.name}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{trainer.name}</div>
                      <div className="text-sm text-base-content/60">
                        {trainer.rating}
                      </div>
                    </div>
                  </td>

                  {/* Specialty */}
                  <td>
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {trainer.specialty.slice(0, 2).map((skill, i) => (
                        <span
                          key={i}
                          className="badge badge-sm bg-[#1AB0B0] text-white text-xs px-2"
                        >
                          {skill}
                        </span>
                      ))}
                      {trainer.specialty.length > 2 && (
                        <span className="text-xs text-base-content/50">
                          +{trainer.specialty.length - 2}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Experience */}
                  <td>{trainer.experience} years</td>

                  {/* Status */}
                  <td>
                    <span
                      className={`badge text-xs px-3 py-1 capitalize ${
                        trainer.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {trainer.status}
                    </span>
                  </td>

                  {/* Delete Action */}
                  <td>
                    <button
                      onClick={() => handleDelete(trainer._id)}
                      className="btn btn-ghost btn-sm text-red-500 hover:text-red-700 hover:bg-red-50"
                      aria-label="Delete Trainer"
                    >
                      <FaTrash size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="stat">
          <div className="stat-title">Total Trainers</div>
          <div className="stat-value">{trainers.length}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Active Trainers</div>
          <div className="stat-value text-[#1AB0B0]">
            {trainers.filter((t) => t.status === "active").length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerManagement;
