const axios = require("axios");
const staticUrl = "http://localhost:8081/";

let getAllAchievements = async function getAllAchievements() {
    axios.get(staticUrl+"achievement/getAll")
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call Achievement Function")
        });
}

let getAchievementById = async function getAchievementdById(id) {
    axios.get(staticUrl+"achievement/get/"+id)
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call Achievement Function");
        });
}

let createNewAchievement = async function createAchievement(name,description,imagePath,toFullFillDescription,toFullFillValue=1,timeLimit=null) {
    axios.post(staticUrl+"achievement/set/",{
        name: name,
        description: description,
        imagePath: imagePath,
        toFullFillDescription: toFullFillDescription,
        toFullFillValue: toFullFillValue,
        timeLimit: timeLimit,
    })
        .then(response => {
            console.log(response.data.toString())
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call setAchievementFunction Function");
        });
}

let deleteAchievement = async function deleteAchievement(id){
    axios.delete(staticUrl+"achievement/delete"+id)
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call deleteAchievement Function");
        });
}

let updateAchievement = async function updateAchievement(id,achievement){
    axios.put(staticUrl+"achievement/update"+id,{
        id: id,
        name: achievement.name,
        description: achievement.description,
        imagePath: achievement.imagePath,
        toFullFillDescription: achievement.toFullFillDescription,
        toFullFillValue: achievement.toFullFillValue,
        timeLimit: achievement.timeLimit
    })
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call updateAchievement Function");
        });
}







//AchievementByUserCode

let setNewAchievementByUser = async function setNewAchievementByUser(achievementId,userId,currentFullFilledValue,fulfilled) {
    axios.post(staticUrl+"achievementByUser/set",{
        achievementId: achievementId,
        userId: userId,
        currentFullFilledValue: currentFullFilledValue,
        fulfilled: fulfilled,
    })
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call AddUsersToLeaderBoard Function");
        });
}

let getAllAchievementByUsers = async function getAllAchievementByUsers() {
    axios.get(staticUrl+"achievementByUser/getAll")
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call AchievementByUser Function")
        });
}

let getAchievementByUserById = async function getAchievementByUserdById(id) {
    axios.get(staticUrl+"achievementByUser/get/"+id)
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call getAchievementByUserById Function");
        });
}

let updateAchievementByUserPoints = async function updateAchievementByUserPoints(achievementByUserId,points) {
    axios.put(staticUrl+"achievementByUser/updateProgress/"+ achievementByUserId + "/" + points )
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call updateAchievementPoints Function");
        });
}

let deleteAchievementByUser = async function deleteAchievementByUser(id){
    axios.delete(staticUrl+"achievementByUser/delete"+id)
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call deleteAchievementByUser Function");
        });
}
let updateAchievementByUser = async function updateAchievementByUser(id,achievementByUser){
    axios.put(staticUrl+"achievementByUser/update"+id,{
        id: id,
        achievementId: achievementByUser.achievementId,
        userId: achievementByUser.userId,
        currentFullFilledValue: achievementByUser.currentFullFilledValue,
        fulfilled: achievementByUser.fulfilled,
    })
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call updateAchievementByUser Function");
        });
}

let getAchievementsOfUser = async function getAllAchievementsOfUser(userId) {
    axios.get(staticUrl+"/achievementByUser/getAllAchievementsOfUser/"+ userId)
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call getAchievementOfUser Function");
        });
}

let getAchievementByUserByUserIdAndAchievementId = async function getAchievementByUserByUserIdAndAchievementId(userId,achievementId) {
    axios.get(staticUrl+"/achievementByUser/getAllAchievementsOfUser/"+ userId+"/"+achievementId)
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call getAchievementByUserByUserIdAndAchievementId Function");
        });
}

module.exports = {

    createNewAchievement: createNewAchievement,
    getAllAchievements: getAllAchievements,
    getAchievementById: getAchievementById,
    deleteAchievement: deleteAchievement,
    updateAchievement: updateAchievement,
    
    setNewAchievementByUser: setNewAchievementByUser,
    getAllAchievementByUsers: getAllAchievementByUsers,
    getAchievementByUserById: getAchievementByUserById,
    deleteAchievementByUser: deleteAchievementByUser,
    updateAchievementByUser: updateAchievementByUser,
    getAchievementByUserByUserIdAndAchievementId: getAchievementByUserByUserIdAndAchievementId,
    getAchievementsOfUser: getAchievementsOfUser,
}