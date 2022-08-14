import { gql, useQuery } from '@apollo/client';

import { FullSizeCenteredFlexBox } from '../../components/styled';

function ViewMemes() {
  const GET_BEST_MEMS = gql`
    query GetMems {
      mems(GetMemsInput: { take: 5 }) {
        id
        likes
        rating
      }
    }
  `;

  function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_BEST_MEMS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.mems.map((mem: { id: number }) => <div key={mem.id}>{JSON.stringify(mem)}</div>);
  }

  return (
    <>
      <FullSizeCenteredFlexBox flexDirection={'column'}>
        <DisplayLocations />
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default ViewMemes;
