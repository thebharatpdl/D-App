import AsyncStorage from "@react-native-async-storage/async-storage";
export const saveRegistrationProgress =async(screenName,data)=>{
    try{
const key=`register_progress_${screenName}`
await AsyncStorage.setItem(key,JSON.stringify(data))
console.log
    (`Pregress Saved for screen:${screenName}`)
    }
    catch{
        console.log("Error saving the progress")
    }
};
export const getRegistrationProgress=async(screenName)=>{

    try{
        const key=`register_progress_${screenName}`
const data=await AsyncStorage.getItem(key)
return data!==null ? JSON.parse(data):null;
    }
    catch(error){
        console.log("Error Retriving the progress")

    }
}