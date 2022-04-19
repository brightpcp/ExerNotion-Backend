const Activity = require('../model/Activity')

// show list all activity

const getAllActivities = async(req, res, next) =>{
    let activity;
    try{
        activity = await Activity.find();
    } catch(err){
        console.log(err);
    }

    if(!activity){
        return res.status(404).json({message:"No activities found"})
    }
    return res.status(200).json({activity});
};

// show  record by activity

const getById = async (req, res, next) =>{
    const id = req.params.id;
    let activity;
    try {
        activity = await Activity.findById(id);
    } catch (err) {
        console.log(err);
    }
    if(!activity){
        return res.status(404).json({message:"No activity found"})
    }
    return res.status(200).json({activity});
};





// create activity  

const addActivity = async (req, res, next) => {
    const { name, date, type, duration, description} = req.body;
    let activity;
    try {
        activity = new Activity({
            name, 
            date, 
            type, 
            duration, 
            description
        });
        await activity.save();
        } catch (err) {
        console.log(err);
    }

 if (!activity) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ activity });
};

// update activity by id

const updateActivity = async(req, res, next) => {
    const id = req.params.id;
    const { name, date, type, duration, description} = req.body;
    let activity;
    try{
        activity = await Activity.findByIdAndUpdate(id, {
            name, 
            date, 
            type, 
            duration, 
            description
        });
        activity = await activity.save()
    } catch (err){
        console.log(err);
    }
    if (!activity) {
        return res.status(404).json({ message: "Unable To Update" });
      }
      return res.status(200).json({ activity });
}

// delete activity by id

const deleteActivity = async(req, res, next) => {
    const id = req.params.id;
    let activity;
    try{
        activity = await Activity.findByIdAndRemove(id);
    } catch (err){
        console.log(err);
    }
    if (!activity) {
        return res.status(404).json({ message: "Unable To Delete By this ID" });
      }
      return res.status(200).json({ message: "Activities Successfully Deleted" });
}




exports.getAllActivities = getAllActivities;
exports.addActivity = addActivity;
exports.getById = getById;
exports.updateActivity = updateActivity;
exports.deleteActivity = deleteActivity;