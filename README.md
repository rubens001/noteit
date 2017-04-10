## Angular 4 & Material 2 & Fontawesome & Flex-layout

### DEPENDENCIES : need node version 6.x+ AND @angular/cli

#### @angular/cli install

```sh
$ npm install -g @angular/cli
OR
$ sudo npm install -g @angular/cli
```

## START
```sh
$ npm install
$ ng serve
http://localhost:4200
```

## DEMO : [https://fullstack-c6c9e.firebaseapp.com/html/noteit/](https://fullstack-c6c9e.firebaseapp.com/html/noteit/)

## Refs

```
https://material.angular.io/components
https://github.com/angular/material2/blob/master/guides/getting-started.md
```

## Font Awesome

```
$ npm install font-awesome --save
In styles.css : @import '~font-awesome/css/font-awesome.css';
```

## Responsive Flex

```
$ npm install @angular/flex-layout --save
import {FlexLayoutModule} from "@angular/flex-layout";
FlexLayoutModule
```

## Refs

#### flex-layout :  [https://github.com/angular/flex-layout](https://github.com/angular/flex-layout)
#### flex wiki :  [https://github.com/angular/flex-layout/wiki](https://github.com/angular/flex-layout/wiki)
#### flex doc : [https://tburleson-layouts-demos.firebaseapp.com/#/docs](https://tburleson-layouts-demos.firebaseapp.com/#/docs)
#### flex demo : [https://tburleson-layouts-demos.firebaseapp.com/#/responsive](https://tburleson-layouts-demos.firebaseapp.com/#/responsive)
#### responsive wiki : [https://github.com/angular/flex-layout/wiki/Responsive-API](https://github.com/angular/flex-layout/wiki/Responsive-API)

## Themes

```
left some css in /src/app/theme
change them in /src/styles.css
```