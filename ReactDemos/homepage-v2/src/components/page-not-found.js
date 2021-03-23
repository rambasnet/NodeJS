import { useLocation } from "react-router-dom";

export default function PageNotFound() {
  let location = useLocation();

  return (
    <div>
      <h3>
        Error 404: Page Not Found <code>{location.pathname}</code>
      </h3>
    </div>
  );
}