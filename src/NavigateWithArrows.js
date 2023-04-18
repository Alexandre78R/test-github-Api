import { useEffect } from "react";
import { useHistory } from "react-router";

export default function NavigateWithArrows() {
  const history = useHistory();

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "ArrowLeft") {
        history.push("/");
      } else if (event.key === "ArrowRight") {
        history.push("/search-user");
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [history]);

  return null;
}
