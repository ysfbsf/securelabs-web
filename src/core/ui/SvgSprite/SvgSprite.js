import React from 'react'

// Sprite
import sprite from './sprite.svg'

export const SvgSprite = ({className, spriteID, onClick}) => {
    return (
        <svg className={className} onClick={onClick}>
            <use href={`${sprite}#${spriteID}`} />
        </svg>
    )
}
