import { Button } from '../Button'
import { Divider } from '../Divider'
import { IconChevronDown } from '../../index'
import Typography from '../Typography'

import { Popover } from '.'
import { IconLogIn } from '../Icon/icons/IconLogIn'
import { Input } from '../Input'

export default {
  title: 'Navigation/Popover',
  component: Popover,
}

export const Default = (args: any) => (
  <div className="flex justify-center">
    <Popover
      {...args}
      side="bottom"
      align="center"
      portalled
      showClose
      className="w-96"
      overlay={[
        <>
          <div className="p-3 px-4">
            <Typography.Title className="mt-0" level={5}>
              Title is here
            </Typography.Title>
            <Input
              size="tiny"
              label="Width"
              defaultValue="100%"
              descriptionText="Set the width of something"
              layout="horizontal"
            />
            <Input
              size="tiny"
              label="Width"
              defaultValue="100%"
              descriptionText="Set the width of something"
              layout="horizontal"
            />
            <Input
              size="tiny"
              label="Width"
              defaultValue="100%"
              descriptionText="Set the width of something"
              layout="horizontal"
            />
          </div>
        </>,
      ]}
    >
      <Button as="span" type="outline" iconRight={<IconChevronDown />}>
        Click for Popover
      </Button>
    </Popover>
  </div>
)

Default.args = {}
