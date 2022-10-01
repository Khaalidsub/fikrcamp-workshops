# What Is Typescript ?

Typescript is javascript with statically typed Types.
Like Java, It will compile the code and transform to a different readable language, which in this case would be javascript(since most of the browsers are not cabable to read typescript, hence the requirement of compiling)
This transformation is called Trans-piling (not necessary to know, but just to keep it consistent with the wordings)

# Why Use Typescript ?

if you code alone, javascript would be enough, since you may know all the function types or object types within the system. But what about other people who do not know about the passings of object types or the return of a function? this is where typescript shines, allowing your code to have types that your team would be able to know what types it is returning. The faster your team is able to understand the system , the faster the project could be developed (not completed since developing a system is a never ending process)
...
Oh yes, did I mention that you will have intellisense

## Installation Setup

First install it globally
`npm install -g typescript`
This will allow you to have the super magically intellisense!

## Vscode Extensions

There is no need since vscode will understand the typescript has been installed and would automatically show you the intellisense

## Table of Content

- Hello world
- primitive types
- inferring types
- objects
- optional types
- functions ( arguments and return types)
- promises
- classes (+inheritence)
- types & interfaces
- enums
- generics
- tsconfig
- a simple project using the express framework

## Hello World

when you need to run a typescript file, you will have to transpile the file first then run the transpiled file.
You can do this by running the command :
`tsc hello.ts`
and run the file using :
`node hello.js`

Or a simpler way is by installing a package called ts-node:
`npm i -g ts-node`
Run the command:
`ts-node hello.ts`

## Tsconfig

To initialize a tsconfiguration, use the command :
tsc --init

This typescript config is a way of configuring how you want your typescript project to be transpiled or behaves. i.e :

- you could enforce your project to return a statically typed function
- you could enforce your arguments should always have types

## Further Reading

- [TypeScript Tutorial for Beginners] https://www.youtube.com/watch?v=d56mG7DezGs
- [Utility Types] https://www.w3schools.com/typescript/typescript_utility_types.php
- [Type Casting] https://www.w3schools.com/typescript/typescript_casting.php
- [React with Typescript] https://blog.logrocket.com/how-use-typescript-react-tutorial-examples/
