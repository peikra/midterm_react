import axios from "axios";
import { useMutation } from "react-query";

const Delete = ({ id }) => {
  const deleteProduct = async () => {
    try {
      const response = await axios.delete(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      
      console.log("Product deleted successfully", response.data);
      
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
