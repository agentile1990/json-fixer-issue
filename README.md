# json-fixer-issue

This repo is a minimal example of an unsupported issue using the package [json-fixer](https://www.npmjs.com/package/json-fixer).

## Usage
Run the example:
``` bash
npm run start
```

## Details
Input String:
```
{"weight":.4}
```

Expected Output:
```
{ weight: 0.4 }
```

Actual Output:
```
Error: Unsupported issue: Expected "," or "}" but end of input found. (please open an issue at the repo)
```
