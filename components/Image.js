import Image from 'next/image'

export const ProfileImage = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height="341px" // Desired size with correct aspect ratio
    width="260px" // Desired size with correct aspect ratio
    alt="Nirmal"
  />
)
