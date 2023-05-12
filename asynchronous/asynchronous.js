// Write an asynchronous function that accepts a message string and a 
// delay time in milliseconds. The function should log the message to the
//  console after the specified delay time.
async function logMessage(message,delay){
    await new Promise(resolve=>setTimeout(resolve,delay));
    console.log(message);
}
logMessage("authenticity",6000);


// You have an array of user IDs and a function getUserData(id)
//  that returns a Promise with user data when given a user ID. Write
//  an asynchronous function that fetches and logs the data for each 
// user ID one by one, in sequence.
 async function fetchAndLogs(userIds) {
    for (const userId of userIds) {
      const userInfo = await(userId);
      console.log(userInfo);
    }
  }
  const userIds = [67, 405, 7168];
async function info() {
  try {
    await fetchAndLogs(userIds);
  } catch (e) {
    console.error(e);
  }
}
info();


async function runTask() {
    try {
      await performTask();
      console.log("Task completed successfully!");
    } catch (error) {
      console.error("An error occurred while performing the task:", error);
    }
  }
  
  runTask();
  









