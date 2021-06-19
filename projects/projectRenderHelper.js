export const renderProject = project => {
    document.getElementById("project-area").innerHTML += `
<section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ScreenShot"
            class="
              lg:w-1/2
              w-full
              lg:h-auto
              h-64
              object-cover object-center
              rounded
            "
            src="${project.imgSrc || "https://dummyimage.com/400x400"}"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 class="text-white text-3xl title-font font-medium mb-1">
              ${project.title || "untitled"}
            </h1>
            <div class="flex mb-4"></div>
            <p class="leading-relaxed">
              ${project.desc || ""}
            </p>
            <div
              class="
                flex
                mt-6
                items-center
                pb-5
                border-b-2 border-gray-800
                mb-5
              "
            ></div>
            <div class="flex">
            ${project.liveDemoLink ?
            `<a class="mr-auto" href="${project.liveDemoLink}">
                    <button
                        class="
                        flex
                        text-white
                        bg-blue-500
                        border-0
                        py-2
                        px-6
                        focus:outline-none
                        hover:bg-blue-600
                        rounded
                        "
                        >
                        Live Demo
                    </button>
                </a>`
            : ""}
            ${project.sourceCodeLink ?
            `<a class="mr-auto" href="${project.sourceCodeLink}">
                <button
                    class="
                    flex
                    text-white
                    bg-gray-800
                    border-0
                    py-2
                    px-6
                    focus:outline-none
                    hover:bg-blue-600
                    rounded
                    "
                    >
                    Source Code
                </button>
            </a>`
            : ""}
            ${project.learnMoreLink ?
            `<a class="mr-auto" href="${project.learnMoreLink}">
                    <button
                        class="
                        flex  
                        text-white
                        bg-gray-800
                        border-0
                        py-2
                        px-6
                        focus:outline-none
                        hover:bg-blue-600
                        rounded
                        "
                        >
                        Learn More
                    </button>
                </a>`
            : ""}            
            </div>
          </div>
        </div>
      </div>
    </section>`;
    ;
}