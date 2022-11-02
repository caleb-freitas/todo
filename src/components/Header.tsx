import logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <header className="flex justify-center bg-gray-7000 py-16">
      <div>
        <img src={logo} alt="" />
      </div>
    </header>
  )
}
