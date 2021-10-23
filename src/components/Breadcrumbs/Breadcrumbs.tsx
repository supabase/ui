import { IconChevronRight } from '../Icon/icons/IconChevronRight'
import BreadcrumbsStyles from './Breadcrumbs.module.css'

interface Props {
  children?: [React.ReactNode]
  className?: string
  style?: React.CSSProperties
  spacing?: 'small' | 'medium' | 'large'
}

const Breadcrumbs = ({
  className,
  style,
  children,
  spacing = 'small',
}: Props) => {
  let classes = [BreadcrumbsStyles['sbui-breadcrumbs--container']]
  let seperatorClasses = [BreadcrumbsStyles['sbui-breadcrumbs--separator']]

  if (className) {
    classes.push(className)
  }

  if (spacing) {
    seperatorClasses.push(`sbui-breadcrumbs--separator-${spacing}`)
  }

  return (
    <div className={classes.join(' ')}>
      {children!.map((child: React.ReactNode, idx: number) => (
        <>
          <span className={BreadcrumbsStyles['sbui-breadcrumbs--item']}>
            {child}
          </span>
          {idx + 1 < children!.length && (
            <IconChevronRight className={seperatorClasses.join(' ')} />
          )}
        </>
      ))}
    </div>
  )
}

export default Breadcrumbs
