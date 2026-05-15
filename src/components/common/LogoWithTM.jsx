import React from 'react'
import logoImage from '../../Logo/Sign Taxi.bf513dbcfde59f174016.png'

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
}

const LogoWithTM = ({
  alt = 'SignTaxi',
  imgClassName = 'h-10 md:h-12',
  align = 'end',
  tmClassName = '',
}) => (
  <div className={`inline-flex flex-col ${alignMap[align] || alignMap.end}`}>
    <span
      className={`text-[8px] md:text-[9px] font-bold text-amber-700 leading-none mb-0.5 pr-0.5 ${tmClassName}`}
      aria-hidden="true"
    >
      TM
    </span>
    <img src={logoImage} alt={alt} className={imgClassName} />
  </div>
)

export default LogoWithTM
