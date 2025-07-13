import { JSX } from "react"

import { BaseLayout } from "./base.11ty"
import { Image } from "../includes/image"
import { ViewProps } from "../props"

export type GridPageImage = {
  path: string
  width: number
  height: number
  alt: string
  rows?: number | 1
  cols?: number | 1
}

export interface GridPageProps extends ViewProps {
  cols: number
  images: GridPageImage[]
}

export function GridPage({ page, cols, images }: GridPageProps): JSX.Element {
  return (
    <BaseLayout page={page}>
      <script type="module" src="/assets/js/lightbox.js"></script>
      <h1 class="text-4xl pt-10 pb-8 font-bold">PORTFOLIO</h1>
      <section class="text-neutral-700">
        <div class="container w-full">
          <div
            class={`grid grid-cols-${cols} gap-2 auto-rows-[90px] w-full`}
            id="gallery-index">
            {images.map((img, index) => {
              let className = "overflow-hidden"
              if (img.rows && img.rows > 1) className += ` row-span-${img.rows}`
              if (img.cols && img.cols > 1) className += ` col-span-${img.cols}`
              return (
                <div class={className}>
                  <Image
                    path={img.path}
                    width={img.width + ""}
                    height={img.height + ""}
                    alt={img.alt}
                    index={index}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}

export const render = GridPage
