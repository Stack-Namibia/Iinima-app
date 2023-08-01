interface Props {
  name: string;
  imageUrl: string | null;
}

const CategoryCard = ({ name, imageUrl }: Props) => {
  return (
    <div className='card card-compact w-full bg-white shadow-xl'>
      <figure className='max-h-32'>
        {imageUrl ? (
          <img src={imageUrl} alt={name} />
        ) : (
          <img src='/placeholder.png' alt={name} />
        )}
      </figure>
      <div className='card-body items-center text-black'>
        <h2 className='card-title text-center text-sm'>{name}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
