Using Native ECMAScript Modules in Node.js

Now we want our JavAScript Node.js files to use the ECMAScript modules

ECMAScript Modules in Node.js

Watch Video: How to Setup Node.js with TypeScript in 2023

Before we transpile the program we will have make some changes

In the tsconfig.json set module and moduleResolution

    "module": "nodenext",
    "moduleResolution": "NodeNext", 
    "target": "es2020",     


In the package.json add 

    "type": "module"
    
    
In the import use .js file extension instead of just using "./second":

    import {b, c} from "./second.js";


Additional Reading:

Understanding TypeScript 4.7 and ECMAScript Module support

TypeScript and native ESM on Node.js

Note: Give the following command to transpile the code

    tsc 

If you give the following command to transpile the code, the js file will not run

    tsc app.ts

You will get the following error when you run the code:

node app.js


file:///Users/ZiaKhan/Documents/GitHub/learn-typescript/step03b_native_ECMAScript_modules/app.js:2

exports.__esModule = true; ^

ReferenceError: exports is not defined in ES module scope This file is being treated as an ES module because it has a '.js' file extension and '/Users/ZiaKhan/Documents/GitHub/learn-typescript/step03b_native_ECMAScript_modules/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension. at file:///Users/ZiaKhan/Documents/GitHub/learn-typescript/step03b_native_ECMAScript_modules/app.js:2:1 at ModuleJob.run (node:internal/modules/esm/module_job:194:25)

Node.js v19.1.0