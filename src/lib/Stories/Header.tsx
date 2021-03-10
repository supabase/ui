import { Space, IconArrowUpRight } from './../../index'

export default function Header({ img }) {
  return (
    <>
      <img className="preview-header" src={img} alt="Button" width="100%" />
      <div className="mb-8">
        <a
          href="https://github.com/supabase/ui"
          style={{ textDecoration: 'none' }}
        >
          <Space>
            <IconArrowUpRight /> <span>View on github</span>
          </Space>
        </a>

        <a
          href="https://github.com/supabase/ui"
          style={{ textDecoration: 'none' }}
        >
          <Space>
            <IconArrowUpRight /> <span>Report an issue</span>
          </Space>
        </a>
      </div>
    </>
  )
}
