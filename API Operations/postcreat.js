db.posts.insertOne({
    userId: userId,
    content: "This is my post!",
    comments: [],
    createdAt: new Date()
  });
  