import Avatar from '.'

const story = {
  title: 'General/AvatarGroup',
  component: Avatar.Group,
}

export default story

export const Default = (args: any) => {
  return (
    <>
      <Avatar.Group {...args}>
        <Avatar text="test" size={50} />
        <Avatar text="test" size={50} />
        <Avatar text="test" size={50} />
        <Avatar text="test" size={50} />
      </Avatar.Group>
    </>
  )
}
