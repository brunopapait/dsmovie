import { useParams } from "react-router-dom";
import FormCard from "../../components/FormCard";

export default function Form() {
  const { movieId } = useParams();

  return <FormCard movieId={`${movieId}`} />;
}
