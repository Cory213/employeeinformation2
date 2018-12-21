# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

Thoughts after writing this test app:

-Angular seems a lot easier to organize but at the same time requires more explicit fluff when doing certain things unlike angularJS, probably because of typescript. Talking primarily about how angry the app seems to get when you are referencing variables in the HTML that weren't properly initialized or within an included object class.

-For some things like ng-model(angularJS) and [(ngModel)](Angular) it's really as simple as swapping how you write it in the html, but for other things like form validation (which I have next to none of in this test app besides some data initialization to avoid errors) based off my reading seem to be totally different and in a way that isn't as straightforward, but then again we have so few fields in the app due to what we're dealing with that we usually don't just require fields but require specific formats and not allow some things etc. so that's not really a problem.

-We can do some things more conveniently and easier with observables over promises, but I cant think of too many immediate uses unlike something like EP which uses observables in ways like constant updating of user notifications for stuff like messages, PTO requests (I assume) and other things. Observables are really easy to understand, though.

-Before learning about better ways to use bootstrap recently I have some bad forced margins on buttons but also use stuff like the mt, mr stuff in bootstrap but left it in in the interest of time since it's a test app.
