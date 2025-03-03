import Image from 'next/image'

function LogoIcon() {
  return (
    <Image
      src='/images/app.png' // Path to the image in the public folder
      alt='Logo'
      layout='intrinsic' // Adjust the layout to be intrinsic
      width={500} // Set a specific width or leave it out for automatic sizing
      height={500} // Set a specific height or leave it out for automatic sizing
      style={{
        maxWidth: '100%',
        maxHeight: '100%'
      }} // Customize the style as needed
    />
  )
}

export default LogoIcon
