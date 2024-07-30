import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  // const params = useParams();
  // console.log(params);

  // const [serachParams, setSearchParams] = useSearchParams();
  // console.log(serachParams.get("name"));

  // const location = useLocation();
  // console.log(location);

  return <p>User: {id}</p>;
};

export default UserDetail;
