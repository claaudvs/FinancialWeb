'use client'

import './Card.component.css'
import Card from '@mui/material/Card'
import React, { type MouseEvent } from 'react'
import { CardContent, Typography } from '@mui/material'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

interface CardProps {
  title: string
  icon: string | StaticImageData
  onCardClick: (event: MouseEvent<HTMLDivElement>) => void
  path: string
}

function CardComponent ({
  title,
  icon,
  onCardClick,
  path
}: CardProps): JSX.Element {
  return (
    <div onClick={onCardClick}>
      <Link href={path} style={{ textDecoration: 'none' }}>
        <Card className='card'>
          <CardContent>
            <Image
              className='card-image'
              priority={true}
              src={icon}
              alt={title}
            />
          </CardContent>
          <Typography className='card-title'>{title}</Typography>
        </Card>
      </Link>
    </div>
  )
}

export default CardComponent
