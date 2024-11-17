{
  _id: ObjectId;             
  username: String;          
  email: String;        
  passwordHash: String;     
  friends: [ObjectId];      
  friendRequests: {         
    sent: [ObjectId];        
    received: [ObjectId];   
  createdAt: Date; 
  }             
}
