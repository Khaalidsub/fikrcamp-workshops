// url : https://jsonplaceholder.typicode.com/posts
// note: use experimantal fetch: node  --experimental-fetch

// PROMISES

// inferred
// fetch within a function using this url
async function getPosts() {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return result.json();
}
// fetch within a function using this url and console log it
getPosts().then(console.log);

// explicitly typed
// fetch within a function using this url
async function getPostsExplicitly(): Promise<
  {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[]
> {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return result.json();
}
// fetch within a function using this url and console log it
getPostsExplicitly().then((posts) => {
  posts.map((post) => console.log(`post ${post.id}`, post));
});
