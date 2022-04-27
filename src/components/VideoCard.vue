<template>
  <div class="h-screen flex flex-col bg-gray-900 items-center justify-center">
    <div class="text-center mb-12">
      <h2 class="uppercase text-2xl text-white">LATEst Videos</h2>

      <div class="flex justify-center items-center gap-3">
        <div class="w-12 h-px bg-gray-200 my-6"></div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E55C5C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-video"
          >
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
        </div>
        <div class="w-12 h-px bg-gray-200 my-6"></div>
      </div>
      <p class="text-yellow-50 text-xs mt-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
        architecto totam voluptatum quos. Recusandae, molestiae dolorem. Alias
        aliquam non aut.
      </p>
    </div>
    <div class="bg-gray-900">
      <div class="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
        <!-- Video 1 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image Video -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/59/300/200"
                  class="w-96 h-auto"
                />
              </a>

              <p
                class="
                  absolute
                  right-2
                  bottom-2
                  bg-gray-900
                  text-gray-100 text-xs
                  px-1
                  py
                "
              >
                1:15
              </p>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Profile Picture -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/1/40/40"
                  class="rounded-full max-h-10 max-w-10"
                />
              </a>

              <!-- Description -->
              <div clas="flex flex-col">
                <a href="#">
                  <p class="text-gray-100 text-sm font-semibold">
                    Learn CSS Box Model in 8 Minutes
                  </p>
                </a>
                <a
                  class="text-gray-400 text-xs mt-2 hover:text-gray-100"
                  href="#"
                >
                  Web Dev Simplified
                </a>
                <p class="text-gray-400 text-xs mt-1">
                  241K views . 3 years ago
                </p>
              </div>
            </div>
          </card>
        </div>

        <!-- Video 2 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image Video -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/60/300/200"
                  class="w-96 h-auto"
                />
              </a>

              <p
                class="
                  absolute
                  right-2
                  bottom-2
                  bg-gray-900
                  text-gray-100 text-xs
                  px-1
                  py
                "
              >
                1:15
              </p>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Profile Picture -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/4/40/40"
                  class="rounded-full max-h-10 max-w-10"
                />
              </a>

              <!-- Description -->
              <div clas="flex flex-col">
                <a href="#">
                  <p class="text-gray-100 text-sm font-semibold">
                    Learn CSS Box Model in 8 Minutes
                  </p>
                </a>
                <a
                  class="text-gray-400 text-xs mt-2 hover:text-gray-100"
                  href="#"
                >
                  Web Dev Simplified
                </a>
                <p class="text-gray-400 text-xs mt-1">
                  241K views . 3 years ago
                </p>
              </div>
            </div>
          </card>
        </div>

        <!-- Video 3 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image Video -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/22/300/200"
                  class="w-96 h-auto"
                />
              </a>

              <p
                class="
                  absolute
                  right-2
                  bottom-2
                  bg-gray-900
                  text-gray-100 text-xs
                  px-1
                  py
                "
              >
                1:15
              </p>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Profile Picture -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/88/40/40"
                  class="rounded-full max-h-10 max-w-10"
                />
              </a>

              <!-- Description -->
              <div clas="flex flex-col">
                <a href="#">
                  <p class="text-gray-100 text-sm font-semibold">
                    Learn CSS Box Model in 8 Minutes
                  </p>
                </a>
                <a
                  class="text-gray-400 text-xs mt-2 hover:text-gray-100"
                  href="#"
                >
                  Web Dev Simplified
                </a>
                <p class="text-gray-400 text-xs mt-1">
                  241K views . 3 years ago
                </p>
              </div>
            </div>
          </card>
        </div>

        <!-- Video 4 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image Video -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/90/300/200"
                  class="w-96 h-auto"
                />
              </a>

              <p
                class="
                  absolute
                  right-2
                  bottom-2
                  bg-gray-900
                  text-gray-100 text-xs
                  px-1
                  py
                "
              >
                1:15
              </p>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Profile Picture -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/57/40/40"
                  class="rounded-full max-h-10 max-w-10"
                />
              </a>

              <!-- Description -->
              <div clas="flex flex-col">
                <a href="#">
                  <p class="text-gray-100 text-sm font-semibold">
                    Learn CSS Box Model in 8 Minutes
                  </p>
                </a>
                <a
                  class="text-gray-400 text-xs mt-2 hover:text-gray-100"
                  href="#"
                >
                  Web Dev Simplified
                </a>
                <p class="text-gray-400 text-xs mt-1">
                  241K views . 3 years ago
                </p>
              </div>
            </div>
          </card>
        </div>

        <!-- Video 1 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image Video -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/59/300/200"
                  class="w-96 h-auto"
                />
              </a>

              <p
                class="
                  absolute
                  right-2
                  bottom-2
                  bg-gray-900
                  text-gray-100 text-xs
                  px-1
                  py
                "
              >
                1:15
              </p>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Profile Picture -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/1/40/40"
                  class="rounded-full max-h-10 max-w-10"
                />
              </a>

              <!-- Description -->
              <div clas="flex flex-col">
                <a href="#">
                  <p class="text-gray-100 text-sm font-semibold">
                    Learn CSS Box Model in 8 Minutes
                  </p>
                </a>
                <a
                  class="text-gray-400 text-xs mt-2 hover:text-gray-100"
                  href="#"
                >
                  Web Dev Simplified
                </a>
                <p class="text-gray-400 text-xs mt-1">
                  241K views . 3 years ago
                </p>
              </div>
            </div>
          </card>
        </div>

        <!-- Video 2 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image Video -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/60/300/200"
                  class="w-96 h-auto"
                />
              </a>

              <p
                class="
                  absolute
                  right-2
                  bottom-2
                  bg-gray-900
                  text-gray-100 text-xs
                  px-1
                  py
                "
              >
                1:15
              </p>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Profile Picture -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/4/40/40"
                  class="rounded-full max-h-10 max-w-10"
                />
              </a>

              <!-- Description -->
              <div clas="flex flex-col">
                <a href="#">
                  <p class="text-gray-100 text-sm font-semibold">
                    Learn CSS Box Model in 8 Minutes
                  </p>
                </a>
                <a
                  class="text-gray-400 text-xs mt-2 hover:text-gray-100"
                  href="#"
                >
                  Web Dev Simplified
                </a>
                <p class="text-gray-400 text-xs mt-1">
                  241K views . 3 years ago
                </p>
              </div>
            </div>
          </card>
        </div>

        <!-- Video 3 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image Video -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/22/300/200"
                  class="w-96 h-auto"
                />
              </a>

              <p
                class="
                  absolute
                  right-2
                  bottom-2
                  bg-gray-900
                  text-gray-100 text-xs
                  px-1
                  py
                "
              >
                1:15
              </p>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Profile Picture -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/88/40/40"
                  class="rounded-full max-h-10 max-w-10"
                />
              </a>

              <!-- Description -->
              <div clas="flex flex-col">
                <a href="#">
                  <p class="text-gray-100 text-sm font-semibold">
                    Learn CSS Box Model in 8 Minutes
                  </p>
                </a>
                <a
                  class="text-gray-400 text-xs mt-2 hover:text-gray-100"
                  href="#"
                >
                  Web Dev Simplified
                </a>
                <p class="text-gray-400 text-xs mt-1">
                  241K views . 3 years ago
                </p>
              </div>
            </div>
          </card>
        </div>

        <!-- Video 4 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image Video -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/90/300/200"
                  class="w-96 h-auto"
                />
              </a>

              <p
                class="
                  absolute
                  right-2
                  bottom-2
                  bg-gray-900
                  text-gray-100 text-xs
                  px-1
                  py
                "
              >
                1:15
              </p>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Profile Picture -->
              <a href="#">
                <img
                  src="https://picsum.photos/seed/57/40/40"
                  class="rounded-full max-h-10 max-w-10"
                />
              </a>

              <!-- Description -->
              <div clas="flex flex-col">
                <a href="#">
                  <p class="text-gray-100 text-sm font-semibold">
                    Learn CSS Box Model in 8 Minutes
                  </p>
                </a>
                <a
                  class="text-gray-400 text-xs mt-2 hover:text-gray-100"
                  href="#"
                >
                  Web Dev Simplified
                </a>
                <p class="text-gray-400 text-xs mt-1">
                  241K views . 3 years ago
                </p>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCard",
  data() {
    return {};
  },
};
</script>

<style>
</style>