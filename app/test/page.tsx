'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const TestPage = () => {
  const router = useRouter();
  async function onClickHandler() {
    try {
      router.push('/hello');
      router.refresh();
      toast.success('hello');
    } catch (error) {}
  }

  return (
    <div>
      <Button type="button" onClick={onClickHandler}>
        Click
      </Button>
    </div>
  );
};

export default TestPage;
