# addon's /vendor folder

Files inside addon's `/vendor` folder are available on the build process and can be used inside the `included` hook of the addon.

Read more about this behavior on https://ember-cli.com/extending/#importing-dependency-files

_This is part of [ember-addon-examples](https://github.com/san650/ember-addon-examples)_

## Example

First we include in the addon the files we want to have available during the
build process

<table>
  <tr>
    <th>source</th>
  </tr>
  <tr>
    <td>
      Look at the file structure and notice that we're adding a couple of files
      to /vendor folder.
    </td>
  </tr>
  <tr>
    <td>
      <pre>
.
├── LICENSE.md
├── README.md
├── addon
├── app
├── bower.json
├── config
│   └── ...
├── ember-cli-build.js
├── index.js
├── package.json
├── public
├── testem.js
├── tests
│   └── ...
└── vendor
    ├── example.css -----> We're adding these files
    └── example.js
      </pre>
    </td>
  </tr>
</table>

Then we configure the build by editing the `index.js` file and telling ember-cli's
build process to include these files. Note that ember-cli knows how to include
`.js` and `.css` files.

```js
module.exports = {
  name: 'addon-02-vendor-folder',

  included(app) {
    app.import('vendor/example.js');
    app.import('vendor/example.css');
  }
};
```

After the build of the application, the content of those files will be appendend
in `vendor.css` and `vendor.js` files.

```
dist/
├── assets
│   ├── my-awesome-application.css
│   ├── my-awesome-application.js
│   ├── my-awesome-application.map
│   ├── failed.png
│   ├── passed.png
│   ├── test-support.css
│   ├── test-support.js
│   ├── test-support.map
│   ├── tests.js
│   ├── tests.map
│   ├── vendor.css  <---- example.css was appended here
│   ├── vendor.js   <---- example.js was appended here
│   └── vendor.map
├── crossdomain.xml
├── index.html
├── robots.txt
├── testem.js
└── tests
    └── index.html
```

## Try it out

### Installation

```
$ npm install
$ bower install
```

### Running

```
$ ember server
```

Then visit http://localhost:4200/addon-01-public-folder/example.txt

### Running Tests

```
$ ember test
```

### Building

```
$ ember build
```

## License

ember-addon-examples is licensed under the MIT license.

See [LICENSE](../LICENSE.md) for the full license text.
