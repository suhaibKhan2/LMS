import React, { useState } from "react";

const DiscussionForumPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Suhaib",
      content: "How do I start learning Java?",
      replies: [{ user: "Raghul", content: "Start with Java Basics and practice small programs." }],
    },
    {
      id: 2,
      user: "Satish",
      content: "What is the best way to understand Spring Boot?",
      replies: [{ user: "Shashank", content: "Try building a simple REST API with Spring Boot." }],
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [newReply, setNewReply] = useState({});

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([...posts, { id: posts.length + 1, user: "You", content: newPost, replies: [] }]);
      setNewPost("");
    }
  };

  const handleReplySubmit = (postId, replyContent) => {
    if (replyContent.trim()) {
      setPosts(posts.map(post =>
        post.id === postId
          ? { ...post, replies: [...post.replies, { user: "You", content: replyContent }] }
          : post
      ));
      setNewReply({ ...newReply, [postId]: "" });
    }
  };

  return (
    <div>
      <h1>Discussion Forum</h1>

      {/* Create New Post */}
      <form onSubmit={handlePostSubmit}>
        <textarea
          placeholder="Start a new discussion..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>

      {/* Display All Posts */}
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <strong>{post.user}:</strong> {post.content}

            {/* Replies Section */}
            <ul>
              {post.replies.map((reply, index) => (
                <li key={index}><strong>{reply.user}:</strong> {reply.content}</li>
              ))}
            </ul>

            {/* Reply to a Post */}
            <textarea
              placeholder="Write a reply..."
              value={newReply[post.id] || ""}
              onChange={(e) => setNewReply({ ...newReply, [post.id]: e.target.value })}
              required
            />
            <button onClick={() => handleReplySubmit(post.id, newReply[post.id] || "")}>Reply</button>
          </li>
        ))}
      </ul>

      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default DiscussionForumPage;
