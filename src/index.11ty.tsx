import { BaseLayout } from "./layouts/base.11ty";
import { Image } from "./includes/image"
import { ViewProps } from "./props"

export function IndexPage({ page }: ViewProps): JSX.Element {
  return (
    <BaseLayout page={page}>
      <script type="module" src="/assets/js/lightbox.js"></script>
      <h1 class="text-4xl pt-10 pb-8 font-bold">PORTFOLIO</h1>
      <section class="text-neutral-700">
        <div class="container w-full">
          <div class="flex flex-wrap w-full" id="gallery-index">
            <div class="flex w-full md:w-1/2 flex-wrap">
              <div class="w-full md:w-1/2 p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1675789203977-70070dae0799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    width="870"
                    height="1160"
                    alt="a person standing in front of a rock formation" />
                </div>
              </div>
              <div class="w-full md:w-1/2 p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1674985594089-eab270e843c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1963&q=80"
                    width="1963"
                    height="3490"
                    alt="a cat laying on top of a sidewalk next to the ocean" />
                </div>
              </div>
              <div class="w-full p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1667093060577-02f07eb01585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80"
                    width="1750"
                    height="1160"
                    alt="a man standing on a beach next to the ocean" />
                </div>
              </div>
            </div>
            <div class="flex w-full md:w-1/2 flex-wrap">
              <div class="w-full p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1676978647680-0e60a584c5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    width="1740"
                    height="1160"
                    alt="a snow covered mountain with trees on the side" />
                </div>
              </div>
              <div class="w-full md:w-1/2 p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1675910568522-c187fd74d5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    width="1740"
                    height="1160"
                    alt="a branch of a plant floating in a body of water" />
                </div>
              </div>
              <div class="w-full md:w-1/2 p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1675971074488-351394caf6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    width="1740"
                    height="1160"
                    alt="a blue sky with a lot of red and orange clouds" />
                </div>
              </div>
              <div class="w-full md:w-1/2 p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1655908932015-7650b401e2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    width="1740"
                    height="1160"
                    alt="a view of the ocean from the top of a hill" />
                </div>
              </div>
              <div class="w-full md:w-1/2 p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1675189729507-b90d7cb6c592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1816&q=80"
                    width="1816"
                    height="1150"
                    alt="a pheasant flying in the sky with its wings spread" />
                </div>
              </div>
            </div>

            <div class="flex w-full md:w-1/2 flex-wrap">
              <div class="w-full p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1654018869756-d08407972836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2918&q=80"
                    width="2918"
                    height="1461"
                    alt="a statue of a man next to a statue of a woman" />
                </div>
              </div>
              <div class="w-full md:w-1/2 p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1677075610184-57d21d023e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                    width="1742"
                    height="1161"
                    alt="a city street with tall buildings in the background" />
                </div>
              </div>
              <div class="w-full md:w-1/2 p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1558102400-72da9fdbecae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80"
                    width="1592"
                    height="1160"
                    alt="25 de abril bridge spanning over Tagus river" />
                </div>
              </div>
              <div class="w-full md:w-1/2 p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1510673825466-302bc330ab95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
                    width="1744"
                    height="1161"
                    alt="a lot of lanterns floating in the air at night" />
                </div>
              </div>
              <div class="w-full md:w-1/2 p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1675620705848-bcab2d4d98a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    width="870"
                    height="1160"
                    alt="a flock of seaguls flying over a body of water" />
                </div>
              </div>
            </div>
            <div class="flex w-full md:w-1/2 flex-wrap">
              <div class="w-full md:w-1/2 p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1642415390616-2ac6727ac550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    width="774"
                    height="1161"
                    alt="a statue of a headless angel" />
                </div>
              </div>
              <div class="w-full md:w-1/2 p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1551346072-8ba2706b0f36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80"
                    width="2052"
                    height="1161"
                    alt="Monument to the Discoveries viewed from top to bottom" />
                </div>
              </div>
              <div class="w-full p-1">
                <div class="overflow-hidden h-full w-full">
                  <Image path="https://images.unsplash.com/photo-1624385690664-38a3af477cd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    width="1740"
                    height="1160"
                    alt="a group of people walking along the museum of art, architecture and technology of lisbon next to the Tagus river" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}

export const render = IndexPage
