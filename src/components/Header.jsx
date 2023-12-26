import ThemeToggle from "./ThemeToggle"

const Header = () => {
  return (
    <>
      <nav className="bg-gray-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-600">
        <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-stretch justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="ml-6 text-lg">Roasberry Case Study</div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;
