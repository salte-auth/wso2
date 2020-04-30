<h3 align="center">
	NOTE: This repository is currently a work in progress and shouldn't be used!
</h3>

<h2 align="center">
  <div>
    <a href="https://github.com/salte-auth/wso2">
      <img height="180px" src="https://raw.githubusercontent.com/salte-auth/logos/master/images/logo.svg?sanitize=true">
      <br>
      <br>
      <img height="50px" src="https://raw.githubusercontent.com/salte-auth/logos/master/images/%40salte-auth/wso2.svg?sanitize=true">
    </a>
  </div>
</h2>

<h3 align="center">
	A Salte Auth provider for authenticating with WSO2!
</h3>

<p align="center">
	<strong>
		<a href="https://salte-auth.github.io/salte-auth">Docs</a>
		•
		<a href="https://salte-auth-demo.glitch.me">Demo</a>
	</strong>
</p>

<div align="center">

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Downloads][npm-downloads-image]][npm-url]
  [![Travis][travis-ci-image]][travis-ci-url]
  [![Coveralls][coveralls-image]][coveralls-url]

  [![semantic-release][semantic-release-image]][semantic-release-url]

</div>

## Install

```sh
$ npm install @salte-auth/wso2
```

## Usage

```js
import { SalteAuth } from '@salte-auth/salte-auth';
import { WSO2 } from '@salte-auth/wso2';
import { Redirect } from '@salte-auth/redirect';

const auth = new SalteAuth({
  providers: [
    new WSO2({
      url: 'https://wso2.salte.io',
      clientID: '5h3_E8sO839B9DZBkJIOz9RVziQa'
    })
  ],

  handlers: [
    new Redirect({
      default: true
    })
  ]
});

auth.login('wso2');
```

[npm-version-image]: https://img.shields.io/npm/v/@salte-auth/wso2.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/@salte-auth/wso2.svg?style=flat
[npm-url]: https://npmjs.org/package/@salte-auth/wso2

[travis-ci-image]: https://img.shields.io/travis/com/salte-auth/wso2/master.svg?style=flat
[travis-ci-url]: https://travis-ci.com/salte-auth/wso2

[coveralls-image]: https://img.shields.io/coveralls/salte-auth/wso2/master.svg
[coveralls-url]: https://coveralls.io/github/salte-auth/wso2?branch=master

[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: https://commitizen.github.io/cz-cli/

[semantic-release-url]: https://github.com/semantic-release/semantic-release
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
