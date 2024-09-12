import React, { useContext, useState } from "react";
import { appContext } from "../../context/AppContext";
import DeleteConfirmationModal from "../DeleteConfirmationModal";
import DeleteIcon from "../Icons/DeleteIcon";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase";

export default function UsersTable() {
  const { users, restoreUsers, handleDeleteUserUI } = useContext(appContext);
  const tableHeaders = ["#", "Full Name", "Email"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };
  const handleDeleteUser = async () => {
    const id = selectedUser.id;

    const usersBeforeDelete = users;
    try {
      handleDeleteUserUI(id);
      setIsModalOpen(false);
      const userToBeDeletedDoc = doc(db, "users", id);
      await deleteDoc(userToBeDeletedDoc);
      toast.success("User deleted successfully");
    } catch (err) {
      restoreUsers(usersBeforeDelete);
      toast.error("Failed to delete user");
    }
  };
  return (
    <>
      <div className="self-stretch md:justify-between md:items-center gap-4 flex flex-col md:flex-row p-10 overflow-x-auto whitespace-nowrap">
        <div className="grow shrink basis-0 text-white text-[32px] font-semibold ">
          Users List
        </div>
      </div>
      <div className="overflow-x-auto  px-10">
        <table className="w-full text-base font-body text-left rtl:text-right text-gray-500 mb-10 overflow-x-auto whitespace-nowrap">
          <thead className=" text-white">
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=" text-white">
            {users.map((user, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-input" : " "}`}
              >
                <td className="px-4 sm:px-6 py-2 border-r-2 border-opacity-60 border-input">
                  {index + 1}
                </td>
                <td className="px-4 sm:px-6 py-2 border-r-2 border-opacity-60 border-input">
                  <p className="truncate w-20 custom-sm:w-40 sm:w-full capitalize">
                    {user.firstName + " " + user.lastName}
                  </p>
                </td>
                <td className="px-6 py-2 border-r-2 border-opacity-60 border-input hidden lg:table-cell">
                  {user.email}
                </td>
                <td className="px-3 py-2">
                  <div className="justify-center w-full items-center gap-2 inline-flex">
                    <button
                      onClick={() => handleOpenModal(user)}
                      className="w-8 h-8 px-2 sm:w-10 sm:h-10 sm:px-2.5 transition duration-300 ease-in-out bg-[#1a1a1a] hover:bg-[#831717] rounded-lg border border-[#831717] justify-center items-center gap-2 flex"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <DeleteConfirmationModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onDelete={handleDeleteUser}
        />
      </div>
    </>
  );
}
