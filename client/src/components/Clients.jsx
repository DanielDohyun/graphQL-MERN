import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from '../queries/clientQueries';
import Spinner from "./Spinner";

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  console.log(data)

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>email</th>
              <th>phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
