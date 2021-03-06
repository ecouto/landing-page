import React, { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { Review } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const ReviewCard: React.FC<Review> = (review) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  return (
    <S.Card>
      <S.User>
        <S.Image
          src={getImageUrl(review.photo.url)}
          alt={review.photo.alternativeText}
        />
        <S.Name>{review.name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${review.id}`} />
        <p className="description">{review.text}</p>
        <label className="label-more" htmlFor={`review-${review.id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard
