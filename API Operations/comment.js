db.posts.updateOne(
    { _id: ObjectId(postId) },
    { $push: { comments: { userId: userId, comment: "Nice post!", createdAt: new Date() } } }
  );
  