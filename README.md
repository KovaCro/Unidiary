<p align="center">
  <img src="https://github.com/KovaCro/unidiary/blob/master/build/icons/256x256.png" alt="Logo" width="128" height="128">
  <h1 align="center">UNIDIARY</h1>
</p>

Unidiary (university diary) is a project for personal use. I wanted to keep track of the programming we do at university from day one until the end of second year (2020.-2022., later on we stop doing code in form of small snippets which makes it harder to track). Logs always come in handy. I was being uncertain about posting it on github but since I use multiple devices and I store snippets as JSON files, this way it's easier for me to keep it all in sync.

It's built with Vue-electron.

I used filesystem instead of database system; all the snippets are in storage folder. 

(Note: Reading/writing files is synchronous so error checking on it is not best optimised)

## Build setup

If you'd like to use it for yourself, you can remove my files from storage folder (you have to keep config.js).

Install dependencies:
``` bash
npm install # install dependencies
```
Run or build the app:
``` bash
npm run dev # serve with hot reload at localhost:9080
# or
npm run build # build electron application for production
```
## Previews

![Preview1](https://github.com/KovaCro/Unidiary/blob/previews/Preview1.gif?raw=true)

![Preview2](https://github.com/KovaCro/Unidiary/blob/previews/Preview2.gif?raw=true)

![Preview3](https://github.com/KovaCro/Unidiary/blob/previews/Preview3.gif?raw=true)

## License

[MIT](https://choosealicense.com/licenses/mit/)
