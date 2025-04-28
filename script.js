// Sample data for blog posts
const posts = [
  { title: "My First Blog Post", content: "This is the content of my first blog post.", likes: 0 },
  { title: "Another Post", content: "This is another blog post with more content.", likes: 0 }
];

// Function to render posts to the page
function renderPosts() {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = ''; // Clear existing posts

  posts.forEach((post, index) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const postTitle = document.createElement("h3");
    postTitle.textContent = post.title;

    const postContent = document.createElement("p");
    postContent.textContent = post.content;

    const likeButton = document.createElement("button");
    likeButton.textContent = `Like (${post.likes})`;
    likeButton.onclick = () => likePost(index);

    postElement.appendChild(postTitle);
    postElement.appendChild(postContent);
    postElement.appendChild(likeButton);

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

  const newPost = { title: "New Blog Post", content: postContent, likes: 0 };
  posts.push(newPost);
  renderPosts();
  document.getElementById("post-content").value = ''; // Clear the textarea
}

// Function to like a post
function likePost(index) {
  posts[index].likes += 1;
  renderPosts();
}

// Initial render of posts
renderPosts();
