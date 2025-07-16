export default function Header() {
  return (
    <header class="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav class="container flex items-center justify-between py-6">
        <a href="./index.html">
          <img class="h-9" src="./assets/logo.svg" alt="Weather App" />
        </a>

        <div class="flex items-center gap-4 relative">
          <form action="#">
            <div class="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
              <input
                class="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                type="search"
                placeholder="Search Location"
                required
              />
              <button type="submit">
                <img src="./assets/search.svg" />
              </button>
            </div>
          </form>
          <div class="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src="./assets/heart.svg" alt="" />
            <span>Favourite Locations</span>
          </div>

          {/* <!-- Modal --> */}
          <div class="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
            <h3 class="text-lg font-bold px-4">Favourite Locations</h3>
            <ul class="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
              <li class="hover:bg-gray-200">Dhaka</li>
              <li class="hover:bg-gray-200">Rangpur</li>
              <li class="hover:bg-gray-200">Europe</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
