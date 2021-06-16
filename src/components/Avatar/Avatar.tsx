import React from 'react'
// @ts-ignore
import AvatarStyles from './Avatar.module.css'

interface Props {
    children?: React.ReactNode,
    source?: string
    style?: React.CSSProperties
    className?: string
    alt?: string
    responsive?: boolean
    text?: string
    variant?: 'circle' | 'square'
    icon?: React.ReactNode
    size: number
}

export default function Avatar({
    source,
    style,
    className,
    alt,
    responsive,
    text,
    variant,
    icon,
    size
}: Props){
    const classes = [AvatarStyles['sbui-avatar']]
    classes.push(className);
    let objectToRender

    const imageExist = () => {
        const img = new Image()
        img.src = source
        if(img.complete){
            return true
        }else{
            img.onload = () => {
                return true
            }
            img.onerror = () => {
                return false
            }
        }
    }

    if(imageExist && typeof source === 'string'){
        classes.push(AvatarStyles['sbui-avatar-image'])
        objectToRender = (
            <img 
                className={classes.join(' ')} 
                src={source} 
                alt={alt} 
                style={style}
            />
        )
    }else if(icon){
        classes.push(AvatarStyles['sbui-avatar-icon'])
        objectToRender = (
            <div className={classes.join(' ')} style={style}>
                //TODO: Implement Icon
            </div>
        )
    }else if(text){
        classes.push(AvatarStyles['sbui-avatar-text'])
        objectToRender = (
            <div className={classes.join(' ')} style={style}>
                <p>{text[0]}</p>
            </div>
        )
    }


    return (
        <>
            {objectToRender}
        </>
    )
}
