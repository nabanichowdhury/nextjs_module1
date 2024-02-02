
import Counter from '@/components/Counter/Counter';
import Link from 'next/link';


const HomePage = () => {
  
  
  return (
    <div>
      <h1>This is home page</h1>
      <Counter />
      <Link href="/solo">
      <button className='btn border-t-neutral-100'>Solo</button>
      </Link>
      
     
    </div>
  );
};

export default HomePage;