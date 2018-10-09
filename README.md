# SKE 12 Guide

## Development

### Environment

Before development make sure you copy the following env in your `.env`

ENV Key | Description |
--- | --- |
FIRE_API_KEY | Firebase API Key |
FIRE_AUTH_DOMAIN | Firebase Authentication Domain |
FIRE_DB_URL | Firebase Database URL |
FIRE_PROJECT_ID | Firebase Project ID |
FIRE_STOREAGE_BUCKET | Firebase Storage Bucket URL |
FIRE_MSGS_ID | Firebase Message Sender ID |

### Import

We already setup this project to use absolute path import! Please use it! Because it is better way to do descriptive programming. However using `./` is acceptable.

ps. We implemented `jsconfig.json`, so jumping to each file can be done easily by press `ctrl+click`.

#### ❌ Don't
```js
import '../../styles/navbar.css'
```

#### ✅ Do
```js
import 'common/styles/navbar.css'
```

### Styling

`CSS in JS` is seem to be great way to do styling in React Application. Because we can avoid duplicate class name which can be happen in CSS file. `Styled-components` is the `CSS in JS` library that we use.

#### ❌ Don't
```js
import 'common/styles/navbar.css'
```

#### ❌ Don't
```jsx
<span style={{ color: 'red' }}>SKE 12</span>
```

#### ✅ Do
```js
import styled from 'styled-components'

export const RedText = styled.span`
    color: red;
`
```

```jsx
import { RedText } from './styled'

<RedText>SKE 12 </RedText>
```
