# Caesar Cipher CLI Tool

This is a command line (CLI) application. It encodes/decodes text using [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher). Only English alphabet letters are encrypted, all other characters kept untouched. Shift can be greater than alphabet lenth, lower than zero. Input text could be from input file or `stdin`, output could be written to output file or `stdout`.


## How to Install

To run this application, you should perform the next steps:  
1. Downlowd code from the [nodejs-rsschool](https://github.com/IlyaKozak/nodejs-rsschool) repository [caesar-cipher-cli-tool](https://github.com/IlyaKozak/nodejs-rsschool/tree/caesar-cipher-cli-tool) branch: [click to download](https://github.com/IlyaKozak/nodejs-rsschool/archive/refs/heads/caesar-cipher-cli-tool.zip)  
2. Unzip nodejs-rsschool-caesar-cipher-cli-tool.zip archive
3. Open the terminal and change directory to the application folder (contains file caesar-cipher-cli.js)
4. Run the command "npm install" or "npm i" to install all dependencies
5. You can start using the application

## How to Use

You should run the application with the next **required** options:
| Option | Description |
|--------|-------------|
| _-a, --action "encode" (or "decode")_ | choose action (encode or decode) |
| _-s, --shift "integer number"_ | choose cipher's key - shift value |  
  
You can run the application with the next _optional_ options: 
| Option | Description |
|--------|-------------|
| _-i, --input "filepath"_ | choose input file (default input from `stdin`) | 
| _-o, --output "filepath"_ | choose output file (default output to `stdout`) | 
| _-h, --help_ | display help |

## Examples

1. _-a (--action)_ is **encode**  

```bash
$ node caesar-cipher-cli.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
> input.txt  
> `This is secret. Message about "_" symbol!`

> output.txt  
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_ is **decode**  

_Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ node caesar-cipher-cli.js --action decode --shift 7 --input encoded.txt --output decoded.txt
```
> encoded.txt  
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> decoded.txt  
> `This is secret. Message about "_" symbol!`

3. Negative shift handling

```bash
$ node caesar-cipher-cli.js --action encode --shift -1 --input plain-negative.txt --output encoded-negative.txt
```

> plain-negative.txt  
> `This is secret. Message about "_" symbol!`

> encoded-negative.txt  
> `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`