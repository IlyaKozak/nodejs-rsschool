# Caesar Cipher CLI Tool


Encodes and decodes a text by Caesar cipher.

To get started: npm install
To get help: npm start or node caesar-cipher-cli --help

You can Options:
  -a, --action <encode|decode>  action type (required) (choices: "encode", "decode")
  -s, --shift <number>          shift value (required)
  -i, --input <filepath>        input file (optional)
  -o, --output <filepath>       output file (optional)
  -h, --help                    display help for command

**Usage example:**  
1. _-a (--action)_ is **encode**

```bash
$ node caesar-cipher-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

```bash
$ node caesar-cipher-cli --action encode --shift 7 --input plain.txt --output encoded.txt
```
> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_ is **decode**  
_Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ node caesar-cipher-cli --action decode --shift 7 --input encoded.txt --output de.txt
```
coded
> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> decoded.txt
> `This is secret. Message about "_" symbol!`

3. _(Optional) Negative shift handling_

```bash
$ node caesar-cipher-cli --action encode --shift -1 --input plain-negative.txt --output encoded-negative.txt
```

> plain-negative.txt
> `This is secret. Message about "_" symbol!`

> encoded-negative.txt
> `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`