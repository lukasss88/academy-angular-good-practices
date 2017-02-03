## Keep Controllers Focused

Define a controller for a view, and try not to reuse the controller for other views. Instead, move reusable logic to factories and keep the controller simple and focused on its view.

_Why?:_ Reusing controllers with several views is brittle and good end-to-end (e2e) test coverage is required to ensure stability across large applications.

## Small Functions

Define small functions, no more than 75 LOC (less is better).

_Why?:_ Small functions are easier to test, especially when they do one thing and serve one purpose.

_Why?:_ Small functions promote reuse.

_Why?:_ Small functions are easier to read.

_Why?:_ Small functions are easier to maintain.

_Why?:_ Small functions help avoid hidden bugs that come with large functions that share variables with external scope, create unwanted closures, or unwanted coupling with dependencies.
