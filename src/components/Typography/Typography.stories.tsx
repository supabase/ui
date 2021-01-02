import React from 'react'
// import { AutoForm } from 'uniforms'
// @ts-ignore
import MarkdownExample from './../../lib/MarkdownSample.md'
import ReactMarkdown from 'react-markdown'
const gfm = require('remark-gfm')

import Typography from '.'
// @ts-ignore
import { Space } from '../../index'

const { Title, Text, Link } = Typography

export default {
  title: 'General/Typography',
  component: Typography
}

export const article = () => (
  <Typography tag="article">
    <ReactMarkdown plugins={[gfm]} source={MarkdownExample} />
  </Typography>
)

export const Titles = () => (
  <React.Fragment>
    <Title level={1}>Hello world</Title>
    <Title level={2}>Hello world</Title>
    <Title level={3}>Hello world</Title>
    <Title level={4}>Hello world</Title>
    <Title level={5}>Hello world</Title>
  </React.Fragment>
)

export const Texts = () => (
  <Space size={2} direction="vertical">
    <Text>Supabase UI (default)</Text>
    <Text type="secondary">Supabase UI (secondary)</Text>
    <Text type="success">Supabase UI (success)</Text>
    <Text type="warning">Supabase UI (warning)</Text>
    <Text type="danger">Supabase UI (danger)</Text>
    <Text disabled>Supabase UI (disabled)</Text>
    <Text mark>Supabase UI (mark)</Text>
    <Text code>Supabase UI (code)</Text>
    <Text keyboard>Supabase UI (keyboard)</Text>
    <Text underline>Supabase UI (underline)</Text>
    <Text strikethrough>Supabase UI (strikethrough)</Text>
    <Text strong>Supabase UI (strong)</Text>
    <Link href="https://supabase.io" target="_blank">
      Supabase (Link)
    </Link>
  </Space>
)