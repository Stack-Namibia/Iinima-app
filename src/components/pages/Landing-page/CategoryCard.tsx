interface Props {
  name: string;
  imageUrl: string;
}

const CategoryCard = ({ name, imageUrl }: Props) => (
  <div className='card card-compact w-full bg-white shadow-xl'>
    <figure>
      <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
    </figure>
    <div className='card-body items-center text-black'>
      <h2 className='card-title text-center'>{name}</h2>
    </div>
  </div>
);

export default CategoryCard;
