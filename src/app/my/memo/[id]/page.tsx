import SelectedMemoFeature from '@/components/Features/SelectedMemoFeature';

function Memo({ params }: { params: { id: string } }) {
  return <SelectedMemoFeature id={params.id} />;
}

export default Memo;
