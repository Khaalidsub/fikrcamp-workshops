// url : https://jsonplaceholder.typicode.com/posts
// note: use experimantal fetch: node  --experimental-fetch

const url = "https://jsonplaceholder.typicode.com/posts";
// PROMISES
// inferred
// fetch within a function using this url
// fetch within a function using this url and console log it
async function getPosts(): Promise<
  { userId: number; id: number; title: string; body: string }[]
> {
  const response = await fetch(url);
  return response.json();
}

getPosts().then(console.log);

// explicitly typed
// fetch within a function using this url
async function getPost(id: number) {
  //option 1 initialize the object result with an object array
  // const result:{userId:number,id:number,title:string,body:string}[] = await getPosts()
  //return result

  // option 2 type the getPosts with a promise and an object array
  // const result = await getPosts()
  // return result
}
