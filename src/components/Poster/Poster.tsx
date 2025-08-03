import React from 'react'
import { Title, TitleProps } from '../Title/Title';
import { Description, DescriptionProps } from '../Description/Description';
import { Image, ImageProps } from '../Image/Image';
import { Form, FormProps } from '../Form/Form';

export interface PosterProps {
    title: TitleProps;
    imageUrl: ImageProps;
    description: DescriptionProps;
    form: FormProps;
}

export const Poster: React.FC<PosterProps> = ({ title, imageUrl, description, form }) => {
  return (
    <article style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Title {...title} />
        <Image {...imageUrl} />
        <Description {...description} />
        <div style={{ margin: '0 auto' }}>
            <Form {...form} />
        </div>
    </article>
  )
}
