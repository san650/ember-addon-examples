# addon's /public folder

Files inside addon's `/public` folder are copied to `/<my-addon>/` folder at build time where `<my-addon>` is replaced by your addon's name.

You can reference these files from your project using a full path `/<my-addon>/a-file.xyz`.

Try this out by running `ember server` in your addon and navigating to `http://localhost:4200/<addon-name>/a-file.xyz`

Read more about this behavior on https://ember-cli.com/extending/#importing-static-files

_This is part of [ember-addon-examples](https://github.com/san650/ember-addon-examples)_

## Example


<table>
  <tr>
    <th>source</th>
    <th>build</th>
  </tr>
  <tr>
    <td>
      Look at the file structure and notice that we're adding a
      /public/example.txt file.
    </td>
    <td>
      This file is then copied to /addon-01-public-folder/<wbr>example.txt
      folder.
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
│   └── example.txt -----> This is the
├── testem.js              file we're
├── tests                  adding
│   └── ...
└── vendor
      </pre>
    </td>
    <td valign="top">
      <pre>
.
├── addon-01-public-folder
│   └── example.txt -----> This is where
├── assets                 it's copied
│   └── ...
├── crossdomain.xml
├── index.html
├── robots.txt
├── testem.js
└── tests
    └── index.html
      </pre>
    </td>
  </tr>
</table>

Folders inside /public folder will be also copied.

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
