import { gql, useQuery } from '@apollo/client';

const GET_LOCATIONS = gql`
  query GetMems {
    bestMems(GetBestMemsInput: { take: 1 }) {
      id
      likes
      rating
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.bestMems.map((mem: { id: number }) => <div key={mem.id}>{mem.id}</div>);
}

function Page2() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(loading, error, data);

  return (
    <>
      <DisplayLocations />
    </>
  );
}

export default Page2;
