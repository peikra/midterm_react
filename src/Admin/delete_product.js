import axios from "axios";
import { useMutation } from "react-query";

const Delete = ({ id }) => {
  const deleteProduct = async () => {
    try {
      const response = await axios.delete(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      // Optionally, you can perform any necessary actions after the deletion
      console.log("Product deleted successfully", response.data);
      // Refresh the page after successful deletion
      window.location.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const mutation = useMutation(deleteProduct);

  return (
    <button onClick={mutation.mutate} disabled={mutation.isLoading}>
      {mutation.isLoading ? "Deleting..." : "Delete Product"}
    </button>
  );
};

export default Delete;
