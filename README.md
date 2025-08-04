<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ellipj

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [Jacobi elliptic functions][jacobi-elliptic] sn, cn, and dn.

<section class="intro">

The [Jacobi elliptic functions][jacobi-elliptic] may be defined as the inverse of the [incomplete elliptic integral of the first kind][incomplete-elliptic]. Accordingly, they compute the value `φ` which satisfies the equation

<!-- <equation class="equation" label="eq:incomplete_elliptic_integral_first_kind" align="center" raw="u=\int_{0}^{\varphi}{\frac {\mathrm{d} \theta }{\sqrt {1-m\sin^{2}\theta }}}" alt="Incomplete elliptic integral of the first kind"> -->

<!-- </equation> -->

where the parameter `m` is related to the modulus `k` by `m = k^2`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-ellipj
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ellipj = require( '@stdlib/math-base-special-ellipj' );
```

#### ellipj( u, m )

Computes the [Jacobi elliptic functions][jacobi-elliptic] functions `sn`, `cn`, and `dn`, and the Jacobi amplitude `am`.

```javascript
var v = ellipj( 0.3, 0.5 );
// returns [ ~0.293, ~0.956, ~0.978, ~0.298 ]

v = ellipj( 0.0, 0.0 );
// returns [ ~0.0, ~1.0, ~1.0, ~0.0 ]

v = ellipj( Infinity, 1.0 );
// returns [ ~1.0, ~0.0, ~0.0, ~1.571 ]

v = ellipj( 0.0, -2.0 );
// returns [ ~0.0, ~1.0, ~1.0, NaN ]

v = ellipj( NaN, NaN );
// returns [ NaN, NaN, NaN, NaN ]
```

#### ellipj.assign( u, m, out, stride, offset )

Computes the Jacobi elliptic functions `sn`, `cn`, `dn`, and Jacobi amplitude `am` and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 4 );

var v = ellipj.assign( 0.0, 0.0, out, 1, 0 );
// returns <Float64Array>[ ~0.0, ~1.0, ~1.0, ~0.0 ]

var bool = ( v === out );
// returns true
```

#### ellipj.sn( u, m )

Computes the Jacobi elliptic function `sn` of value `u` with modulus `m`.

```javascript
var v = ellipj.sn( 0.3, 0.5 );
// returns ~0.293
```

#### ellipj.cn( u, m )

Computes the Jacobi elliptic function `cn` of value `u` with modulus `m`.

```javascript
var v = ellipj.cn( 0.3, 0.5 );
// returns ~0.956
```

#### ellipj.dn( u, m )

Computes the Jacobi elliptic function `dn` of value `u` with modulus `m`.

```javascript
var v = ellipj.dn( 0.3, 0.5 );
// returns ~0.978
```

#### ellipj.am( u, m )

Computes the Jacobi amplitude `am` of value `u` with modulus `m`.

```javascript
var v = ellipj.am( 0.3, 0.5 );
// returns ~0.298

v = ellipj.am( 0.3, 2.0 );
// returns NaN
```

Although `sn`, `cn`, and `dn` may be computed for `-∞ < m < ∞`, the domain of `am` is `0 ≤ m ≤ 1`. For `m < 0` or `m > 1`, the function returns `NaN`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Functions `sn`, `cn`, and `dn` are valid for `-∞ < m < ∞`. Values for `m < 0` or `m > 1` are computed in terms of Jacobi elliptic functions with `0 < m < 1` via the transformations outlined in Equations 16.13 and 16.15 from _The Handbook of Mathematical Functions_ (Abramowitz and Stegun).
-   If more than one of `sn`, `cn`, `dn`, or `am` is to be computed, preferring using `ellipj` to compute all four values simultaneously.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var ellipk = require( '@stdlib/math-base-special-ellipk' );
var ellipj = require( '@stdlib/math-base-special-ellipj' );

var m = 0.7;
var u = linspace( 0.0, ellipk( m ), 100 );

var out;
var i;
for ( i = 0; i < 100; i++ ) {
    out = ellipj( u[ i ], m );
    console.log( 'sn(%d, %d) = %d', u[ i ], m, out[ 0 ] );
    console.log( 'cn(%d, %d) = %d', u[ i ], m, out[ 1 ] );
    console.log( 'dn(%d, %d) = %d', u[ i ], m, out[ 2 ] );
    console.log( 'am(%d, %d) = %d', u[ i ], m, out[ 3 ] );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/ellipj.h"
```

#### stdlib_base_ellipj( x, m, &sn, &cn, &dn, &am )

Computes the [Jacobi elliptic functions][jacobi-elliptic] functions `sn`, `cn`, and `dn`, and the Jacobi amplitude `am`.

```c
double sn;
double cn;
double dn;
double am;

stdlib_base_ellipj( 0.3, 0.5, &sn, &cn, &dn, &am );
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **m**: `[in] double` modulus `m`, equivalent to `k²`.
-   **sn**: `[out] double*` destination for the sine amplitude.
-   **cn**: `[out] double*` destination for the cosine amplitude.
-   **dn**: `[out] double*` destination for the delta amplitude.
-   **am**: `[out] double*` destination for the Jacobi amplitude.

```c
void stdlib_base_ellipj( const double u, const double m, double* sn, double* cn, double* dn, double* am );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/ellipj.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double sn;
    double cn;
    double dn;
    double am;
    double x;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = 2.0 * ( (double)rand() / (double)RAND_MAX );
        stdlib_base_ellipj( x, 0.7, &sn, &cn, &dn, &am );
        printf( "x: %lf, m: %lf => sn: %lf, cn: %lf, dn: %lf, am: %lf\n", x, 0.7, sn, cn, dn, am );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="references">

## References

-   Fukushima, Toshio. 2009. "Fast computation of complete elliptic integrals and Jacobian elliptic functions." _Celestial Mechanics and Dynamical Astronomy_ 105 (4): 305. doi:[10.1007/s10569-009-9228-z][@fukushima:2009a].
-   Fukushima, Toshio. 2015. "Precise and fast computation of complete elliptic integrals by piecewise minimax rational function approximation." _Journal of Computational and Applied Mathematics_ 282 (July): 71–76. doi:[10.1016/j.cam.2014.12.038][@fukushima:2015a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/ellipe`][@stdlib/math/base/special/ellipe]</span><span class="delimiter">: </span><span class="description">compute the complete elliptic integral of the second kind.</span>
-   <span class="package-name">[`@stdlib/math-base/special/ellipk`][@stdlib/math/base/special/ellipk]</span><span class="delimiter">: </span><span class="description">compute the complete elliptic integral of the first kind.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-ellipj.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-ellipj

[test-image]: https://github.com/stdlib-js/math-base-special-ellipj/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-ellipj/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-ellipj/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-ellipj?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-ellipj.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-ellipj/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-ellipj/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-ellipj/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-ellipj/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-ellipj/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-ellipj/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-ellipj/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-ellipj/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-ellipj/main/LICENSE

[jacobi-elliptic]: https://en.wikipedia.org/wiki/Jacobi_elliptic_functions

[incomplete-elliptic]: https://en.wikipedia.org/wiki/Elliptic_integral

[@fukushima:2009a]: https://doi.org/10.1007/s10569-009-9228-z

[@fukushima:2015a]: https://doi.org/10.1016/j.cam.2014.12.038

<!-- <related-links> -->

[@stdlib/math/base/special/ellipe]: https://github.com/stdlib-js/math-base-special-ellipe

[@stdlib/math/base/special/ellipk]: https://github.com/stdlib-js/math-base-special-ellipk

<!-- </related-links> -->

</section>

<!-- /.links -->
