db.posts.find({
    $or: [
      { userId: { $in: user.friends } },                 
      { "comments.userId": { $in: user.friends } }     
    ]
  }).sort({ createdAt: -1 });
  