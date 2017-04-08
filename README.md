
```
Projeto Angular Material 2
```
# Referencia

## https://material.angular.io/components

## https://github.com/angular/material2/blob/master/guides/getting-started.md

npm install --save @angular/material

Guide : https://github.com/angular/material2/blob/master/guides/getting-started.md

dependencia : npm install --save @angular/animations

P: Unexpected module 'BrowserAnimationsModule' declared by the module 'AppModule'. Please add a @Pipe/@Directive/@Component annotation
R: tem que colocar na seção de "imports".

P : Ao utilizar alguns componentes
Error: Found the synthetic listener @translateTab.start. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.

R : em app.module.ts : import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
e nos "imports" : BrowserAnimationsModule

P: nao executaram as tags
R: npm install --save hammerjs

tinha faltado :
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

ref legal: http://www.mithunvp.com/angular-material-2-angular-cli-webpack/

P : coloquei md-input
ERROR Error: Uncaught (in promise): Error: md-input-container must contain an mdInput directive. Did you forget to add mdInput to the native input or textarea element?

<md-input-container>
    <input md-input placeholder="E-Mail" type="text" name="email" required [(ngModel)]="email">
</md-input-container>

R : passou a ser : input mdInput
<md-input-container>
    <input mdInput placeholder="E-Mail" type="text" name="email" required [(ngModel)]="email">
</md-input-container>

Nova ref do input :
https://github.com/angular/material2/blob/master/src/lib/input/input.md

P : autocomplete - Can't bind to 'formControl' since it isn't a known property of 'input'
R : faltava : ReactiveFormsModule

===========
ng g component feature/navbar
ng g component feature/home
ng g component feature/page-not-found

===========

Angular Material Color Generator :
https://angular-md-color.com/#/

Ref : https://github.com/angular/material2/blob/master/guides/theming.md

Criado : /src/unicorn-app-theme.scss
npm install -g node-sass
gerado css :
node-sass src/app/theme/unicorn-app-theme.scss src/app/theme/unicorn-app-theme.css
node-sass src/app/theme/unicorn-dark-theme.scss src/app/theme/unicorn-dark-theme.css
colocado em styles.css
@import './app/theme/unicorn-app-theme.css';
ou @import './app/theme/unicorn-dark-theme.css';

Para ver a paleta de cores:
node_modules/@angular/material/core/theming/_palette.scss

=========== Font Awesome

npm install font-awesome --save
em styles.css : @import '~font-awesome/css/font-awesome.css';

===========

styles.css:
@import "../node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css";

index.html:
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

ng serve -> server lite

========= Responsive Flex

npm install @angular/flex-layout --save
import {FlexLayoutModule} from "@angular/flex-layout";
FlexLayoutModule

# https://github.com/angular/flex-layout
# https://github.com/angular/flex-layout/wiki
# doc https://tburleson-layouts-demos.firebaseapp.com/#/docs
# demo https://tburleson-layouts-demos.firebaseapp.com/#/responsive
# wiki responsivo https://github.com/angular/flex-layout/wiki/Responsive-API

# navbar http://www.dzurico.com/angular-flex-layout/

git clone https://github.com/angular/flex-layout.git
npm install
gulp build:release

========= server

Para criar servidor :
npm install --save express body-parser

criar server.js para poder :
node server.js

Entretanto, server.js servirá a partir do diretorio "dist" (equivalente ao que seria meu padrão public)
No entanto, para CRIAR conteúdo deste diretório é necessário :

ng build

======================= Node TS

# deps ja instaladas pelo angular-cli
"@types/node": "~6.0.60",
"ts-node": "~2.0.0",
"typescript": "~2.2.0"

O ts-node já está em 2 lugares:
./node_modules/.bin/ts-node
./node_modules/ts-node

# start
./node_modules/.bin/ts-node ./srv/server.ts
ou : npm startn

# Bonus: Live compile + run
npm install nodemon --save-dev

"scripts": {
    "live": "npm run build:live",
    "build:live": "nodemon --exec ./node_modules/.bin/ts-node -- ./srv/server.ts"
  },

# Dica express generator
npm install -g express-generator
express myExpressApp

# Node inspector
$ npm install -g node-inspector

# chamada :
$ node-debug app.js

toggle breaking point : F9

# No VsCode : na barra de debug, botão "settings" cria launch.json
# Ref : https://johnpapa.net/debugging-with-visual-studio-code/
# Debug menu :
F5 continue
F10 step over
F11 step into
SHIFT+F11 step out
SHIFT+F5 stop

# No tsconfig.json está definido : "outDir": "./dist/out-tsc",
./node_modules/typescript/bin/tsc --p tsconfig.json
