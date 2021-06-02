import React from 'react'
// @ts-ignore
import ImageStyles from './Image.module.css'

interface Props {
    source?: string
    style?: React.CSSProperties
    className?: string
    type?: 'avatar' | 'normal'
    alt?: string
    responsive?: boolean
}

export default function Image({
    source,
    style,
    className,
    type,
    alt,
    responsive
}: Props){
    let classes = [type==='avatar' ? ImageStyles['sbui-image-avatar'] : ImageStyles['sbui-image-normal']]
    if(responsive) classes.push(ImageStyles['sbui-image-responsive'])
    if (className) classes.push(className)
    return (
        <div>
            <img className={classes.join(' ')} src={source} style={style} alt={alt} />
        </div>
    )
}
