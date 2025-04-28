import Footer from "./components/Footer"
import Header from "./components/Header"
import MainFrame from "./components/MainFrame"
import Section from "./components/Section"
import Slidebar from "./components/Slidebar"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Component */}
      <Header />
      {/*SlideBar*/ }
      <Slidebar />
      {/* Main Content */}
      <MainFrame />
      <Section />
      {/* Footer Component */}
      <Footer />
    </div>
  )
}

function SidebarItem({ children }) {
  return (
    <a href="#" className="block px-4 py-3 border-b border-gray-100 hover:bg-gray-50 flex items-center">
      <span className="text-indigo-900 mr-2">▶</span>
      {children}
    </a>
  )
}

function AnnouncementItem({ title, date, isNew = false }) {
  return (
    <div className="mb-3 pb-3 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
      <a href="#" className="block hover:text-indigo-700">
        <div className="flex items-start">
          <span className="text-indigo-900 mr-2">▶</span>
          <div>
            <p className="text-sm">{title}</p>
            <div className="flex items-center mt-1">
              <span className="text-xs text-gray-500">{date}</span>
              {isNew && <span className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">NEW</span>}
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

function NewsItem({ title, date, isNew = false, image }) {
  return (
    <div className="mb-4 pb-4 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
      <a href="#" className="block hover:text-indigo-700">
        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            {image ? (
              <img src={image || "/placeholder.svg"} alt={title} className="w-16 h-16 object-cover rounded" />
            ) : (
              <div className="w-16 h-16 bg-gray-200 rounded"></div>
            )}
          </div>
          <div>
            <p className="text-sm font-medium">{title}</p>
            <div className="flex items-center mt-1">
              <span className="text-xs text-gray-500">{date}</span>
              {isNew && <span className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">NEW</span>}
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default App
