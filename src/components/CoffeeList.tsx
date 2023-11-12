import { CoffeeShopp } from "../types";
interface Props {
  coffee: CoffeeShopp[];
}
const CoffeeList = ({ coffee }: Props) => {
  return (
    <section className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
      {coffee.map((cofe) => (
        <article
          key={cofe.id}
          className='space-y-2'>
          <div className='rounded-md relative'>
            <span className='absolute left-2 text-[12px] top-2 '>
              {cofe.popular ? (
                <span className='left-2 text-[12px] top-2 bg-[#F6C768] rounded-full p-[10px] py-[3px] text-[#111315]'>
                  Popular
                </span>
              ) : (
                ""
              )}
            </span>
            <img
              className='rounded-xl'
              src={cofe.image}
              alt={cofe.name}
            />
          </div>
          <div className='space-y-2'>
            <div className='flex justify-between items-center text-[12px] font-semibold'>
              <span>{cofe.name}</span>
              <span className='px-[4px] py-[2px] bg-[#BEE3CC] rounded-md text-[#111315]'>
                {cofe.price}
              </span>
            </div>
            <div className='flex justify-between text-[10px]'>
              <div className='flex gap-1 items-center'>
                <img
                  src={`${
                    cofe.votes > 0
                      ? "./images/Star_fill.svg"
                      : "./images/Star.svg"
                  }`}
                  alt=''
                />
                {cofe.votes === 0 ? (
                  <span className='text-[#6F757C]'>No raitins</span>
                ) : (
                  <>
                    <span>{cofe.rating}</span>
                    <span className='text-[#6F757C]'>({cofe.votes})</span>
                  </>
                )}
              </div>
              <span className='text-[#ED735D]'>
                {cofe.available ? "" : "Sold-out"}
              </span>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default CoffeeList;
