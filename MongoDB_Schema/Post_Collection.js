{
  _id: ObjectId;        
  userId: ObjectId;           
  content: String;              
  comments: [                   
    {
      userId: ObjectId,         
      comment: String,         
      createdAt: Date          
    }
  ];
  createdAt: Date              
}
