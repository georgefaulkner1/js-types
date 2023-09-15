# js-types-safety

js-types is a ES6 JavaScript library to implement types to a variable enabling type safety.
Simple library that makes types easy.

## Installation

Use the package manager npm to install js-types.

```bash
npm i@georgefaulkner1/js-type-safety
```
## Usage

```javascript
import Types from "@georgefaulkner1/js-type-safety";

// create type specified variable. Supported types: String, Number, Boolean, Array, Object
let name = new Types(String, "Jeff");

// returns "Jeff"
console.log(name.value);

// change the variable value
name.value = "Bob";

//Includes type safety. So if you attempt to change name.value to anything other than the defined type it will throw an error.

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License
MIT
