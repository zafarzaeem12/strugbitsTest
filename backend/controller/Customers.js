const Customers = require("../model/Customers");

const createCustomer = async (req,res,next) => {
  try{
    const {name,username,email} = req.body
    
    if(!name){
      return res.status(404).send({ message : "Name field is empty", status : 0 })
    }else if(!username){
      return res.status(404).send({ message : "Username field is empty", status : 0 })
    }else if(!email){
      return res.status(404).send({ message : "Email field is empty", status : 0 })
    }else if(!req.file.fieldname == 'profilePicture'){
      return res.status(404).send({ message : "profile picture field is empty", status : 0 })
    }

    const checkdb_customers = await Customers.find({$and :[{name:name } , { username : username} , { email : email}]});
    if(checkdb_customers.length > 0){
      return res.status(400).send({ message : "This Customer already exists" , status : 0 })
    }
   
    const Data = {
      name,
      username,
      email,
      profilePicture :  req.file ? req.file.path.replace(/\\/g, "/") : null
    }

    const createNewCustomer = await Customers.create(Data);

    res.status(201).json({
      message : "Custometer created successfully",
      status : 1,
      data : createNewCustomer
    })

  }catch(err){
    res.status(500).json({
      message : "Custometer not found",
      status : 0
    })
  }
}

const getallCustomer = async (req,res,next) => {
  try{
    let sortParams = {};
    if (req.query.name) {
      sortParams.name = req.query.name === 'desc' ? -1 : 1;
    }
    if (req.query.email) {
      sortParams.email = req.query.email === 'desc' ? -1 : 1;
    }
    if (req.query.username) {
      sortParams.username = req.query.username === 'desc' ? -1 : 1;
    }
    const getallCustomers = 
                          await Customers
                          .find()
                          .sort(sortParams);
    res.status(200).send({
      total : getallCustomers.length,
      message : "all customers fetched successfully",
      status : 1,
      data : getallCustomers
    })
  }catch(err){
    res.status(500).send({
      message : "no customers fetched",
      status : 0
    })
  }
}

const getCustomerDetails = async (req,res,next) => {
  const customerId = req.params.id;
try{
  const customerDetails = await Customers.findOne({_id : customerId})
  res.status(200).send({ 
    message : "Customer Details Fetched" , 
    status : 1 , 
    data : customerDetails
  })
}catch(err){
  res.status(500).send({ 
    message : "no Customer Details" , 
    status : 0
  })
}
}

const updateCustomer = async (req,res,next) => {
  const customerId = req.params.id;
try{
  const { name ,username , profilePicture} = req.body
  const updatedCustomer = await Customers.findByIdAndUpdate(
    {_id : customerId},
    {$set : {
      name : name,
      username : username,
      profilePicture : profilePicture
    }},
    {new : true}
  )
  res.status(200).send({ 
    message : "Customer updated successfully" , 
    status : 1 , 
    data : updatedCustomer
  })
}catch(err){
  res.status(500).send({ 
    message : "Customer not updated successfully" , 
    status : 0 
  })
}
}

const deleteCustomer = async (req,res,next) => {
  const customerId = req.params.id;
try{
  const checkCustomer = await Customers.find({_id : customerId });
  if(checkCustomer.length == 0){
    return res.status(404).send({ message : "No Customer found" , status : 0})
  }

   await Customers.deleteOne({_id : customerId});
  res.status(200).send({
    message : "Customer deleted successfully",
    status : 1
  })
}catch(err){
  res.status(200).send({
    message : "No Customer deleted",
    status : 0
  })
}
}

module.exports = {
  createCustomer,
  getallCustomer,
  getCustomerDetails,
  updateCustomer,
  deleteCustomer
};
