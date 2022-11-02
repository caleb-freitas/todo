import logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <header className="bg-gray-700 py-16 flex justify-center">
      <div>
        <img src={logo} alt="" />
      </div>
    </header>
  )
}
