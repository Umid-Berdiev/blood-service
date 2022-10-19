### Prerequisites

1. A recent web browser (Chrome, Edge, Firefox, ...)
2. [Nodejs LTS](https://nodejs.org/en/) _(> 16.x with npm >8)_ installed
3. Knowledge with [Typescript](https://github.com/microsoft/typescript) _(> 4.x)_ (should not be installed globally)
4. (recommended) [VSCode](https://code.visualstudio.com/ with [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar)

#### Install nodejs

1. Check if you already have Node.js installed. Run this command in your terminal:

```bash
node -v
```

If node is not installed on your machine, you can go to the official nodejs.org website, and choose the version depending on your operating system:

- <a href="https://nodejs.org/en/download/" target="_blank">Install node.js and npm on Windows, Linux or Mac OSX</a>

2. Enable pnpm with corepack

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

> _corepack is installed with node from **v16.13.x**, if your version is below, install it with: `npm install -g corepack`_

To setup the template and start installing project dependencies, run one of the following commands:

```bash
# using pnpm (recommended)
pnpm install
```

Note that you can also use other package manager (npm or yarn) but we recommend using pnpm:

```bash
# using npm
npm install

# using yarn
yarn install
```

## 🔃 Run a development server

To start the development server, run one of the following commands:

```bash
# using pnpm (recommended)
pnpm dev
```

Using npm or yarn

```bash
# using npm
npm run dev

# using yarn
yarn dev
```

This will run the `dev` script from the `package.json` file.

### Useful links

- http://vuejs.org/
  - https://vuejs.org/guide/extras/composition-api-faq.html
  - https://vuejs.org/api/#composition-api
  - https://vuejs.org/api/sfc-script-setup.html
  - https://vuejs.org/guide/typescript/overview.html
- https://vitejs.dev/
- https://pinia.vuejs.org/
- https://vueuse.org/
