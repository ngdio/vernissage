import { ViewProps } from "../props"
import menus from "../data/menus.json"

export function Header({ page }: ViewProps) {
  return (
    <header class="flex w-full overflow-hidden pt-10 pb-1">
      <nav id="nav" x-data="{ open: false }" role="navigation" class="w-full">
        <div class="container mx-auto flex flex-wrap items-center md:flex-no-wrap">
          <div class="mr-4 md:mr-8">
            <a href="/" class="text-2xl font-signika font-bold">SOPHIA WILLIAMS</a>
          </div>
          <div class="ml-auto md:hidden flex items-center justify-start">
            <button onclick="menuToggle()"
                    x-on:click="open = !open"
                    class="tap-highlight-transparent text-black dark:text-white w-5 h-5 relative focus:outline-none">
              <span class="sr-only">Open main menu</span>
              <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span aria-hidden="true"
                      class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                      x-bind:class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
                <span aria-hidden="true"
                      class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out"
                      x-bind:class="{'opacity-0': open } "></span>
                <span aria-hidden="true"
                      class="block absolute h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out"
                      x-bind:class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
              </div>
            </button>
          </div>
          <div id="menu"
              class="w-full h-0 transition-all ease-out duration-500 md:transition-none md:w-auto md:flex-grow md:flex md:items-center">
            <ul id="ulMenu"
                class="flex flex-col duration-300 ease-out md:space-x-5 sm:transition-none mt-5 md:flex-row md:items-center md:ml-auto md:mt-0 md:pt-0 md:border-0">
              { menus.header.map((entry: { url: string; title: string }) => (
                <li class="group transition duration-300">
                  <a href={entry.url}
                    class="font-signika text-2xl tap-highlight-transparent">
                    {entry.title}
                    <span class={`hidden md:block h-0.5 bg-black dark:bg-white ${
                      entry.url === page.url 
                      ? "max-w-full"
                      : "max-w-0 group-hover:max-w-full transition-all duration-500"}`}></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
