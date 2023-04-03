import { useParams, useLocation } from "react-router-dom";

function Detail({}) {
  const id = useParams();
  const { name, address, latitude, longitude, website, phone, type } =
    useLocation().state;
  const call = `tel:${phone}`;

  return (
    <div className="Detail">
      <h3>{name}</h3>
      <p>{address}</p>
      <p>Latitude: {latitude ? latitude : "-"}</p>
      <p>Longitude: {longitude ? longitude : "-"}</p>
      <p>Type: {type}</p>
      <button>
        <a href={website} target="_blank">
          Website
        </a>
      </button>
      <button>
        <a href={call}>Phone</a>
      </button>
    </div>
  );
}

export default Detail;
