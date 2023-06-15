// Creating a new promise that runs the function in the setTimeout after 5 seconds.
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("All done!"), 5000);
});

// Creating an asynchronous function using an arrow expression and saving it to a the variable asyncFunction.
const asyncFunction = async () => {
  // Awaiting the promise to resolve and saving the result to the variable finalResult.
  const finalResult = await newPromise;
 
  // Logging the result of the promise to the console
  console.log(finalResult); // Output: All done!
}
 
asyncFunction();
