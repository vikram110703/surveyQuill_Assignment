"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import axios from "axios";
import BASE_URL from '@/libs/constant';

export default function RemoveBtn({ id,setRefresh,refresh }) {
  console.log("id ",id);
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        const res = await axios.delete(`${BASE_URL}/api/topics/${id}`);
        console.log("resp of delete ", res);
        setRefresh(!refresh);
      } catch (error) {
        console.log("error in deleting ", error);
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
