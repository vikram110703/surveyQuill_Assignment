"use client"; // This makes the component a client component
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from '@/libs/constant'

// Fetch topics function
const getTopics = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/topics`);
    console.log("Data fetched: ", res.data);
    return res.data.topics;
  } catch (error) {
    console.error("Error loading topics: ", error);
    return [];
  }
};

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await getTopics();
      setTopics(data); // Directly set the array
    };

    fetchTopics();
  }, [refresh]);

  console.log("All topics: ", topics);

  return (
    <div>
      {!topics || topics.length === 0 ? (
        <p>No topics found.</p> // Handle empty state gracefully
      ) : (
        topics.map((t) => (
          <div
            key={t._id}
            className="p-4 bg-slate-100 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          >
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>

            <div className="flex gap-2">
              <RemoveBtn id={t._id} refresh={refresh} setRefresh={setRefresh} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
