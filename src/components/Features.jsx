import React, { useState } from 'react';
import FeatureItem from './FeatureItem';

export default function Features() {
  const featuresData = [
    {
      title: 'Donec porta enim vel',
      description: 'Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    },
    {
      title: 'Aliquam sit amet nunc ut',
      description: 'Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.',
    },
    {
      title: 'Pellentesque habitant morbi',
      description: 'Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.',
    },
  ];

  const [visibleCount, setVisibleCount] = useState(0);

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
    <div className="container max-w-5xl px-0 py-12 mx-auto">
      <div className="relative space-y-0">
        {featuresData.map((item, index) => (
          <FeatureItem
            key={index}
            title={item.title}
            description={item.description}
            index={index}
            onScrollIn={() => setVisibleCount((prev) => Math.max(prev, index + 1))} // Update visible count
          />
        ))}
      </div>
    </div>
  </section>
  );
}



