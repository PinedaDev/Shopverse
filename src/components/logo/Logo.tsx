import logoImg from '../../assets/logo.png'

const Logo = () => {
  return (
    <div className="flex justify-between items-center">
      <img src={logoImg} alt="shopverse logo" />
      <h1 className="ml-2 font-normal text-3xl text-gray-300 hidden lg:inline">SHOPVERSE</h1>
    </div>
  )
}

export default Logo
