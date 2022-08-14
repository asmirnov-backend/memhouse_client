import DisplayMems from '../../components/DisplayMems';
import { FullSizeCenteredFlexBox } from '../../components/styled';

function ViewMemes() {
  return (
    <>
      <FullSizeCenteredFlexBox flexDirection={'column'}>
        <DisplayMems />
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default ViewMemes;
