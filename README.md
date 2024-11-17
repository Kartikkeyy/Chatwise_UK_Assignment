Social Media Backend API
This project is a backend implementation for a social media platform using MongoDB and JavaScript. It supports core functionalities like user registration, friend requests, posts, comments, and a personalized feed.

Features
User Registration: Register and manage user details.
Friend Requests: Send, receive, accept, or reject friend requests.
Posts: Create and fetch text-only posts.
Comments: Add comments to posts.
Content Feed: A personalized feed that:
Shows posts by friends.
Includes posts from non-friends if a friend commented on them.
Schema Design
The application uses a MongoDB NoSQL database. Below are the key collections:

Users Collection
Stores user details, friend lists, and friend request tracking.

json
Copy code
{
  "_id": "ObjectId",
  "username": "string",
  "email": "string",
  "passwordHash": "string",
  "friends": ["ObjectId"],
  "friendRequests": {
    "sent": ["ObjectId"],
    "received": ["ObjectId"]
  },
  "createdAt": "Date"
}
Posts Collection
Stores user posts and their associated comments.

json
Copy code
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "content": "string",
  "comments": [
    {
      "userId": "ObjectId",
      "comment": "string",
      "createdAt": "Date"
    }
  ],
  "createdAt": "Date"
}
API Endpoints
User APIs
Register User

POST /users/register
Input: username, email, password
Output: User creation confirmation.
Send Friend Request

POST /users/
/friend-requests/send
Input: targetUserId
Output: Request sent confirmation.
Accept/Reject Friend Request

POST /users/
/friend-requests/respond
Input: requesterId, action (accept or reject)
Output: Success/Failure message.
Post APIs
Create Post

POST /posts
Input: userId, content
Output: Post creation confirmation.
Add Comment

POST /posts/
/comments
Input: userId, comment
Output: Comment added confirmation.
Get Feed

GET /feed
Input: userId (from session or request)
Output: List of posts based on the user's friends and interactions.
Feed Logic
Posts by Friends: Fetch posts created by users in the current user's friends list.
Posts by Non-Friends: Include posts from non-friends only if a friend has commented on them.
Query Example:
javascript
Copy code
db.posts.find({
  $or: [
    { userId: { $in: user.friends } },
    { "comments.userId": { $in: user.friends } }
  ]
}).sort({ createdAt: -1 });
Database Indexing
To optimize performance:

Index userId and friends in the Users collection.
Index createdAt in the Posts collection for faster feed queries.
Setup
Prerequisites:
Node.js
MongoDB
Steps:
Clone the repository:
bash
Copy code
git clone <repository-url>
cd social-media-backend
Install dependencies:
bash
Copy code
npm install
Set up the MongoDB database and environment variables.
Start the server:
bash
Copy code
npm start
Future Enhancements
Support for multimedia posts (images, videos).
Real-time notifications using WebSocket.
Enhanced privacy controls for posts and comments.
GraphQL support for more flexible queries.
Contributors
Kartikey Tiwari
Feel free to contribute and suggest improvements!
