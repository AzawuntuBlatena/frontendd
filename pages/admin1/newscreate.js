import { useState } from 'react';
import Layout from '../admin1';

function AddNewsForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const news={title,author,description,content,image}
    // if (!title) {
    //   setError('Please enter a title and image URL.');
    //   return;
    // }
    const response = await fetch('http://localhost:8000/api/adminnews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(news),
        // image,
    });
    const data = await response.json();
    if (response.ok) {
      setTitle('');
      setAuthor('');
      setDescription('');
      setContent('');
      setImage('');
      setError('');
      console.log(data);
    } else {
      setError(data.message);
    }
  };
  console.log(image)
  return (
    <Layout>
    <div className='h-screen'>
<div>
    <h1 className=' font-bold text-gray-700 text-center'>Add News Form</h1>
</div>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto" enctype='multipart/form-data'>
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2 font-bold text-gray-700">
          Title:
        </label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block mb-2 font-bold text-gray-700">
          Author:
        </label>
        <input
          type="text"
          id="author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-bold text-gray-700">
          Description:
        </label>
        <input
          type="text"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-bold text-gray-700">
          Image:
        </label>
        <form action="http://localhost:8000/api/adminnews" method="POST" enctype='multipart/form-data'>
        <input
          type="file"
          id="image"
          // onChange={(e) => setImage(e.target.value)}
          // value={image}
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
       </form>
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block mb-2 font-bold text-gray-700">
          Content:
        </label>
        <textarea
          id="content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
      </div>
     
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit
      </button>
      {error && <p className="text-red-500 mb-4">{error}</p>}
    </form>
   
         {/* <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Send
      </button> */}
    </div>
    </Layout>
  );
}
export default AddNewsForm;