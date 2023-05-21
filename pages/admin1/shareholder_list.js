import { useEffect, useState } from 'react';
import ShareholderTable from '@/components/Admin/Shareholder_table';
import Layout from '../admin1'

const Home = () => {
  const [share, setshare] = useState(null);
  useEffect(()=>{
    const fetchShareholders=async ()=>{
      const response=await fetch('http://localhost:8000/api/share')
      const data=await response.json()
      if(response.ok){
        setshare(data)
        console.log(data)
      }
    }
    fetchShareholders()
  },[])
  return ( 
    <Layout>
    <>
    <div>
    <h1 className="text-2xl font-bold mb-4 ">Shareholder List</h1>
    </div>
    <div className='min-w-full border p-4 bg-slate-100 h-screen border-gray-200'>    
    <div className="container mx-auto py-2">
         {share &&<ShareholderTable  shareholders={share}/>}
      </div>
     </div> 
    </>
    </Layout>
  );
};

export default Home;
