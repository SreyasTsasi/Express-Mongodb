import UserSchema from "./schemas/userschemas.js";

export async function setData(req ,res) {
    try{
         let {id,name} =req.body;
         let result= await UserSchema.create({id,name})
         res.status(200).send(result);
    }catch  (error) {
      console.log(error);
      res.json("ERROR")
    }
}
export async function getData(req,res){
try {
     let data = await UserSchema.find();
     res.json(data);
} catch (error) {
  console.log(error);
  res.status(500).send("some error");
}

}
export async function updateData(req,res) {
  try {
    let {id} = req.query;
    let data = req.body;
    let result = await UserSchema.updateOne({_id: id},data);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.jsom("some error occured");
    
  }
}
export async function deleteData(req,res) {
  try {
    let {id} =req.query;
    let result=await UserSchema.deleteOne({_id: id})
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json("some errors occured")
    
  }
}


export function users(req ,res) {
  try{
       let id=req.params
       console.log(id);
       console.log(req.query)
       res.status(200).send("data")
  }catch  (error) {
    console.log(error);
    res.json("ERROR")
  }
}


