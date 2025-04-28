// Sample data for blog posts
const posts = [
  { title: "My First Blog Post", content: "This is the content of my first blog post." },
  { title: "Another Post", content: "This is another blog post with more content." }
];

// Function to render posts to the page
function renderPosts() {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = ''; // Clear existing posts

  posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const postTitle = document.createElement("h3");
    postTitle.textContent = post.title;

    const postContent = document.createElement("p");
    postContent.textContent = post.content;

    postElement.appendChild(postTitle);
    postElement.appendChild(postContent);

    postContainer.appendChild(postElement);
  });
}

// Function to add a new post
function addPost() {
  const postContent = document.getElementById("post-content").value;

  if (postContent.trim() === '') {
    alert("Please write some content for your post.");
    return;
  }

  const newPost = { title: "New Blog Post", content: postContent };
  posts.push(newPost);
  renderPosts();
  document.getElementById("post-content").value = ''; // Clear the textarea
}

// Initial render of posts
renderPosts();
