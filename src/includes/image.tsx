export type ImageProps = {
  path: string
  alt: string
  width: string
  height: string
  index?: number
}

export function Image({ path, alt, width, height, index }: ImageProps) {
  return (
    <a
      href={path}
      data-pswp-width={width}
      data-pswp-height={height}
      data-cropped="true">
      <img
        alt={alt}
        width={width}
        height={height}
        style={"--i: " + index}
        class="block h-full w-full object-cover object-center animate-fade-in-index animate transition duration-500 transform scale-100 hover:scale-110"
        src={path}
      />
    </a>
  )
}

//
