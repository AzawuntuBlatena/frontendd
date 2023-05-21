import { useEffect, useState } from 'react';
import Layout from '../admin1'
import NewBuyerTable from '@/components/Admin/NewBuyerTable';

const newBuyersList = () => {

  const [share, setshare] = useState(null);
  useEffect(()=>{
    const fetchShareholders=async ()=>{
      const response=await fetch('http://localhost:8000/api/buyer')
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
    <h1 className="text-2xl font-bold mb-4 ">New Buyer's List</h1>
    </div>
    <div className='min-w-full border p-4 bg-slate-100 h-screen border-gray-200'>    
    <div className="container mx-auto py-2">
         {share &&<NewBuyerTable  shareholders={share}/>}
      </div>
     </div> 
    </>
    </Layout>
  )
}

export default newBuyersList