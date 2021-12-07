# :thought_balloon: Blueprint react , webpack and jest app (SSR / HMR)
This repo contains a blueprint for building React web applications with webpack, jest, babel.... Using this repo you can quickly get started and extend it with additional building blocks. 

 👀You can try this - https://codesandbox.io/s/github/Malyshevv/blueprint-react-webpack-jest-app

# :writing_hand: Getting started
- clone this repo
- in the command line run
```
$ npm i
```
- to start the web application run:
```
$ npm start
```
- in your web browser navigate to `https://localhost:3000`

# 	:robot: We have in this blueprint  :robot:
  - react :partying_face:
  - webpack :smiling_face_with_three_hearts:
  - jest :stuck_out_tongue_winking_eye:
  - babel :disguised_face:
  - hmr :sunglasses:

:speech_balloon: Others: 
  - react-router-dom v6
  - axios
  - file-loader
  - css-loader
  - react-redux
  - formik
  - helmet
  - compression
  - enzyme
  - postcss
  - moment-timezone
  - classnames
  - reach/dialog

# :heartpulse: Create new components in shared :heartpulse:
- Go https://www.npmjs.com/package/generator-react-ts-component-dir
```
npm install -g yo
npm install -g generator-react-ts-component-dir
```
- use this
``` 
yo react-ts-component-dir NAME_COMPONENTS .\src\shared\
```

# 🥸 Api for this app
🤯If you needed fast up api for app , you can use my blueprint api app🤯

- Api ``(nodejs,express, mongodb)`` https://github.com/Malyshevv/api-nodejs-express-mysql
- Api ``(nodejs,express, mysql)`` https://github.com/Malyshevv/api-nodejs-express-mysql


# :electric_plug: Troubleshooting

if you get error - ` ReferenceError: document is not defined `

Example fix
```
function AppComponent() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <div>
            {mounted && (
                <BrowserRouter>
                    <Main/>
                </BrowserRouter>
            )}
        </div>
    );
}
```

# 🥶 Include Eslinterc  🤬

Setup manual - https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba

Eslinterc config (.eslinterc.json)

```
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint"
    ],
    "rules": {
        "no-use-before-define": "off",
        "import/prefer-default-export": "off",
        "react/prop-types": "off",
        "func-names": "off",
        "react/require-default-props": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/explicit-function-return-type": "off",
        /*"@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                "allowExpressions": true
            }
        ],*/
        "react/jsx-filename-extension": [ "warn", {"extensions": [".tsx"]} ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "ts": "never",
                "tsx": "never"
            }
        ]
    },
    "settings": {
        "import/resolver": {
            "typescript": {}
        }
    }
}
```
