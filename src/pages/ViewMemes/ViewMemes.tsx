import DisplayMems from '../../components/DisplayMems';
import { CenteredFlexBox } from '../../components/styled';

function ViewMemes() {
  return (
    <>
      <CenteredFlexBox flexDirection={'column'}>
        <DisplayMems />
      </CenteredFlexBox>
    </>
  );
}

export default ViewMemes;
