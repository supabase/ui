# Supabase UI

Supabase UI is a React UI library.

🚧  
Supabase UI is still a work-in-progress until a major release is published.

[![Product hunt](https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=290768&theme=light)](https://www.producthunt.com/posts/supabase-ui)

[View docs](https://ui.supabase.com)

## Install Supabase UI

### Install TailwindCSS

You will need to have tailwind already installed.
Follow the instructions for [installing tailwind on their docs](https://tailwindcss.com/docs/installation/framework-guides).

You will need to use at least tailwind v3.

### Install Supabase UI package

After that, you can go ahead and install Supabase UI.

```cli
npm install @supabase/ui
```

### Modify the tailwind config

You will need to update tailwind.config.js in the root of your project.

#### Default tailwind.config.js tailwind setup
This is what a regular tailwind config file looks like

```js

// tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```


#### Update tailwind.config.js to the following

You will need to wrap the SupabaseUI config around your own tailwind config like below.
Also add the new purge rules

```js

// using Supabase UI

// tailwind.config.js
const ui = require('@supabase/ui/dist/config/ui.config.js')

module.exports = ui({
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@supabase/ui/dist/config/default-theme.js', // add this
  ],
 theme: {
    extend: {},
  },
  plugins: [],
})
```


## Using Supabase UI

### Colors

Supabase UI uses Radix Colors for everything, and all the colors are already set up and ready to use once the installation above is complete.

**Scale**

In addition to accessing all colors from Radix, we have also assigned a new color pallete called `scale`. This is the designated grayscale color we use throughout all the component. 

`scale`, as a default, is actually just the radix `gray` in dark mode, and radix `slate` in light mode. The colors are stored as CSS variables, so they can be swapped out for other color scales. These serve as the backbone of the components theme. It is advised you use `scale` whereever possible.

**Dark mode**

### Typography

Use tailwind classes as normal for typography, but use `text-scale-*` classes for the text color.

You can also use the class `text-code` to style text for inline code blocks.

```jsx

const index = () => {
  <body>
    <h1 className="text-xl text-scale-1200">Hello world, this is a header, using scale-1200</h1>
    <p className="text-sm text-scale-1100">This is a paragraph that is using scale-1100</h1>
    <p className="text-xs text-scale-900">This is a paragraph that is small and more gray, for things like captions</p>
    <p className="text-xs text-code">{"$ npm install @supabase/ui"}</p>
  </body>
}
```

Example of importing a component

```js
import { Button } from '@supabase/ui'

//...

return <Button>I am a Supabase UI button</Button>
```

It is probably advisable to use [Normalize](https://github.com/sindresorhus/modern-normalize) with Supabase UI for the timebeing.

### Using Icons

We use [Feather icon library](https://feathericons.com/) in Supabase UI

You can use any Icon from the library as a component by prepending `Icon` to any Icon name, like, `<IconMail>`

```js
import { IconMail } from '@supabase/ui'

//...

return <IconMail size="small" />
```

## Using Supabase UI Auth

You can use our Auth widget straight out the box with Supabase auth including social logins.

<img width="380" alt="Screenshot 2021-02-05 at 19 25 01" src="https://user-images.githubusercontent.com/8291514/107029572-32f72d00-67ea-11eb-982e-e737f052eea1.png">

The Auth component also includes a context component which detects whether a user is logged in or not.

Make sure to also install `@supabase/supabase-js`

```cli
npm install @supabase/supabase-js
```

You can then easily import `Auth` from the ui library and pass the `createClient` to the `Auth` component.

```js
import { Auth, Typography, Button } from '@supabase/ui'
import { createClient } from '@supabase/supabase-js'

const { Text } = Typography

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://xyzcompany.supabase.co',
  'public-anon-key'
)

const Container = (props) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Text>Signed in: {user.email}</Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    )
  return props.children
}

export default function Home() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container supabaseClient={supabase}>
        <Auth providers={['facebook', 'github']} supabaseClient={supabase} />
      </Container>
    </Auth.UserContextProvider>
  )
}
```

## Roadmap

Some of these are a work in progress - we invite anyone to submit a [feature request](https://github.com/supabase/ui/issues/new?labels=enhancement&template=2.Feature_request.md) if there is something you would like to see.

_General_

- [x] Button
- [x] Typography
- [x] Icon
- [x] Image (work in progress)

_Data Input_

- [x] Input
- [x] InputNumber
- [x] Select (custom select wip)
- [x] Checkbox
- [x] Radio
- [x] Toggle
- [ ] Upload
- [ ] Slider
- [ ] Date picker
- [ ] Time picker
- [ ] Form

_Layout_

- [ ] ~~Layout~~
- [ ] ~~Grid (Flex)~~
- [x] Divider
- [x] Space (Flex)

_Display_

- [x] Card
- [ ] Avatar
- [x] Accordion
- [x] Alert
- [x] Badge
- [x] Menu
- [ ] Tooltips
- [ ] Tables
- [ ] Code block

_Navigation_

- [x] Tabs
- [x] Breadcrumb
- [x] Dropdown
- [x] Menu
- [ ] Page Header
- [ ] Sidebar
- [ ] Flyout menu
- [ ] Steps

_Overlay_

- [x] Modal
- [x] Context Menu
- [x] Drawer / SidePanel
- [ ] Toast messages / Notification
- [ ] Progress
- [ ] Feeds / Timeline

_Utility_

- [x] Loading
- [x] Transition (work in progress)

_Misc_

- [x] Storybook docs
- [ ] Theming (in progress)
- [x] Supabase Auth Elements
- [x] Documentation website

We would be keen to hear any feedback on this project.

Feel free to [submit a question or idea here](https://github.com/supabase/supabase/discussions/category_choices)
