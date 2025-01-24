# Example Project Mocha

This is an example Project how to use AskUI together with [Mocha](https://mochajs.org/)

# Usage

1. Open AskUI Shell with 
```scripts
askui-shell
```

2. Checkout repo 
```scripts
git clone git@github.com:askui/askui-example-mocha.git
```
3. Open VS project 
```script
mkdir askui-mocha-demo
cd askui-mocha-demo
code .
```
2. Set Access Token (You can it get it from [here](https://app.askui.com/)) 
```scripts
AskUI-SetSettings -WorkspaceID <WORKSPACE_ID> -Token <TOKEN>
```

3. Start Controller
```scriupts
AskUI-StartController -RunInBackground
```

3. Run Porject
```scripts
npm run test
```
