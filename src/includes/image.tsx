export type ImageProps = {
  path: string
  alt: string
  width: string
  height: string
}

export function Image({path, alt, width, height}: ImageProps) {
  return (
    <a href={path}
      data-pswp-width={width}
      data-pswp-height={height}
      data-cropped="true">
      <img alt={alt}
        width={width} height={height}
        class="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
        src={path} />
    </a>
  )
}
