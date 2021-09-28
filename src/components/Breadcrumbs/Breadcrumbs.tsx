import { IconChevronRight } from '../Icon/icons/IconChevronRight'
import BreadcrumbsStyles from './Breadcrumbs.module.css'

interface Props {
  children?: [React.ReactNode]
  className?: string
  style?: React.CSSProperties
}

const Breadcrumbs = ({ className, style, children }: Props) => {
  let classes = [BreadcrumbsStyles['sbui-breadcrumbs--container']]

  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')} style={{ backgroundColor: '#fff' }}>
      {children!.map((child: React.ReactNode, idx: number) => (
        <>
          {child}
          {idx + 1 < children!.length && (
            <IconChevronRight
              className={BreadcrumbsStyles['sbui-breadcrumbs--separator']}
            />
          )}
        </>
      ))}
    </div>
  )
}

export default Breadcrumbs
