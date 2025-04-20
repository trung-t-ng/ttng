import Image from 'next/image';

export default function ProfilePhoto() {
  return (
    <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
      <Image
        src="/me.jpeg"
        alt="Trung Nguyen"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
} 