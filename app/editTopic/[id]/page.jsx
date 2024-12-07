import EditTopicForm from "@/components/EditTopicForm";
import BASE_URL from "@/libs/constant";
import axios from "axios";

const getTopicById = async (id) => {
  try {
    const {data}=await axios.get(`${BASE_URL}/api/topics/${id}`);

    // const data = await res.json(); // Corrected response parsing
    // console.log("Data fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("Error fetching topic:", error.message);
    return null; // Return a fallback or handle gracefully
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  // console.log("id ",id);
  const {topic} = await getTopicById(id);

  // Fallback values for empty or missing topic
  const title = topic?.title || "Untitled";
  const description = topic?.description || "No description available";

  return <EditTopicForm id={id || 1} title={title} description={description} />;
}
