import React, { useState, useEffect } from 'react';
import Icon from "../images/camera.png"

function Homepage() {

  const [categoryList, setCategoryList] = useState([]);
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [numPosts, setNumPosts] = useState(4);


  // GET CATEGORIES - method "GET"
  useEffect(() => {
    fetch('https://frontend-case-api.sbdev.nl/api/categories', {
      method: 'GET',
      headers: {
        token: 'pj11daaQRz7zUIH56B9Z',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategoryList(data.map((category) => ({ name: category.name, id: category.id })));
      });
  }, []);


  // GET POSTS - method "GET"
  useEffect(() => {
    fetch('https://frontend-case-api.sbdev.nl/api/posts?page=1&sortDirection=desc&perPage=9', {
      method: 'GET',
      headers: {
        token: 'pj11daaQRz7zUIH56B9Z',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
      });
  }, []);


  // CREATE POST - method "POST" then update post list with "GET"
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category_id', categoryId);
    formData.append('image', image);

    fetch('https://frontend-case-api.sbdev.nl/api/posts', {
      method: 'POST',
      body: formData,
      redirect: 'follow',
      headers: {
        token: 'pj11daaQRz7zUIH56B9Z',
      },
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    // Fetch the updated list of posts
    fetch(
      'https://frontend-case-api.sbdev.nl/api/posts?page=1&sortDirection=desc&perPage=9',
      {
        method: 'GET',
        headers: {
          token: 'pj11daaQRz7zUIH56B9Z',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // Set the state of `posts` with the new data
        setPosts(data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // POST LOG TEST SUCCESS: { "id": 1075, "created_at": "2023-02-28T18:02:00.000000Z", "updated_at": "2023-02-28T18:02:00.000000Z", "title": "marco", "content": "tewqeqweqwe", "category_id": 2, "img_url": "images\/Cuk3a5KRd5RWfmrc1pBFxHzR5YmGdLHyqpIh9Tbo.png", "category": { "id": 2, "name": "Nieuws", "created_at": null, "updated_at": null } }


  return (
    <div className='homepage-container'>

      <div className='left-container'>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <p className='form-title'>Plaats een blog bericht</p>
            <p className='small-para'>Berichtnaam</p>
            <input type="text" placeholder="Geen titel" value={title} onChange={(event) => setTitle(event.target.value)} />
            <p className='small-para'>Categorie</p>
            <select name="category" id="select" value={categoryId} onChange={(event) => setCategoryId(event.target.value)}>
              {categoryList.map((category) => (
                <option key={category.id} value={category.id}> {category.name} </option>))}
            </select>
            <br />
            <p className='small-para'>Header afbeelding</p>
            <input style={{ display: "none" }} type="file" id="file" onChange={(event) => setImage(event.target.files[0])} />
            <label className="image-input" htmlFor="file">
              <img className='add-img-icon' src={Icon} alt="" />
              <span className='add-img-button'>Kies bestand</span>
            </label>
            <br />
            <p className='small-para'>Bericht</p>
            <textarea style={{ resize: "none" }} cols="30" rows="10" value={content} onChange={(event) => setContent(event.target.value)}></textarea>
            <br />
            <div className='form-btn-container'>
              <button className="form-button" type="submit">Bericht aanmaken</button>
            </div>
          </form >
        </div>
      </div>


      <div className='right-container'>
        <div className='card-container'>
          {posts.slice(0, numPosts).map((post) => (
            <article className='card-article' key={post.id}>
              {/* DISCLAIMER: Image API is not working, URL for images is unknown, couldn't get images posted, replaced with random image */}
              <img className='card-img' src={"https://unsplash.it/300/100"} alt={post.title} />
              <h3 className='card-title'>{post.title}</h3>
              <p className='card-content'>{post.content}</p>
            </article>
          ))}
        </div>
        <div className='button-container'>
          <button className="meer-button" onClick={() => setNumPosts(numPosts + 4)}>Meer laden</button>
        </div>
      </div>

    </div>
  )
}

export default Homepage