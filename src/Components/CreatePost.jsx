import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  return (
    <>
      <Form method="POST" className='create-post' >
        <div className="mb-3">
          <label htmlFor="user Id" className="form-label">Enter your user Id here
          </label>
          <input type="Text" className="form-control" placeholder='Your User Id' name="userId" />
        </div>

        <div className="mb-3">
          <label htmlFor="tittle" className="form-label">Post Tittle</label>
          <input type="Text" className="form-control" placeholder='How are you feeling today...' name="tittle" />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea rows='4' className='form-control'
            id="body" placeholder='Tell us more abourt it' name="body" />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input type="Text" className="form-control" id='reactions' placeholder='How many people reacted to this post' name="reactions" />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter You hashtag here
          </label>
          <input type="Text" className="form-control" id='tags' placeholder='Please enter tags using space' name="tags" />
        </div>

        <button type="submit" className="btn btn-primary">post</button>
      </Form>

    </>
  )
}

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ")
  console.log(postData);

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => {
      console.log(post)
    });
  return redirect("/");
}

export default CreatePost;
