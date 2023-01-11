module.exports ={
    //ESLint new settings
    env:{ //Environment Settings
        browser: true,
        amd:true,
        node:true,
        es6:true,
    },
    extends:[ //recomendaciones clave para entender en el proyecto de next
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "next",
        "next/core-web-vitals",
    ],
    parser: '@typescript-eslint/parser',
    plugins: [],
    rules:{
        semi:["error","always"],
    },
    root: true,
}